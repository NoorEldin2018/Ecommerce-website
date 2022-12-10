import { motion } from 'framer-motion'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import './services.css'

import serviceData from '../assets/data/serviceData'

const Services = () => {
  return (
    <section className='services'>
      <Container>
        <Row>
          {serviceData.map((data,idx) => (
            <Col lg="3" md="4" key={idx}>
              <motion.div whileHover={{scale:1.1}} className="service__item" style={{background:`${data.bg}`}}>
                <span>
                  <i className={data.icon}></i>
                </span>
                <div>
                  <h3>{data.title}</h3>
                  <p>{data.subtitle}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Services