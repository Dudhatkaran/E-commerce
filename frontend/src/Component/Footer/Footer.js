import React from 'react'
import style from './Footer.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaAmazon } from "react-icons/fa";
import { SiFlipkart } from "react-icons/si";

const Footer = () => {
    return (
        <footer>
            <div className={`${style.mainFooter} mt-5`}>
                <Container fluid className='p-3'>
                    <div className={`${style.subFooterLine}`}>
                        <Row>
                            <Col sm="4" className='m-3'>
                                <li>Contact Info</li>
                                <div className={`${style.contactInfo} ms-4 mt-3`}>
                                    <h6 className='mb-2'>Address :-</h6>
                                    <p> 110, 1st floor, Abhishek Arcade, Near Dhameliya Brothers, Near kiran chok, Punagam, Surat, Gujarat, Pin Code 395010    Near Dhameliya Brothers, Near kiran chok,    Punagam Surat, Gujarat, 395010
                                    </p>
                                </div>
                                <div className={`${style.contactInfo} ms-4 mt-3`}>
                                    <h6 className='mb-3'>Gmail :-</h6>
                                    <p>goldenbiz.store@gmail.com</p>
                                </div>
                                <div className={`${style.contactInfo} ms-4 mt-3`}>
                                    <h6 className='mb-3'>Phone :-</h6>
                                    <p>+91 7571852554</p>
                                </div>
                            </Col>
                            <Col className='m-3'>
                                <li>My Account</li>
                                <div className={`${style.contactInfo} ms-4 mt-3`}>
                                    <Row className={`${style.footerContaint}`}>
                                        <Col xs="12" className='mb-3'><Link to="/">Home</Link></Col>
                                        <Col xs="12" className='mb-3'><Link to="/Saree">SAREE</Link></Col>
                                        <Col xs="12" className='mb-3'><Link to="/Gown">GOWN</Link></Col>
                                        <Col xs="12" className='mb-3'><Link to="/Kurti">KURTI</Link></Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col className='m-3'>
                                <li>InFormation</li>
                                <div className={`${style.contactInfo} ms-4 mt-3`}>
                                    <Row className={`${style.footerContaint}`}>
                                        <Col xs="12" className='mb-3'><Link to="#">Search</Link></Col>
                                        <Col xs="12" className='mb-3'><Link to="#">About Us</Link></Col>
                                        <Col xs="12" className='mb-3'><Link to="#">Blog</Link></Col>
                                        <Col xs="12" className='mb-3'><Link to="#">Contact us</Link></Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col className='m-3'>
                                <li>Newsletter</li>
                                <div className={`${style.contactInfo} ms-4 mt-3`}>
                                    <Row>
                                        <Col className='ms-1'>SUBSCRIBE OUR NEWSLETTER</Col>
                                    </Row>
                                    <Row className=''>
                                        <Col className='mt-3'>
                                            <input type='email' placeholder='Enter Email Here' />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className='mt-3'>
                                            Get Updates For New Launches
                                        </Col>
                                    </Row>
                                    <Row className={`${style.socialIcon} mt-3`}>
                                        <Col xs="2"><Link to="#"><FaFacebookF size={25} /></Link></Col>
                                        <Col xs="2"><Link to="#"><FaInstagram size={25} /></Link></Col>
                                        <Col xs="2"><Link to="#"><FaAmazon size={25} /></Link></Col>
                                        <Col xs="2"><Link to="#"><SiFlipkart size={25} /></Link></Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                        <Row className='mb-4'>
                            <Col className='ms-4'>© 2023, Leemboodi. All rights reserved.</Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </footer>
    )
}

export default Footer