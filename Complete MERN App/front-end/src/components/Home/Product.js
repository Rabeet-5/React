import React from "react";
import ReactStars from 'react-rating-stars-component';
import './home.css';




const Product = ({ product }) => {

    const options = {
        edit: false,
        color: "rgba(20,20,20,0.1)",
        activeColor: 'tomato',
        value: product.ratings,
        isHalf: true,
        size: window.innerWidth < 600 ? 20 : 25,
    }

    return <>

        <div>
            <a href={`/product/${product._id}`} className="productCard">
                <img src={product.images} alt={product.name} />
                <p>{product.name}</p>
                <div>
                    <ReactStars {...options} /> <span>{product.numOfReviews}  reviews</span>
                </div>
                    <span>{`$${product.price}`}</span>
            </a>
        </div>



    </>
};

export default Product;
