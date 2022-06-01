import React from "react";
import NavBar from "./NavBar";

function Home() {
    return(

        <>
            <NavBar/>

            <div className="Home-intro">
                <div className="Home-background">
                    <h1>Welcome to a Space API Project</h1>
                    <h4>A Project Combining the NASA API & the Solar System OpenData API</h4>
                    <p className="Home-content">lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
                    <p className="Home-content">lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
                    <p className="Home-content">lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
                </div>
            </div>

        </>
    )
}

export default Home;