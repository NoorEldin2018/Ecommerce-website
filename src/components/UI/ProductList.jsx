import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({data}) => {
  return (
    <>
      {data?.map((item,idx) => (
        <ProductCard product={item} key={idx} />
      ))}
    </>
  )
}

export default ProductList