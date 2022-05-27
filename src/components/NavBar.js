import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return(
        <div className="NavBar">
            <ul>
                <Link to="/">Home</Link>
                <Link to="/MarsPhoto">Mars Photo</Link>
                <Link to="/">Home</Link>
            </ul>
        </div>
    )
}

export default NavBar;