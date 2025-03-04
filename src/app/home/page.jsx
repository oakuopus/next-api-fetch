"use client" 
import React from "react"
import {useState, useEffect} from "react"
import Image from "next/image"

function restAPI(){
    let [countryData, setCountryData] = useState([])
    let [loading, setLoading] = useState(null)

    useEffect(() => {
        setLoading(true);
        fetch("https://restcountries.com/v3.1/name/china") // change country name to get different country data
            .then((response) => response.json()) 
            .then((data) => {
                setCountryData(data);
                console.log("fetchedData:", data)
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    // used useEffect with useState because it is very simple to fetch the data and assign it with .then method and useState 
    // also easy to catch errors and log them and lastly use finally to set loading state to false 
    return(
        <>  
            {loading && <p className="text-center text-[3vw]">Loading...</p>}
            {countryData.length > 0 && countryData.map((country, index) => (
                <div key={index} className="w-[25vw] h-[40vh] m-auto bg-beige border-white border-[4px] p-4 mt-[8vh]">
                    <h1 className="text-2xl font-bold text-center">{country.name.official}</h1>
                    {country.flags && (
                        <Image 
                            className="m-auto p-[1rem]"
                            width={200}
                            height={100}
                            src={country.flags.svg || country.flags.png} 
                            alt={`Flag of ${country.name.official}`} 
                        />
                    )}
                    <br />
                    <p className="text-center"><strong>Capital City:</strong> <br /> {country.capital ? country.capital.join(", ") : "N/A"}</p>
                    <br />
                    <p className="text-center"><strong>Languages:</strong> <br /> 
                    {country.languages ? Object.values(country.languages).join(", ") : "N/A"}
                    </p>
                    <br />
                    <p className="text-center"><strong>Currency: </strong><br/>{country.currencies ? Object.values(country.currencies).map(curr => curr.name).join(", ") : "N/A"}</p>
                </div>
            ))}
        </>
    )
}

export default restAPI