"use client"
import React from "react"
import {useState, useEffect} from "react"

function restAPI(){
    let [countryData, setCountryData] = useState([])
    let [loading, setLoading] = useState(null)

    useEffect(() => {
        setLoading(true);
        fetch("https://restcountries.com/v3.1/name/usa")
            .then((response) => response.json()) 
            .then((data) => {
                setCountryData(data);
                console.log("fetchedData:", data)
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    return(
        <>  
            {countryData && countryData.map((country, index)=>{
                <div key={index} className="w-[60vw] h-[60vh] m-auto bg-beige border-black border-[4px]">
                    <h1>{country.name.official}</h1>
                    <p>{country.currencies}</p>
                    <p>{country.unMember}</p>
                </div>
            })}
        </>
    )
}

export default restAPI