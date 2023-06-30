import React from "react";
import './home.css'

const Home = () => {
    return <>
        <div className="banner">

            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW </h1>

            <a href="#container">
                <button>Scroll Now</button>
            </a>

        </div>

        <h2 className="homeHeading">Featured Products</h2>
    </>
};

export default Home;