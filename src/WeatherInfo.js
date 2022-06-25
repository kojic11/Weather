import React from "react";
import './WeatherInfo.css'

const WeatherInfo = ({info, air, bg}) => {
const bgcolor = () => {
    let color;
    if(air.data.current.pollution.aqius <= 50){ 
        color = 'linear-gradient(60deg ,rgba(255, 255, 255, 0.678) 50%, rgba(0, 255, 42, 0.678)';
    }
    else if(air.data.current.pollution.aqius > 50 && air.data.current.pollution.aqius <=100 ){
        color = color = 'linear-gradient(60deg ,rgba(255, 255, 255, 0.678) 50%, rgba(255, 174, 0, 0.678)';
    }
    else if(air.data.current.pollution.aqius > 100 && air.data.current.pollution.aqius <=150 ){
        color = 'linear-gradient(60deg ,rgba(255, 255, 255, 0.678) 50%, rgba(255, 0, 0, 0.678)';
    }
    else if(air.data.current.pollution.aqius > 150 && air.data.current.pollution.aqius <=200 ){
        color = 'linear-gradient(60deg ,rgba(255, 255, 255, 0.678) 50%, rgba(111, 0, 255, 0.678)';
    }
    else{
        color = 'linear-gradient(60deg ,rgba(255, 255, 255, 0.678) 50%, rgba(0, 0, 0, 0.678)';
    }
return color;
} 
let bgP = bg.photos.photo[0];
let img = `https://live.staticflickr.com/${bgP.server}/${bgP.id}_${bgP.secret}_b.jpg`;
const updateBG = (img) =>{
    document.body.style.backgroundImage =`url(${img})`;
}
const displayAirInfo = () =>{
    const air = document.getElementsByClassName("airinfo")[0];
    air.style.display="block";
}
const hideAirInfo = () =>{
    const air = document.getElementsByClassName("airinfo")[0];
    air.style.display='none';
}
updateBG(img);
console.log(updateBG(`https://live.staticflickr.com/${bgP.server}/${bgP.id}_${bgP.secret}_b.jpg`))
    return(
        <div className="wrap">
            <div className="block1">
                <div className="infoname">
                    <h1 className="f1">{info.name}</h1>
                </div>
                <div className="infotemp"> 
                    <p className="f-subheadline">{Math.round(info.main.temp)}°C</p>
                    <div className="infoico">
                        <img src={`http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`} alt='Weather Icon' height="125px" width="125px"></img>
                        <p className="f3">{info.weather[0].main} </p>
                    </div>
                </div>

            </div>
            <hr></hr>
            <div className="wrap2">
                <div className="block2 grow">
                    <p className="f3">Feeling:<br></br> {Math.round(info.main.feels_like)}°C</p>
                </div>
                <div className="block2 grow">
                    <p className="f3">Min temp:<br></br> {Math.round(info.main.temp_min)}°C</p>
                </div>
                <div className="block2 grow">
                    <p className="f3">Max temp:<br></br> {Math.round(info.main.temp_max)}°C</p>
                </div>
                <div className="block2 grow">
                    <p className="f3">Pressure:<br></br> {Math.round(info.main.pressure)} hPa</p>
                </div>
                <div className="block2 grow">
                    <p className="f3">Humidity:<br></br> {Math.round(info.main.humidity)}%</p>
                </div>
                <div className="block2 grow">
                    <p className="f3">Wind speed:<br></br> {Math.round(info.wind.speed)} m/s</p>
                </div>
                <div className="block2 grow">
                    <p className="f3">Sunrise:<br></br> {new Date(info.sys.sunrise*1000).toLocaleTimeString([], {timeStyle: 'short'})} </p>
                </div>
                <div className="block2 grow">
                    <p className="f3">Sunset:<br></br> {new Date(info.sys.sunset*1000).toLocaleTimeString([], {timeStyle: 'short'})}</p>
                </div>
                <div className="airq"> 
                    <div className="airinfo">
                            <p>Green (0-50) : Good</p><br></br>
                            <p>Yellow (51-100) : Moderate</p><br></br>
                            <p><span style={{lineHeight: 'normal'}}>Orange (101-150) : Unhealthy for Sensitive Groups</span></p><br></br>
                            <p>Red (151-200) : Unhealthy</p><br></br>
                            <p>Purple (201-300) : Very unhealthy</p><br></br>
                            <p>Black (301-) : Hazardous</p><br></br>
                            <p className="provided">Info is provided by iqair.com</p>
                    </div>
                    <div className="block2 grow data" style={{background: bgcolor()}}>
                        <p className="f3">Air quality:<br></br> {air.data.current.pollution.aqius}</p>
                        <p className="info" onMouseOver={displayAirInfo} onMouseOut={hideAirInfo}>i</p>
                    </div>
                </div> 
            </div>
            <div id="spacer"></div>
        </div>
    );
}
export default WeatherInfo;