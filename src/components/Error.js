import React from "react";
import { Link } from "react-router-dom";

function Error() {

    return(

        <>
        
            <h1>Component Error, Page does Not exist</h1>

            <Link to="/">Home</Link>

        </>

    )
    
}

export default Error;