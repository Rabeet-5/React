import React from "react"
import { Link, NavLink } from "react-router-dom";
import './Custom.css'




function Cards(props) {

   


    return <>

        <div className="col-md-4 col-10 mx-auto">

        <div className="card">
            <img src={props.src} className="card-img-top cardsImg" alt="..." />
            <div className="card-body mt-2">
                <h5 className="card-title fw-bolder">{props.title}</h5>
                <p className="card-text">{props.para}</p>
              
            </div>
        </div>
        </div>
    </>
}

export default Cards;