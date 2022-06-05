import React, { useEffect, useState } from "react";
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

    return(
        <>
            <NavBar/>

            <div className="row">
                <div>
                    {data.bodies?.slice(0,column).map(planet => 
                        <h1>{planet.name}</h1>
                        
                    )}
                </div>

                <div>
                    {data.bodies?.slice(column).map(planet => 
                        <h1>{planet.name}</h1>
                        
                        
                        
                        
                    )}
                </div>

            </div>
                
                {/* {data.bodies?.map((planet,index) => 
                    <div key={index}>
                        <h1>{planet.name}</h1>
                    
                        
                    </div>
                    
                )} */}


        </>
    )


}

export default Planets;