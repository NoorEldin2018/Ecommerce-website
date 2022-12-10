import React from 'react'
import { Container, Row , Col, ListGroup, ListGroupItem } from 'reactstrap';
import './footer.css';
import { Link } from 'react-router-dom';


const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg="4" md="6" className='mb-4'>
            <div className="logo">
                {/* <img src={logo} alt="logo" /> */}
                <div>
                    <h1 className='text-white'>Multimart</h1>
                </div>
            </div>
            <p className="footer__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ut.
            </p>
          </Col>
          <Col lg="3" md="3" className='mb-4'>
            <div className="footer__quick-links">
              <h4 className='quick_links-title'>Top Categories</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Modern Sofa</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Arm Chair</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2" md="3" className='mb-4'>
          <div className="footer__quick-links">
              <h4 className='quick_links-title'>Useful Links</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to="/login">Login</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="4">
          <div className="footer__quick-links">
              <h4 className='quick_links-title'>Contact</h4>
              <ListGroup className='footer__contact'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i className='ri-map-line'></i></span>
                  <p>123, ZindaBazer, Cairo</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i className='ri-phone-line'></i></span>
                  <p>01156650032</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i className='ri-mail-line'></i></span>
                  <p>noor_saif2009@yahoo.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12">
            <p className='footer__copyright'>CopyRight {year} developed by Noor. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer