import React from 'react';
import './App.css';
import Card from './Card';
import WeatherInfo from './WeatherInfo.js';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      city:'',
      info: [],
      pollution:[],
      bg: '',
    };
  };
  fetchData = (city,api)=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`)
    .then(response => response.json())
    .then(weather=>{this.setState({info: weather})
      return weather}) 
    .then(data => {fetch(`https://api.airvisual.com/v2/nearest_city?lat=${data.coord.lat}&lon=${data.coord.lon}&key='API'`)
                      .then(response =>response.json())
                      .then (air=>{this.setState({pollution: air})
                        return air;
                    })
                  })  
    .catch(error => alert('Ooops, something went wrong'));
  } 
  searchCity = (event) => {
    this.setState({city: event.target.value})
 };
 fetchBG = () => { 
  let lat = this.state.info.coord.lat;
  let lon = this.state.info.coord.lon;
  fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='API'&lat=${lat}&lon=${lon}&format=json&nojsoncallback=1&sort=interestingness-desc&accuracy=11&geo_context=2&content_type=1`)
  .then(response =>response.json())
  .then(bg =>{this.setState({bg:bg})
    return bg;  
})
  .catch(error => console.log(error));
}
  ifEnter = (event) =>{
    if (event.key === 'Enter') {
      let cityName=this.state.city;
      const api = 'API';
      this.fetchData(cityName,api);
      setTimeout(() => {
        this.fetchBG();
        console.log(this.state.bg);
      }, 800); 

    }
  }
  
  render(){
    return (
      <div className="App">
        < Card searchCity={this.searchCity} onSubmit={this.onSubmit} afEnter={this.ifEnter}/>
        {(typeof this.state.info.main != 'undefined' && typeof this.state.pollution.data != 'undefined' && typeof this.state.bg.photos != 'undefined' ) ? (
        < WeatherInfo info = {this.state.info} air = {this.state.pollution} bg={this.state.bg}/>
      ): (
        <div><h1 className='f2 noentry'>Enter a city to show info</h1></div>
      )}
      
            
      </div>
    );
  }
}

export default App;
