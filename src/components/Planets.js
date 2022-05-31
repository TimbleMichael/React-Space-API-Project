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
    
    

    return(
        <>
            <NavBar/>


            <h1>{data.bodies ? data.bodies["0"]["englishName"] : 'null'}</h1>
            <h3>{data.bodies ? data.bodies["0"]["density"] : 'null'} g.cm^3</h3>
         

            







        </>
    )


}

export default Planets;