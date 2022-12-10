import React, { useRef } from 'react'
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import products from '../assets/data/products';
import '../styles/product-details.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ProductsList from '../components/UI/ProductList'
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const ProductDetails = () => {
  const [tab, setTab] = useState("desc")
  const [rating, setRating] = useState(null);
  const reviewUser = useRef('');
  const reviewMsg = useRef('');
  const dispatch = useDispatch();



  const {id} = useParams();
  const product = products.find((item) => item.id === id);
  const {imgUrl,price,productName,category, avgRating,reviews,description,shortDesc} = product;


  const relatedProducts = products.filter((product) => product.category === category);


  const submitHandler = (e) => {
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating
    }

    toast.success("Added to review successfully")
  }


  const addToCart = () => {
    dispatch(addItem({
      id,
      imgUrl,
      productName,
      price,
    }));

    toast.success("Added to cart successfully")
  }

  useEffect(() => {
    window.scrollTo(0,0);
  }, [product])
  

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />
      <section className='pt-0'>
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt={productName} />
            </Col>
            <Col lg="6">
              <div className="product__details">
                <h2>{productName}</h2>
                <div className="product__rating d-flex align-items-center gap-5 mb-3">
                  <div>
                    <span><i className='ri-star-s-fill'></i></span>
                    <span><i className='ri-star-s-fill'></i></span>
                    <span><i className='ri-star-s-fill'></i></span>
                    <span><i className='ri-star-s-fill'></i></span>
                    <span><i className='ri-star-half-s-fill'></i></span>
                  </div>
                  <p>(<span>{avgRating}</span> Ratings)</p>
                </div>
                <div className='d-flex align-items-center  gap-5'>
                  <span className='product__price'>${price}</span>
                  <span>Category: {category.toUpperCase()}</span>
                </div>
                <p className='mt-3 mb-4'>{shortDesc}</p>
      
                <motion.button whileTap={{scale:1.2}} onClick={addToCart} className="buy__btn">Add To Cart</motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab__wrapper d-flex align-items-center gap-5">
                <h6 className={`${tab === "desc" ? 'active__tab' : ''}`} onClick={() => setTab("desc")}>Description</h6>
                <h6 className={`${tab === "rev" ? 'active__tab' : ''}`} onClick={() => setTab("rev")}>Reviews ({reviews.length})</h6>
              </div>

              {
                tab === "desc" ? (
                  <div className="tab__content mt-5">
                  <p>{description}</p>
                </div>
                ) : (<div className='product__review mt-5'>
                  <div className="review__wrapper">
                    <ul>
                      {reviews.map((item,idx)=> (
                        <li key={idx} className="mb-4">
                          <h6>Noor</h6>
                          <span>{item.rating}  (rating)</span>
                          <p>{item.text}</p>
                        </li>
                      ) )}
                    </ul>

                    <div className="review__form">
                      <h4>Leave your experience</h4>
                        <form onSubmit={submitHandler}>
                          <div className="form__group rating__group">
                            <input required type="text" placeholder='Enter name' ref={reviewUser}/>
                          </div>
                          <div className="form__group d-flex align-items-center gap-5">
                            <motion.span whileTap={{scale:1.2}} onClick={() => setRating(1)}>1<i className='ri-star-s-fill'></i></motion.span>
                            <motion.span whileTap={{scale:1.2}} onClick={() => setRating(2)}>2<i className='ri-star-s-fill'></i></motion.span>
                            <motion.span whileTap={{scale:1.2}} onClick={() => setRating(3)}>3<i className='ri-star-s-fill'></i></motion.span>
                            <motion.span whileTap={{scale:1.2}} onClick={() => setRating(4)}>4<i className='ri-star-s-fill'></i></motion.span>
                            <motion.span whileTap={{scale:1.2}} onClick={() => setRating(5)}>5<i className='ri-star-half-s-line'></i></motion.span>
                          </div>
                          <div className="form__group">
                            <textarea required rows={4} ref={reviewMsg} placeholder='Review Message'> </textarea>
                          </div>
                          <button type='submit' className='buy__btn'>Submit</button>
                        </form>
                    </div>
                  </div>
                </div>)
              }
            </Col>
            <Col lg="12" className='mt-5'>
              <h2 className="related_title">you might also like</h2>
            </Col>
              <ProductsList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default ProductDetails