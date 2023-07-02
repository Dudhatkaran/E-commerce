import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import style from './Contact.module.css'
import { FaLocationArrow } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";

const Contact = () => {
    return (
        <section>
            <Header />
            <Container fluid>
                <Row className='text-center mt-4 mb-4'>
                    <Col><h2>Contact Us</h2></Col>
                </Row>
                <Row className='text-center'>
                    <h6>If you would like to discuss your requirements, or indeed would like us to assist defining the requirements of your website users then please contact us</h6>
                </Row>
                <Row className='mt-5'>
                    <Col sm="8">
                        <div className="mapouter"><div className="gmap_canvas"><iframe width="100%" height="400px" id="gmap_canvas" src="https://maps.google.com/maps?q=21.2144436,72.8845295&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} /><a href="https://2yu.co">2yu</a><br /><style dangerouslySetInnerHTML={{ __html: ".mapouter{position:relative;text-align:right;height:100%;width:100%;}" }} /><a href="https://embedgooglemap.2yu.co/">html embed google map</a><style dangerouslySetInnerHTML={{ __html: ".gmap_canvas {overflow:hidden;background:none!important;height:100%;width:100%;}" }} /></div></div>
                    </Col>
                    <Col className={`${style.mapSidebar}`}>
                        <div className={`${style.contactInfo} ms-4 mt-4`}>
                            <li className='mb-3'><h4>Address :-</h4></li>
                            <p className=''> <span className='me-3'><FaLocationArrow size={20} /></span>
                                110, 1st floor, Abhishek Arcade, Near Dhameliya Brothers, Near kiran chok, Punagam, Surat, Gujarat, Pin Code 395010    Near Dhameliya Brothers, Near kiran chok,    Punagam Surat, Gujarat, 395010             </p>
                        </div>
                        <div className={`${style.contactInfo} ms-4 mt-4`}>
                            <li className='mb-3'><h4>Gmail :-</h4></li>
                            <p><span className='me-3'><GrMail size={20} /></span>mepaninemish921@gmail.com</p>
                        </div>
                        <div className={`${style.contactInfo} ms-4 mt-4`}>
                            <li className='mb-3'><h4>Phone :-</h4></li>
                            <p><span className='me-3'><FiPhoneCall size={20} /></span>+91 720-209-7519</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </section>
    )
}

export default Contact