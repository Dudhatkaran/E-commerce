import React, { useState } from 'react'
import style from './View.module.css'
import Header from '../Header/Header'
import { Accordion, Col, Container, Modal, Row } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import Productcard from '../Product Card/Productcard'
import { BestSale, Images, accordionDetails, ratingDetails } from '../../Shared'
import Box from '../Rating/Box'
import { AiOutlineLineChart } from "react-icons/ai";
import Addtocart from '../Cart Button/Addtocart'
import AccordionAll from '../Accordion/AccordionAll'
import CustomerReview from '../Customer Review/CustomerReview'
import Faqs from '../FAQs/Faqs'
import Suggetion from '../../Pages/Suggetion Image/Suggetion'

const Viewproduct = () => {
    const [index, setIndex] = useState(1)
    const [chartOpen, setChartOpen] = useState(false)
    const [modalShow, setModalShow] = useState(false);
    const [cartOpen, setCartOpen] = useState(false)

    const data = [
        { Size: "BUST", XS: 34, S: 36, M: 38, L: 40, XL: 42, XXL: 44, XXXL: 46, XXXXL: 48 },
        { Size: "BUST", XS: 34, S: 36, M: 38, L: 40, XL: 42, XXL: 44, XXXL: 46, XXXXL: 48 },
        { Size: "BUST", XS: 34, S: 36, M: 38, L: 40, XL: 42, XXL: 44, XXXL: 46, XXXXL: 48 },
        { Size: "BUST", XS: 34, S: 36, M: 38, L: 40, XL: 42, XXL: 44, XXXL: 46, XXXXL: 48 },
        { Size: "BUST", XS: 34, S: 36, M: 38, L: 40, XL: 42, XXL: 44, XXXL: 46, XXXXL: 48 },
        { Size: "BUST", XS: 34, S: 36, M: 38, L: 40, XL: 42, XXL: 44, XXXL: 46, XXXXL: 48 },
        { Size: "BUST", XS: 34, S: 36, M: 38, L: 40, XL: 42, XXL: 44, XXXL: 46, XXXXL: 48 },
        { Size: "BUST", XS: 34, S: 36, M: 38, L: 40, XL: 42, XXL: 44, XXXL: 46, XXXXL: 48 },
    ];

    const chartHandler = () => {
        setChartOpen(true)
        setModalShow(true)
    }

    const addToCartHandler = () => {
        setCartOpen(prev => !prev)
    }
    return (
        <section>
            <Header />
            <Container fluid>
                <Row className='mt-5 mb-5'>
                    <Col sm="6">
                        <Row className='g-1'>
                            {
                                BestSale.map((e) => {
                                    return <Col sm="6" className='m-0'><Productcard Img={e.Image} /></Col>
                                })
                            }
                        </Row>
                    </Col>
                    <Col sm="6" className={`${style.viewProduct}`}>
                        <div className={`${style.rightSection}`}>
                            <h3>RED COLOR DIGITAL BANDHEJ PRINT PURE GAJI</h3>
                            <div className='mt-3'>
                                {
                                    ratingDetails.map((item, index) => {
                                        return <Box {...item} key={index} />
                                    })
                                }
                                <div className='d-flex align-items-center mt-3'>
                                    <h6 className=''> ₹ 2,367 </h6>
                                    <h4 className='ms-3' style={{ color: "green" }}> ₹ 929</h4>
                                </div>
                                <p>Tax included.</p>
                                <div className='mt-4'>
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>OFFER FOR YOU</Accordion.Header>
                                            <Accordion.Body>
                                                <ul>
                                                    <li>Flat 8% Off on Prepaid Order</li>
                                                    <li>Flat <b>₹100</b> Off on Order above <b>₹999</b> Use code: <b>100off</b></li>
                                                    <li>Flat <b>₹150</b> Off on Order above <b>₹1499</b> Use code: <b>150off</b></li>
                                                    <li>Flat <b>₹200</b> Off on Order above <b>₹1999</b> Use code: <b>200off</b></li>
                                                    <li>Flat <b>₹300</b> Off on Order above <b>₹2499</b> Use code: <b>300off</b></li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                                <Row className='justify-content-center mt-3'>
                                    <Col><b>SIZE</b>
                                        <Row className='text-center mt-3'>
                                            <Col sm="2" ><div className={`${index === 1 ? style.sizeActive : style.size}`} onClick={() => { setIndex(1) }}>S</div></Col>
                                            <Col sm="2"><div className={`${index === 2 ? style.sizeActive : style.size}`} onClick={() => { setIndex(2) }}>M</div></Col>
                                            <Col sm="2"><div className={`${index === 3 ? style.sizeActive : style.size}`} onClick={() => { setIndex(3) }}>L</div></Col>
                                            <Col sm="2"><div className={`${index === 4 ? style.sizeActive : style.size}`} onClick={() => { setIndex(4) }}>XL</div></Col>
                                        </Row>
                                    </Col>
                                    <Col className={`${style.chartSize} text-end `} onClick={chartHandler}><b><span><AiOutlineLineChart /></span>Size Chart</b></Col>
                                </Row>
                                <Row className='mt-5 text-center'>
                                    <Col xs="12" className=''>
                                        <Addtocart />
                                    </Col>
                                    <Col xs="12" className={`${style.buyMain} mt-3`}>
                                        <button type="button" className={`${style.BuyBtn}`} >Buy Now</button>
                                    </Col>
                                </Row>
                                <Row className='mt-3'>
                                    <Col xs="12" className='mt-3'>
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>DETAILS</Accordion.Header>
                                                <Accordion.Body>
                                                    <ul>
                                                        <li>Flat 8% Off on Prepaid Order</li>
                                                        <li>Flat <b>₹100</b> Off on Order above <b>₹999</b> Use code: <b>100off</b></li>
                                                        <li>Flat <b>₹150</b> Off on Order above <b>₹1499</b> Use code: <b>150off</b></li>
                                                        <li>Flat <b>₹200</b> Off on Order above <b>₹1999</b> Use code: <b>200off</b></li>
                                                        <li>Flat <b>₹300</b> Off on Order above <b>₹2499</b> Use code: <b>300off</b></li>
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Col>
                                    <Col xs="12" className='mt-3'>
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>RETURN AND EXCHANGE</Accordion.Header>
                                                <Accordion.Body>
                                                    <ul>
                                                        <li>Flat 8% Off on Prepaid Order</li>
                                                        <li>Flat <b>₹100</b> Off on Order above <b>₹999</b> Use code: <b>100off</b></li>
                                                        <li>Flat <b>₹150</b> Off on Order above <b>₹1499</b> Use code: <b>150off</b></li>
                                                        <li>Flat <b>₹200</b> Off on Order above <b>₹1999</b> Use code: <b>200off</b></li>
                                                        <li>Flat <b>₹300</b> Off on Order above <b>₹2499</b> Use code: <b>300off</b></li>
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Col>
                                    <Col xs="12" className='mt-3'>
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>SHIPPING INFORMATION</Accordion.Header>
                                                <Accordion.Body>
                                                    <ul>
                                                        <li>Flat 8% Off on Prepaid Order</li>
                                                        <li>Flat <b>₹100</b> Off on Order above <b>₹999</b> Use code: <b>100off</b></li>
                                                        <li>Flat <b>₹150</b> Off on Order above <b>₹1499</b> Use code: <b>150off</b></li>
                                                        <li>Flat <b>₹200</b> Off on Order above <b>₹1999</b> Use code: <b>200off</b></li>
                                                        <li>Flat <b>₹300</b> Off on Order above <b>₹2499</b> Use code: <b>300off</b></li>
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Col>
                                    <Col xs="12" className='mt-3'>
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>WASH AND CARE</Accordion.Header>
                                                <Accordion.Body>
                                                    <ul>
                                                        <li>Flat 8% Off on Prepaid Order</li>
                                                        <li>Flat <b>₹100</b> Off on Order above <b>₹999</b> Use code: <b>100off</b></li>
                                                        <li>Flat <b>₹150</b> Off on Order above <b>₹1499</b> Use code: <b>150off</b></li>
                                                        <li>Flat <b>₹200</b> Off on Order above <b>₹1999</b> Use code: <b>200off</b></li>
                                                        <li>Flat <b>₹300</b> Off on Order above <b>₹2499</b> Use code: <b>300off</b></li>
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
                <CustomerReview />
            </Container>
            {
                chartOpen &&
                <>
                    <Modal
                        size="xl"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        show={modalShow}
                    >
                        <Modal.Header closeButton onHide={() => setModalShow(false)}>
                            <Modal.Title id="contained-modal-title-vcenter">
                                Size
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className='texcloseButton onHide={() => setModalShow(false)}t-center justify-content-center'>
                            <Row className='justify-content-center mt-4'>
                                <Col sm="6">
                                    <img src={require('../../Asset/Images/Size.webp')} />
                                </Col>
                                <Col sm="6">
                                    <Row>
                                        <Col>
                                            <h3>KURTA</h3>
                                        </Col>
                                    </Row>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Size</th>
                                                <th>XS</th>
                                                <th>S</th>
                                                <th>M</th>
                                                <th>L</th>
                                                <th>XL</th>
                                                <th>XXL</th>
                                                <th>3XL</th>
                                                <th>4XL</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((item, index) => (
                                                <tr key={item} className={index % 2 === 0 ? 'even' : 'odd'}>
                                                    <td>{item.Size}</td>
                                                    <td>{item.XS}</td>
                                                    <td>{item.S}</td>
                                                    <td>{item.M}</td>
                                                    <td>{item.L}</td>
                                                    <td>{item.XL}</td>
                                                    <td>{item.XXL}</td>
                                                    <td>{item.XXXL}</td>
                                                    <td>{item.XXXXL}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </Col>
                            </Row>
                            <Row className='mt-4'>
                                <Col sm="6">
                                    <img src={require('../../Asset/Images/Size1.webp')} />
                                </Col >
                                <Col sm="6">
                                    <Row>
                                        <Col>
                                            <h3> TROUSER</h3>
                                        </Col>
                                    </Row>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Size</th>
                                                <th>XS</th>
                                                <th>S</th>
                                                <th>M</th>
                                                <th>L</th>
                                                <th>XL</th>
                                                <th>XXL</th>
                                                <th>3XL</th>
                                                <th>4XL</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((item, index) => (
                                                <tr key={item} className={index % 2 === 0 ? 'even' : 'odd'}>
                                                    <td>{item.Size}</td>
                                                    <td>{item.XS}</td>
                                                    <td>{item.S}</td>
                                                    <td>{item.M}</td>
                                                    <td>{item.L}</td>
                                                    <td>{item.XL}</td>
                                                    <td>{item.XXL}</td>
                                                    <td>{item.XXXL}</td>
                                                    <td>{item.XXXXL}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </Col>
                                <Col sm="6" className='ms-auto mt-4'>
                                    <Row>
                                        <Col>
                                            <h3>PANT</h3>
                                        </Col>
                                    </Row>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Size</th>
                                                <th>XS</th>
                                                <th>S</th>
                                                <th>M</th>
                                                <th>L</th>
                                                <th>XL</th>
                                                <th>XXL</th>
                                                <th>3XL</th>
                                                <th>4XL</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((item, index) => (
                                                <tr key={item} className={index % 2 === 0 ? 'even' : 'odd'}>
                                                    <td>{item.Size}</td>
                                                    <td>{item.XS}</td>
                                                    <td>{item.S}</td>
                                                    <td>{item.M}</td>
                                                    <td>{item.L}</td>
                                                    <td>{item.XL}</td>
                                                    <td>{item.XXL}</td>
                                                    <td>{item.XXXL}</td>
                                                    <td>{item.XXXXL}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </Col>
                            </Row>
                        </Modal.Body>
                        <Modal.Footer>
                            <button onClick={() => setModalShow(false)} className={`cancelBtn`}>Close</button>
                        </Modal.Footer>
                    </Modal>
                </>
            }
            <Faqs />
            <Suggetion />
            <Footer />
        </section>
    )
}

export default Viewproduct