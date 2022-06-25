import React from "react";
import "./card.css";

function Card({searchCity, onSubmit, afEnter}){
    return(
        <div className='pa1 ma2 bw2 tc' id="card">
            <div>
                <input type='text' onChange={searchCity} onKeyDown={afEnter} label='city' placeholder='For example: Belgrade'/>
            </div>

        </div>
    );
}
export default Card;