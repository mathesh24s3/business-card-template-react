import React from "react";
import twitter from "../images/twitter-icon.png"
import facebook from "../images/facebook-icon.png"
import insta from "../images/instagram-icon.png"
import github from "../images/github-icon.png"
import "../styles/footer.css"

export default function Footer(){
    return (
        <div className="footer">
            <img src={twitter} />
            <img src={facebook} />
            <img src={insta} />
            <img src={github} />
        </div>
    )
}