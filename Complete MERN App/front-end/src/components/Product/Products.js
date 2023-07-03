import React, { useEffect } from "react";
import './Products.css'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts, clearErrors } from '../../actions/productAction'
import Loader from "../layout/loader/Loader";
import ProductCard from "../Home/ProductCard";
import { useParams } from "react-router-dom";



const Products = ({ match }) => {

    const dispatch = useDispatch();
    const {keyword} = useParams()

    

    const { products, loading, error, productsCount } = useSelector(state => state.products)

    useEffect(() => {

        dispatch(getProducts(keyword))
    
    }, [dispatch, keyword,error]);




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

        </>}

    </>

}

export default Products;