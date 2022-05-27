import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const apiKey = process.env.REACT_APP_NASA_API_KEY;

function MarsWeather() {

    const [photoData, setPhotoData] = useState('null')

    const fetchPhotoData = () => {
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=${apiKey}`)
            .then((response) => response.json())
            .then((data) => setPhotoData(data))
            
    }

    useEffect(() => {
        fetchPhotoData()
    }, [])

    return(

        <>
            <NavBar/>

           


        
            <div>
              {console.log(photoData.photos ? photoData.photos["0"]["id"] : 'null')}


            </div>

        </>
    )
}

export default MarsWeather;

