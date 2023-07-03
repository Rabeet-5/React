import React, { useEffect, useState } from "react";
import './Products.css'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts, clearErrors } from '../../actions/productAction'
import Loader from "../layout/loader/Loader";
import ProductCard from "../Home/ProductCard";
import { useParams } from "react-router-dom";
import Pagination from 'react-js-pagination';



const Products = ({ match }) => {

    const dispatch = useDispatch();
    const { keyword } = useParams()
    const [currentPage, setCurrrentPage] = useState(1)
    const { products, loading, error, productsCount, productPerPage } = useSelector(state => state.products)

    const setCurrrentPageNo = (e) => {
        setCurrrentPage(e)
    }


    useEffect(() => {

        dispatch(getProducts(keyword, currentPage))

    }, [dispatch, keyword, error, currentPage]);

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