import React from "react";
import playStore from '../../../images/playstore.png'
import appstore from '../../../images/Appstore.png'
import './footer.css'

const Footer = ()=>{

    return<>
        <footer id="footer">
            
            <div className="leftFooter">

                <h4>DOWNLOAD OUR APP</h4>
                <p>Download App for Android and IOS Mobile Phone</p>
                <img src={playStore} alt="playstore" />
                <img src={appstore} alt="Appstore" />
            
            </div>

            <div className="midFooter">

                <h1>ECOMMERCE </h1>
                <p>High Quality is our First Priority</p>

                <p>Copyrights 2023 &copy; MeRabeetSati</p>
            
            </div>
            
            <div className="rightFooter">
                <h4>Follow us</h4>
                <a href="https://www.instagram.com/rabeet_5"> Instagram </a>
                <a href="https://www.facebook.com/rabeet.sati"> Facebook </a>
                <a href=""> LinkedIn </a>
            </div>
        
        </footer>
    </>

}

export default Footer;
