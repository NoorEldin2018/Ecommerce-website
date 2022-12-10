import { motion } from 'framer-motion'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Col } from 'reactstrap'
import { addItem } from '../../redux/slices/cartSlice'
// import productImg from '../../assets/images/arm-chair-01.jpg'
import '../../styles/product-card.css'
import 'react-toastify/dist/ReactToastify.css'

const ProductCard = ({product}) => {

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItem({
      id: product.id,
      productName: product.productName,
      price: product.price,
      imgUrl: product.imgUrl
    }));

    toast.success('Product Added successfully')
  }

  return (
    <Col lg="3" md="4">
      <div className='product__item'>
      <div className="product__img">
        <motion.img whileHover={{scale:0.9}} src={product.imgUrl} alt="" />
      </div>
      <div className="p-2 product__info">
        <h3 className="product__name"><Link to={`/shop/${product.id}`}>{product.productName}</Link></h3>
        <span>{product.category}</span>
      </div>
      <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
        <span className="price">${product.price}</span>
        <motion.span whileHover={{scale:1.2}} onClick={addToCart}>
          <i className='ri-add-line'></i>
        </motion.span>
      </div>
    </div>
    </Col>
  )
}

export default ProductCard