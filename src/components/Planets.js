import React, { useEffect, useState } from "react";
import PlanetsPhotos from "./PlanetsPhoto";
import NavBar from "./NavBar";


function Planets() {
    const [data, setData] = useState('null')
   

    const apiUrl = `https://api.le-systeme-solaire.net/rest/bodies/`

    const fetchPlanetData = () => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setData(data))
    }

    useEffect(() => {
        fetchPlanetData()
    }, [])  

    const column = Math.floor(data.bodies?.length/2)

    const names = data.bodies?.map((planetName) =>
        planetName.englishName
    )

    return(
        <>
            <NavBar/>

            <div className="Planets-row">
                <div className="Planets-row1">
                    {data.bodies?.slice(0,column).map((planet,index) => 
                        <div key={index} className="Planets-row1-content">
                            <h1>Name: {planet.englishName}</h1>
                            {planet.mass ? <h3>Mass: {planet.mass.massValue}<sup>{planet.mass.massExponent}</sup> kg</h3> : <h3>Mass: Unavailable</h3>}
                            <h3>Density: {planet.density} g.cm<sup>3</sup></h3>
                            <h3>Gravity: {planet.gravity} m.s<sup>-2</sup></h3>
                            <h3>Perihelion: {planet.perihelion} km</h3>
                            <h3>Apehlion: {planet.aphelion} km</h3>  
                            <h3>Radius: {planet.polarRadius} km</h3>                                         
                        </div>
                    )}

                </div>

                <div className="Planets-row2">
                    {data.bodies?.slice(column).map((planet,index) => 
                        <div key={index} className="Planets-row2-content">
                            <h1>Name: {planet.englishName}</h1>
                            {planet.mass ? <h3>Mass: {planet.mass.massValue}<sup>{planet.mass.massExponent}</sup> kg</h3> : <h3>Mass: Unavailable</h3>}
                            <h3>Density: {planet.density} g.cm<sup>3</sup></h3>
                            <h3>Gravity: {planet.gravity} m.s<sup>-2</sup></h3>
                            <h3>Perihelion: {planet.perihelion} km</h3>
                            <h3>Apehlion: {planet.aphelion} km</h3>
                            <h3>Radius: {planet.polarRadius} km</h3> 
                        </div>        
                    )}

                </div>

                <div>
                    <PlanetsPhotos planetName={names}/>
                </div>

            </div>
          
        </>
    )


}

export default Planets;