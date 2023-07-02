import React, { useEffect } from "react";
import './home.css'
import Product from "./Product";
import MetaData from "../layout/MetaData";
import { getProducts } from '../../actions/productAction'
import { useDispatch, useSelector } from 'react-redux'
import Loader from "../layout/loader/Loader";
import Header from "../layout/header/Header";




const Home = () => {

    const dispatch = useDispatch();

    const { loading, error, products, productsCount } = useSelector(
        state => state.products
    )

    useEffect(() => {

        dispatch(getProducts())

    }, [dispatch])


    return <>

        {loading ?  <Loader /> : <>

            <MetaData title='Ecommerce ' />

            <div className="banner">

                <p>Welcome to Ecommerce</p>
                <h1>FIND AMAZING PRODUCTS BELOW </h1>

                <a href="#container">
                    <button>Scroll Now</button>
                </a>

            </div>

            <h2 className="homeHeading">Featured Products</h2>

            <div className="container" id="container">
                {products && products.map(product => (
                    <Product product={product} key={product._id} />
                ))}

            </div>
        </>
        }

    </>
};

export default Home;