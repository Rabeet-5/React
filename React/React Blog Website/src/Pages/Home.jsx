import React from "react";
import '../Components/Custom.css'
import  newone from '../images/newone.avif'
import { Link, NavLink } from "react-router-dom";

function Home() {

    return (<>
        <section id="header" className="">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto ">
                        <div className="row d-flex justify-content-center align-items-center p-1">
                            <div className="col-md-6 pt-5 m-auto  pt-lg-0 order-2 order-lg-1 
                                 
                            ">
                                <h1 className="fw-bold">
                                    Grow Your Business with
                                    <br />
                                    <strong className="Brand_name">RS Tech Solutions</strong>
                                </h1>
                                <h2 className="mt-1 ">
                                    We are the team of Experienced and Professional Developers making Web and Applications
                                </h2>
                                <div className="mt-3 d-flex justify-content-center align-items-center">
                                    <NavLink as={Link} to="/service" className="btn-get-started ">Get Started</NavLink>
                                </div>
                            </div>

                            <div className="col-lg-6 order-1 order-lg-2 header-img 
                                d-flex justify-content-center align-items-center
                            ">
                                <img src={newone} className="animated img-fluid" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>


    </>)
}

export default Home;