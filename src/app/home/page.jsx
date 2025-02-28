"use client"
import React from "react"
import {useState, useEffect} from "react"

function weatherAPI(){
    let [weatherData, setWeatherData] = useState(null)
    useEffect(()=>{
        fetch("https://api.openweathermap.org/data/2.5/weather?lat={14.716677}&lon={-17.467686}&appid=${71ab0df6779a408450545eacc9c927f1}")
        .then(response => response.json())
        .then(data => setWeatherData(data.weather))
    }, [])
    return(
        <>
            <div className="w-[60vw] h-[60vh] m-auto bg-beige border-black border-[4px]">
                <h1>
                    {weatherData ? weatherData[0]?.description : "Loading..."}
                </h1>
            </div>
        </>
    )
}

export default weatherAPI