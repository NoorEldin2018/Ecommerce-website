import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';

import heroImg from '../assets/images/hero-img.png'
import '../styles/home.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Services from '../services/Services';
import ProductList from '../components/UI/ProductList';
import products from '../assets/data/products'
import { useState } from 'react';
import { useEffect } from 'react';

import counterImg from '../assets/images/counter-timer-img.png'
import Clock from '../components/UI/Clock';

const Home = () => {
  const year = new Date().getFullYear();
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const filterTrendingProducts = products.filter((product) => product.category === 'chair')
    setTrendingProducts(filterTrendingProducts)
    const filterBestProducts = products.filter((product) => product.category === 'sofa')
    setBestProducts(filterBestProducts)
    const filterMobileProducts = products.filter((product) => product.category === 'mobile')
    setMobileProducts(filterMobileProducts)
    const filterWirelessProducts = products.filter((product) => product.category === 'wireless')
    setWirelessProducts(filterWirelessProducts)
    const filterPopularProducts = products.filter((product) => product.category === 'watch')
    setPopularProducts(filterPopularProducts)
  }, [])
  

  return (
    <Helmet title="Home">
      <section className='hero__section'>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Trending product in {year}</p>
                <h2>Make your Interior More Minimalist & Modern</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nesciunt unde explicabo illum labore possimus, recusandae eius voluptatibus repellat rerum, earum soluta sapiente consequuntur velit quaerat? Amet nihil omnis ducimus!</p>
                <motion.button whileTap={{scale:1.2}} className="buy__btn"><Link to="/shop">SHOP NOW</Link></motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services/>
      <section className='trending__products'>
        <Container>
          <Row>
            <Col lg="12" className='text-center'>
              <h2 className="section__title">Trending Products</h2>
            </Col>
            <ProductList data={trendingProducts}/>
          </Row>
        </Container>
      </section>
      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className='text-center'>
              <h2 className="section__title">Best Sales</h2>
            </Col>
            <ProductList data={bestProducts}/>
          </Row>
        </Container>
      </section>

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="12" className='count_down-col'>
              <div className="clock__top-content">
                <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
                <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
              </div>
              <Clock/>
              <motion.button whileTap={{scale:1.2}} className="buy__btn store__btn"><Link to="/shop">Visit Store</Link></motion.button>

            </Col>

            <Col lg="6" md="6" className='text-end counter__img'>
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className='text-center mb-5'>
              <h2 className='section__title'>New Arrivals</h2>
              <ProductList data={mobileProducts}/>
              <ProductList data={wirelessProducts}/>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="popular_category">
        <Container>
          <Row>
            <Col lg="12" className='text-center mb-5'>
              <h2 className='section__title'>Popular Category</h2>
              <ProductList data={popularProducts}/>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home