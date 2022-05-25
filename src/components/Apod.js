import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";

const apiKey = process.env.REACT_APP_NASA_API_KEY;

function Apod() {

    const [photoData, setPhotoData] = useState('null');

    const fetchPhoto = () => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
            .then((response) => response.json())
            .then((data) => setPhotoData(data))
    }

    useEffect(() => {
        fetchPhoto()

    }, []);


    return(

        <>
            <NavBar/>

            <div>
                {photoData.media_type === "image" ? (<img src={photoData.hdurl} alt={photoData.title} width={'100%'}/>) : 
                                                    (<iframe title="space-video" 
                                                    src={photoData.hdurl} 
                                                    frameBorder="0" 
                                                    gesture="media" 
                                                    allow="encrypted-media; autoplay" 
                                                    allowFullScreen 
                                                    className="photto"/>)}
                
                <div>
                    <h1>{photoData.title}</h1>
                    <p>{photoData.date}</p>
                    <p>{photoData.explanation}</p>
                </div>

                
            </div>

        </>
        
    )
}

export default Apod;