import React from 'react'
import { Container, Row } from 'reactstrap'
import './header.css';

import logo from '../../assets/images/eco-logo.png';
import user from '../../assets/images/user-icon.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useAuth from '../../custom-hooks/useAuth'
import { auth } from '../../firebase.config';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';


const nav__links = [
    {
        path: 'home',
        display: 'Home'
    },
    {
        path: 'shop',
        display: 'Shop'
    },
    {
        path: 'cart',
        display: 'Cart'
    }
]


const Header = () => {

    const headerRef = useRef(null);
    const menuRef = useRef(null);
    const {totalQuantity} = useSelector((state) => state.cart);
    const navigate = useNavigate();
    const {currentUser} = useAuth();
    const profileActionRef = useRef(null);
    console.log(currentUser);

    const stickyHeader = () => {
        window.addEventListener('scroll', () => {
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add("sticky__header");
            } else {
                headerRef.current.classList.remove("sticky__header");
            }
        })
    } 

    const logout = () => {
        signOut(auth).then(()=> {
            toast.success("Logged out")
            navigate("/home")
        }).catch(err=> {
            toast.error(err.message)
        });
    }

    useEffect(() => {
      stickyHeader();

      return () => {
        window.removeEventListener("scroll",stickyHeader);
      }
    })

    const menuToggle = () => {
        // menuRef.current.classList.toggle("active__menu");
    } 

    const toggleProfileActions = () => {
        profileActionRef.current.classList.toggle("show__profileActions");
    }
    
  return (
    <header className='header' ref={headerRef}>
        <Container>
            <Row>
                <div className="nav__wrapper">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                        <div>
                            <h1>Multimart</h1>
                            {/* <p>Since 1995</p> */}
                        </div>
                    </div>
                    <div className="navigation" ref={menuToggle} onClick={menuToggle}>
                        <ul className="menu">
                            {
                            nav__links.map((link,idx) => (
                                <li className='nav__item' key={idx}>
                                    <NavLink to={link.path} className={(navClass) => navClass.isActive ? 'nav__active' : ''}>{link.display}</NavLink>
                                </li>
                            ))
                            }
                        </ul>
                    </div>
                    <div className="nav__icons">
                        <span className='fav__icon'><i className='ri-heart-line'></i>
                        <span className="badge">1</span>
                        </span>
                        <span className="cart__icon" onClick={() => navigate("/cart")}>
                            <i className='ri-shopping-bag-line'></i>
                            <span className="badge">{totalQuantity}</span>
                        </span>
                        <div className='profile'> 
                            <motion.img onClick={toggleProfileActions} whileTap={{scale: 1.2}} src={currentUser ? currentUser.photoURL : user} alt={currentUser.displayName} />
                            <div className="profile__actions" onClick={toggleProfileActions} ref={profileActionRef}>
                            <p>{currentUser.displayName}</p>
                                {
                                    currentUser ? <span onClick={logout}>logout</span> : (
                                    <div className='d-flex align-items-center justify-content-center flex-column'>
                                        <Link to="/signup">Signup</Link>
                                        <Link to="/login">Login</Link>
                                    </div>)
                                }
                            </div>
                        </div>
                        <div className="mobile__menu">
                            <span onClick={menuToggle}>
                                <i className='ri-menu-line'></i>
                            </span>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    </header>
  )
}

export default Header