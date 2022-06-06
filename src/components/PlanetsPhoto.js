import React, { useEffect, useState } from "react";

function PlanetsPhoto(props) {

    const [photoData, setPhotoData] = useState('')

    const fetchPhotoData = () => {
        fetch('http://localhost:3000/photos')
            .then(response => response.json())
            .then((data) => setPhotoData(data))

    }



    useEffect(() => {
        fetchPhotoData()
    }, [])

    return(

        <>
            {/* What I am trying to do here is match the names of planets from 'Planet'
                by passing it as porops, then use the name from 'db.json' then render the picture 
                next to each palnet.

                I am stuck in terms of:
                    1) Trying to print the names from 'db.json', it is shwoing that .map is ont a function.
            
            */}
            
            {console.log(photoData)}
                
            

        </>
    )

  

   



}

export default PlanetsPhoto;