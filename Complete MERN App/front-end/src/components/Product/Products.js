import React, { useEffect, useState } from "react";
import './Products.css'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../../actions/productAction'
import Loader from "../layout/loader/Loader";
import ProductCard from "../Home/ProductCard";
import { useParams } from "react-router-dom";
import Pagination from 'react-js-pagination';
import Slider from '@mui/material/Slider';
import { Typography } from "@mui/material";
import MetaData from "../layout/MetaData";

const Categories = [
    'Laptop',
    'Footwear',
    'Bottom',
    'Tops',
    'Attire',
    'Camera',
    'SmartPhones',
]


const Products = ({ match }) => {

    const dispatch = useDispatch();
    const { keyword } = useParams()
    const [currentPage, setCurrrentPage] = useState(1)
    const [price, setPrice] = useState([0, 25000])
    const [category, setCategory] = useState('')
    const [ratings, setRatings] = useState(0)
    const { products, loading, error, productsCount, productPerPage } = useSelector(state => state.products)

    const setCurrrentPageNo = (e) => {
        setCurrrentPage(e)
    }

    const priceHandler = (event, newPrice) => {
        setPrice(newPrice);
    }

    useEffect(() => {

        dispatch(getProducts(keyword, currentPage, price, category, ratings))

    }, [dispatch, keyword, error, currentPage, price, category, ratings]);

    return <>
        {loading ? <Loader /> : <>
            <MetaData title={'PRODUCTS -- ECOMMERCE'} />    
            <h2 className="productsHeading">Products</h2>
            <div className="products">
                {products &&
                    products.map(product => (
                        <ProductCard key={product._id} product={product} />
                    ))
                }
            </div>

            <div className="filterBox">

                <Typography>Price</Typography>
                <Slider
                    aria-label="Temperature"
                    defaultValue={price}
                    color="primary"
                    onChange={priceHandler}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    min={0}
                    max={25000}
                />

                <Typography>Categories</Typography>

                <ul className="categoryBox">
                    {Categories.map((category) => (
                        <li className="category-link" key={category} onClick={() => setCategory(category)}>
                            {category}
                        </li>
                    ))}
                </ul>

                <fieldset >
                    <Typography component={'legend'}>Ratings above</Typography>
                    <Slider
                        value={ratings}
                        onChange={(e, newRating) => {
                            setRatings(newRating)
                        }}
                        aria-labelledby="continuous-slider"
                        valueLabelDisplay="auto"
                        color="primary"
                        min={0}
                        max={5}
                    />
                </fieldset>

            </div>

            {productPerPage < productsCount && (
                <div className="paginationBox">
                    <Pagination
                        onChange={setCurrrentPageNo}
                        activePage={currentPage}
                        itemsCountPerPage={productPerPage}
                        totalItemsCount={productsCount}
                        nextPageText='Next'
                        prevPageText='Prev'
                        firstPageText='First'
                        lastPageText='Last'
                        itemClass='page-item'
                        linkClass='page-link'
                        activeClass='pageItemActive'
                        activeLinkClass='pageLinkActive'

                    />
                </div>)}

        </>}

    </>

}

export default Products;