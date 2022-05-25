import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return(
        <div>
            <ul>
                <Link to="/">Home</Link>
            </ul>
        </div>
    )
}

export default NavBar;