import React from "react";
import { AiOutlineArrowRight } from 'react-icons/ai'
import weather from "../assets/weather.jpg"
function Card() {
    return (
        <>
            <div>

                <div className="row py-5 wraper">
                    <div className="border col-6">
                        <div>
                            <h6>ReactJS | NodeJS</h6>
                            <h1>Weather App</h1>
                            <h6>View Work <AiOutlineArrowRight /> </h6>
                        </div>
                    </div>
                    <div className="col-6">
                        <div>
                            <img src={weather} className="img-fluid" />
                        </div>
                    </div>
                </div>
                
                


            </div>
        </>
    );
}

export default Card;
