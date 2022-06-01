import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return(
        <div className="NavBar">
            <ul>
                <Link to="/">Home</Link>
                <Link to="/Apod">Picture of the Day</Link>
                <Link to="/MarsPhoto">Mars Rover Photo</Link>
                <Link to="/Planets">Planets</Link>
            </ul>
        </div>
    )
}

export default NavBar;