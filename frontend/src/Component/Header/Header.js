import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import style from './Header.module.css'
import { FaUser, FaSearch, FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary justify-content-center text-center" id={`${style.Header}`}>
            <div className="container-fluid justify-content-center align-items-center py-2">
                <a className="navbar-brand" href="#">LOGO</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center m-auto">
                        <li className="nav-item"><Link to="/">HOME</Link></li>
                        <li className="nav-item"><Link to="/Saree">SAREE</Link></li>
                        <li className="nav-item"><Link to="/Gown">GOWN</Link></li>
                        <li className="nav-item"><Link to="/Kurti">KURTI</Link></li>
                        <li className="nav-item"><Link to="/Contact-Us">CONTACT US</Link></li>
                        <li className="nav-item"><Link to="/Viewproduct">VIEW PRODUCT</Link></li>
                    </ul>
                </div>
                <div>
                    <Row>
                        <Col>
                            <FaSearch color='#FFFFFF' />
                        </Col>
                        <Col>
                            <FaCartPlus color='#FFFFFF' />
                        </Col>
                        <Col className={`${style.accountIcon}`} >
                            <FaUser color='#FFFFFF' />
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