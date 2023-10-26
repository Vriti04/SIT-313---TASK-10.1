import React from "react";
import './Footer.css';

const style = {
    fontWeight:"normal"
}

function Footer(){
    return(
        <div className="all">
            <div className="explore">
                <h2>Explore</h2>
                <ul>
                    <li>Home</li>
                    <li>Questions</li>
                    <li>Articles</li>
                    <li>Tutorials</li>
                </ul>
            </div>

            <div className="support">
                <h2>Support</h2>
                <ul>
                    <li>FAQs</li>
                    <li>Help</li>
                    <li>Contact Us</li>
                </ul>
            </div>


            <div className="right">
                <h2>Stay Connected</h2>
                <img className= " insta" src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c521.png" alt="loading"  height = "50px" width = " 50px"></img>
                <img className= " insta" src="https://www.freeiconspng.com/thumbs/facebook-logo-png/facebook-transparent-logo-png-0.png" alt="loading"  height = "50px" width = " 50px"></img>
                <img className= " insta" src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-icon-png-image_6315986.png" alt="loading"  height = "50px" width = " 50px"></img>

            </div>
            
            <div className="center">
                <h1>DEV@Deakin 2022</h1>
            </div>

            <div className = "middle">
                <div>
                    <h3 style={style}>Privacy Policy</h3>
                </div>
                <div>
                    <h3 style={style}>Terms</h3>
                </div>
                <div>
                    <h3 style={style}>Code of Conduct</h3>
                </div>
            </div>
        </div>
    )
}

export default Footer;