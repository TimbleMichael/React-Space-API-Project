import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import MarsPhotoRHAZ from "./MarsPhotoRHAZ";

const apiKey = process.env.REACT_APP_NASA_API_KEY;

function MarsPhoto() {

    const [data, setData] = useState('null')
    const [solDay, setSolDay] = useState('')

    const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${solDay}&camera=fhaz&api_key=${apiKey}`
    const apiUrlRHAZ = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${solDay}&camera=rhaz&api_key=${apiKey}`

    const fetchPhotoData = () => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setData(data))
    }

    useEffect(() => {
        fetchPhotoData()
    }, [])


    return(

        <>
            <NavBar/>

            <div className="sol-search">
                <input 
                value={solDay}
                onChange={event => setSolDay(event.target.value)}
                onKeyDown={fetchPhotoData}
                placeholder="Enter a Sol Day"
                type="text"/>
            </div>

            <MarsPhotoRHAZ apiRHAZ={apiUrlRHAZ}/>
        
            <div className="image-fhaz">
                <img src={data.photos ? (data.photos.length !== 0 ? data.photos["0"]["img_src"] : 'https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg') : 'null'}
                alt="Pitcure"/>
            </div>



        </>
    )
}

export default MarsPhoto;

