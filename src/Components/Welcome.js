import React from "react";
import logo from "../icons/Logo.png";


function welcome() {
    return (
        <div className="welcome-container">
        <img src={logo} alt="logo"
         className="welcome-logo"/>
        <p>View and text directly to present in the chat Rooms</p>
        </div>
    );
}
export default welcome;  