import React from 'react'
import { Container,Row,Col } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection';
import '../styles/shop.css';

import products from '../assets/data/products';
import { useState } from 'react';
import ProductList from '../components/UI/ProductList'

const Shop = () => {


  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if(filterValue === "sofa") {
      const filterProducts = products.filter((product) => product.category === "sofa");

      console.log(filterProducts);
      setProductsData(filterProducts);
    }
    if(filterValue === "mobile") {
      const filterProducts = products.filter((product) => product.category === "mobile");

      console.log(filterProducts);
      setProductsData(filterProducts);
    }
    if(filterValue === "chair") {
      const filterProducts = products.filter((product) => product.category === "chair");

      console.log(filterProducts);
      setProductsData(filterProducts);
    }
    if(filterValue === "watch") {
      const filterProducts = products.filter((product) => product.category === "watch");

      console.log(filterProducts);
      setProductsData(filterProducts);
    }
    if(filterValue === "wireless") {
      const filterProducts = products.filter((product) => product.category === "wireless");

      console.log(filterProducts);
      setProductsData(filterProducts);
    }
  }


  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const searchedProducts = products.filter((product) => product.productName.toLowerCase().includes(searchTerm.toLowerCase()));
    if(searchTerm === "") {
      setProductsData(products);
    } else {
      setProductsData(searchedProducts);
    }
  }


  return <Helmet title="shop">
    <CommonSection title="Products" />

    <section>
      <Container>
        <Row>
          <Col lg="3" md="6">
            <div className="filter__widget">
              <select onChange={handleFilter}>
                <option>Filter By Category</option>
                <option value="sofa">Sofa</option>
                <option value="mobile">Mobile</option>
                <option value="chair">Chair</option>
                <option value="watch">Watch</option>
                <option value="wireless">Wireless</option>
              </select>
            </div>
          </Col>
          <Col lg="3" md="6" className='text-end'>
          <div className="filter__widget">
            <select>
                <option>Sort By</option>
                <option value="ascending">ASC</option>
                <option value="descending">DEC</option>
            </select>
          </div>
          </Col>
          <Col lg="6" md="12">
            <div className="search__box">
              <input type="text" onChange={handleSearch} placeholder="Search......." />
              <span>
                <i className="ri-search-line"></i>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          {
            productsData.length === 0 ? (
              (<h1 className='text-center'>No products are found</h1>)
            ) :(<ProductList data={productsData} />)
          }
        </Row>
      </Container>
    </section>
  </Helmet>
  
}

export default Shop