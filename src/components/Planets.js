import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";


function Planets() {
    const [data, setData] = useState('null')
   

    const apiUrl = `https://api.le-systeme-solaire.net/rest/bodies/?data=englishName,density,gravity,meanRadius,axialTilt,perihelion,aphelion`

    const fetchPlanetData = () => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setData(data))
    }

    useEffect(() => {
        fetchPlanetData()
    }, [])

    console.log(data.bodies)

    const arr = { 
        
        "bodies": [{
        "id": "lune",
        "name": "La Lune",
        "englishName": "Moon",
        "isPlanet": false,
        "moons": null,
        "semimajorAxis": 384400,
        "perihelion": 363300,
        "aphelion": 405500,
        "eccentricity": 0.05490,
        "inclination": 5.14500,
        "mass": {
            "massValue": 7.34600,
            "massExponent": 22
        },
        "vol": {
            "volValue": 2.19680,
            "volExponent": 10
        },
        "density": 3.34400,
        "gravity": 1.62000,
        "escape": 2380.00000,
        "meanRadius": 1737.00000,
        "equaRadius": 1738.10000,
        "polarRadius": 1736.00000,
        "flattening": 0.00120,
        "dimension": "",
        "sideralOrbit": 27.32170,
        "sideralRotation": 655.72800,
        "aroundPlanet": {
            "planet": "terre",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/terre"
        },
        "discoveredBy": "",
        "discoveryDate": "",
        "alternativeName": "",
        "axialTilt": 6.68,
        "avgTemp": 0,
        "mainAnomaly": 0.00000,
        "argPeriapsis": 0.00000,
        "longAscNode": 0.00000,
        "bodyType": "Moon",
        "rel": "https://api.le-systeme-solaire.net/rest/bodies/lune"
    }]}
    
    

    return(
        <>
            <NavBar/>

            <div>
                {Object.keys(arr).map(function(keyName, keyIndex){
                    <h1 {...keyIndex}>{console.log(keyName)}</h1>
                })}

                {/* <h1>{data.bodies ? data.bodies["150"]["englishName"] : 'null'}</h1>
                <h3>{data.bodies ? data.bodies["150"]["density"] : 'null'} g.cm^3</h3> */}
            </div>
         

        




        </>
    )


}

export default Planets;