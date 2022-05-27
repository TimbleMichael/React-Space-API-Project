import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return(
        <div>
            <Link to="/Apod">Show me the Stars</Link>
        </div>
    )
}

export default Home;