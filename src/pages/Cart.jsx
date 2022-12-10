import React from 'react'
import "../styles/cart.css";
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { Col, Container, Row } from 'reactstrap';
import { motion } from 'framer-motion';
import { addItem,removeItem } from '../redux/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Cart = () => {
  const {cartItems,totalAmount} = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />
        <section>
          <Container>
            <Row>
              <Col lg="9">
                {
                  cartItems.length === 0 ? (<h2 className='fs-4 text-center'>No item added to the cart</h2>) :
                  (
                    <table className='table bordered'>
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Title</th>
                          <th>Price</th>
                          <th>Qty</th>
                          <th >Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((cartItem,idx) => (
                          <Tr cartItem={cartItem} key={idx} />
                        ))}
                      </tbody>
                    </table>
                  )
                }
                
              </Col>
              <Col lg="3">
                <div>
                  <h6 className='d-flex align-items-center justify-content-between'>Subtotal</h6>
                  <span className='fs-4 fw-bold'>${totalAmount}</span>
                </div>
                <p className='fs-6 mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, alias?</p>
                <div>
                  <button className='buy__btn w-100 my-3'><Link to="/shop">Continue Shopping</Link></button>
                  <button className='buy__btn w-100'><Link to="/checkout">Checkout</Link></button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
    </Helmet>
  )
}

const Tr = ({cartItem}) => {

  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(removeItem(cartItem.id))
  }
  return (
    <tr>
      <td>
        <img src={cartItem.imgUrl} alt={cartItem.productName} />
      </td>
      <td>
        {cartItem.productName}
      </td>
      <td>
        {cartItem.price}
      </td>
      <td>
        {cartItem.quantity}
      </td>
      <td>
        <motion.i whileTap={{scale:1.2}} className="ri-delete-bin-line" onClick={deleteProduct}></motion.i>
      </td>
    </tr>
  )
}

export default Cart