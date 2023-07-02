import React, { useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../actions/productAction";
import { useParams } from "react-router-dom";
import ReactStars from 'react-rating-stars-component';


const ProductDetails = () => {

  const dispatch = useDispatch();
  const { id } = useParams();
  const { product, loading, error } = useSelector((state) => state.productDetails);

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: 'tomato',
    value: product.ratings,
    isHalf: true,
    size: window.innerWidth < 600 ? 20 : 25,
  };

  return (
    <>
      <div className="ProductDetails">

        <div>
          {product && product.images && product.images.length > 0 ? (
            product.images.map((item, i) => (
              <img src={item.URL} alt={i} className="CarouselImage" key={item.URL} />
            ))
          ) : null}
        </div>

        <div>
          <div className="detailsBlock-1">
            <div>
              <h2>{product && product.name}</h2>
              <p>Product # {product && product._id}</p>
            </div>
          </div>

          <div className="detailsBlock-2">
            <ReactStars {...options} />
            <span>({product.numOfReviews} Reviews )</span>
          </div>

          <div className="detailsBlock-3">
            <h1>{`$ ${product.price}`}</h1>
            <div className="detailsBlock-3-1">
              <div className="detailsBlock-3-1-1">
                <button>-</button>
                <input type="number" value='1' />
                <button>+</button>
              </div>{''}
              <button>Add to Cart</button>
            </div>
            <p>Status :{ }</p>

          </div>

          <div className="detailsBock-4">
            Description : <p> {product.description}</p>
          </div>
          <div>
            <button className="submitReview">Submit Review</button>
          </div>
        </div>
      </div>

      {/* Adding Reviews Section             */}

      <div className="reviewsHeading">
        <h3>Our Customers  Reviews</h3>
      </div>

    </>
  );
};

export default ProductDetails;
