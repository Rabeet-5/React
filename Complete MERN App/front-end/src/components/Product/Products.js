import React, { useEffect, useState } from "react";
import './Products.css'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts, clearErrors } from '../../actions/productAction'
import Loader from "../layout/loader/Loader";
import ProductCard from "../Home/ProductCard";
import { useParams } from "react-router-dom";
import Pagination from 'react-js-pagination';
import Slider from '@mui/material/Slider';
import { Typography } from "@mui/material";



const Products = ({ match }) => {

    const dispatch = useDispatch();
    const { keyword } = useParams()
    const [currentPage, setCurrrentPage] = useState(1)
    const [price, setPrice] = useState([0, 25000])
    const { products, loading, error, productsCount, productPerPage } = useSelector(state => state.products)

    const setCurrrentPageNo = (e) => {
        setCurrrentPage(e)
    }

    const priceHandler = (event, newPrice) => {
        setPrice(newPrice);
    }

    useEffect(() => {

        dispatch(getProducts(keyword, currentPage, price))

    }, [dispatch, keyword, error, currentPage, price]);

    return <>
        {loading ? <Loader /> : <>

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
                    color="warning"
                    onChange={priceHandler}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    min={0}
                    max={25000}
                />

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