import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return(
        <div className="Home-links">
            <Link to="/Apod">Picture of the Day</Link>
        </div>
    )
}

export default Home