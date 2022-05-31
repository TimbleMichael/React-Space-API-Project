import React, { useEffect, useState } from "react";



function MarsPhotoRHAZ(props) {

    const [data, setData] = useState('null')
    const [solDay, setSolDay] = useState('')

    const fetchPhotoDataRHAZ = () => {
        fetch(props.apiRHAZ)
            .then((response) => response.json())
            .then((data) => setData(data))
    }

    useEffect(() => {
        fetchPhotoDataRHAZ()
    }, [])

    return(

        <>
            {console.log(data)}

            <div className="sol-search">
                <input 
                value={solDay}
                onChange={event => setSolDay(event.target.value)}
                onKeyDown={fetchPhotoDataRHAZ}
                
                type="text"/>
            </div>

            <div className="image-rhaz">
                    <img src={data.photos ? (data.photos.length !== 0 ? data.photos["0"]["img_src"] : 'https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg') : 'null'}
                    alt="Pitcure"/>
            </div>

        </>
    )




}

export default MarsPhotoRHAZ;