import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import style from './Header.module.css'
import { FaUser, FaSearch, FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../../Asset/Css/App.css'

const Header = () => {
    const [index, setIndex] = useState(1)
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary justify-content-center text-center" id={`${style.Header}`}>
            <div className="container-fluid justify-content-center align-items-center py-2">
                <a className="navbar-brand" href="#">LOGO</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center m-auto">
                        <li className="nav-item" onClick={() => { setIndex(1) }}><Link to="/" className={index == 1 ? `${style.active}` : `${style.borderHover}`}>HOME</Link></li>
                        <li className="nav-item" onClick={() => { setIndex(2) }}><Link to="/Saree" className={index == 2 ? `${style.active}` : `${style.borderHover}`} >SAREE</Link></li>
                        <li className="nav-item" onClick={() => { setIndex(3) }}><Link to="/Gown" className={index == 3 ? `${style.active}` : `${style.borderHover}`} >GOWN</Link></li>
                        <li className="nav-item" onClick={() => { setIndex(4) }}><Link to="/Kurti" className={index == 4 ? `${style.active}` : `${style.borderHover}`} >KURTI</Link></li>
                        <li className="nav-item" onClick={() => { setIndex(5) }}><Link to="/Contact-Us" className={index == 5 ? `${style.active}` : `${style.borderHover}`}>CONTACT US</Link></li>
                        <li className="nav-item" onClick={() => { setIndex(6) }}><Link to="/Viewproduct" className={index == 6 ? `${style.active}` : `${style.borderHover}`}>VIEW PRODUCT</Link></li>
                    </ul>
                </div>
                <div>
                    <Row>
                        <Col className={`${style.accountIcon}`} >
                            <div className="dropdown">
                                <FaUser color="#FFFFFF" />
                                <div className="dropdown-content fade-in">
                                    <a href="#">My Account</a>
                                    <a href="#">Sign In</a>
                                    <a href="#">Sign Up</a>
                                </div>
                            </div>

                        </Col>
                        <Col>
                            <FaSearch color='#FFFFFF' />
                        </Col>
                        <Col>
                            <FaCartPlus color='#FFFFFF' />
                        </Col>
                    </Row>
                    <div >
                        <Row className={`${style.dropDown}`}>
                            <Col>Harsh</Col>
                            <Col>Harsh</Col>
                            <Col>Harsh</Col>
                            <Col>Harsh</Col>
                        </Row>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header