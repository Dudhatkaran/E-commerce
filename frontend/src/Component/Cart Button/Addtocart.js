import React, { useEffect, useRef, useState } from 'react';
import './Addtocart.css';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Col, Modal, Row } from 'react-bootstrap';
import { BestSale } from '../../Shared';
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';

const AddToCart = ({ cartStatus }) => {
    const [phoneNumber, setPhoneNumber] = useState("")

    const inputRef = useRef(null);
    const [isAdded, setIsAdded] = useState(false);
    const [show, setShow] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const buttonRef = useRef(null);
    const [modalShow, setModalShow] = useState(false);

    const [countryCode, setCountryCode] = useState('');
    const [selectedCountry, setSelectedCountry] = useState(null);


    const handleClose = () => { setShow(false); setIsAdded(false) };
    const handleShow = () => setShow(true);

    const handleAddToCart = () => {
        setShow(true)
        setIsAdded(true);
    };


    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };


    const handleClick = () => {
        let button = buttonRef.current;

        if (!button.classList.contains('animate')) {
            button.classList.add('animate');
            setTimeout(() => {
                button.classList.remove('animate');
            }, 10000);
        }
    };

    const orderHandler = () => {
        setModalShow(true)
    }

    const Step1Content = () => {
        const [phoneNumber, setPhoneNumber] = useState('');

        return (
            <>
                <Col className='text-center'>
                    <h5>Enter Mobile Number</h5>
                </Col>
                <Col xs="12" className='text-center mt-3'>
                    <div>
                        <input
                            type='number'
                            placeholder='Enter Number'
                            className='phoneNumber'
                            value={phoneNumber}
                            onChange={(e) => { setPhoneNumber(e.target.value) }}
                        />
                    </div>
                    <div className='code'>
                        <h5>+91 |</h5>
                    </div>
                </Col>
                <Col xs="12" className='mt-3 align-items-center'>
                    <div className="checkbox-wrapper-12 align-items-center">
                        <div className="cbx align-items-center">
                            <input id="cbx-12" type="checkbox" className='me-3'/><label htmlFor="cbx-12" /><svg width={15} height={14} viewBox="0 0 15 14" fill="none"><path d="M2 8.36364L6.23077 12L13 2" /></svg><span><h6>Notify me for orders, updates & offers</h6></span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1"><defs>
                            <filter id="goo-12"><feGaussianBlur in="SourceGraphic" stdDeviation={4} result="blur" /><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" result="goo-12" /><feBlend in="SourceGraphic" in2="goo-12" /></filter></defs></svg>
                    </div>
                    <style dangerouslySetInnerHTML={{ __html: ".checkbox-wrapper-12 {\n position: relative;\n}\n" }} />
                </Col>
            </>
        );
    };

    // const step1Content = "Harsh"
    const step2Content = "Savaliya";
    const step3Content = "";


    function step1Validator() {
        if (phoneNumber !== "") {
            return true;
        } else {
            return false;
        }
    }

    function step2Validator() {
        if (phoneNumber === "") {
            return false
        }
    }

    function step3Validator() {
    }

    function onFormSubmit() {
    }

    return (
        <>
            <div id="addtoCart">
                <button
                    className={`add-to-cart-button ${isAdded ? 'added' : ''}`}
                    onClick={handleAddToCart}
                >
                    <svg
                        className="add-to-cart-box box-1"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect width={24} height={24} rx={2} fill="#ffffff" />
                    </svg>
                    <svg
                        className="add-to-cart-box box-2"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect width={24} height={24} rx={2} fill="#ffffff" />
                    </svg>
                    <svg
                        className="cart-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx={9} cy={21} r={1} />
                        <circle cx={20} cy={21} r={1} />
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                    <svg
                        className="tick"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                    >
                        <path fill="none" d="M0 0h24v24H0V0z" />
                        <path
                            fill="#ffffff"
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29L5.7 12.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z"
                        />
                    </svg>
                    <span className="add-to-cart">{isAdded ? 'Added to cart' : 'Add to cart'}</span>
                </button>
            </div>
            {isAdded && ['end'].map((placement, idx) => (
                <Offcanvas show={show} onHide={handleClose} className="mainCartMenu" placement={placement} name={placement} >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>CART</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Row className='ms-1 mt-0'>
                        <Col><h6>You are eligible for free shipping.</h6></Col>
                    </Row>
                    <hr style={{ color: "#778899", border: "3px solid #778899" }}></hr>
                    <Offcanvas.Body>
                        <Row>
                            {
                                BestSale.map((e) => {
                                    return (
                                        <>
                                            <Col xs="4" className='mb-3'>
                                                <img src={e.Image} width={90} />
                                            </Col>
                                            <Col xs="8" className='mb-3'>
                                                <h6>Black Kurti with Pant And Dupatta</h6>
                                                <p>Size:5</p>
                                                <div className='d-flex align-items-center'>
                                                    <div className="cart-button">
                                                        <button className="minus-button" onClick={handleDecrement}>-</button>
                                                        <span className="quantity">{quantity}</span>
                                                        <button className="plus-button" onClick={handleIncrement}>+</button>
                                                    </div>
                                                    <div className='ms-auto'>
                                                        <h5>9999</h5>
                                                    </div>
                                                </div>
                                            </Col>
                                        </>
                                    )
                                })
                            }
                        </Row>
                        <Row className='text-center mt-4'>
                            <Col xs="12" className='mb-4'><h6>Tax included and Free Shipping</h6></Col>
                            <Col>
                                {/* <button className="order" ref={buttonRef} onClick={handleClick}><span className="default">Complete Order</span><span className="success">Order Placed<svg viewBox="0 0 12 10">
                                    <polyline points="1.5 6 4.5 9 10.5 1" />
                                </svg></span>
                                    <div className="box" />
                                    <div className="truck">
                                        <div className="back" />
                                        <div className="front">
                                            <div className="window" />
                                        </div>
                                        <div className="light top" />
                                        <div className="light bottom" />
                                    </div>
                                    <div className="lines" />
                                </button> */}

                                <div className="wrapper1" onClick={orderHandler}>
                                    <a className="cta" href="#">
                                        <span>Place Order</span>
                                        <span>
                                            <svg width="30px" height="20px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink">
                                                <g id="arrow" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                    <path className="one" d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="#FFFFFF" />
                                                    <path className="two" d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="#FFFFFF" />
                                                    <path className="three" d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="#FFFFFF" />
                                                </g>
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Offcanvas.Body>
                </Offcanvas >
            ))}

            <Modal
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={modalShow}
                className='modal'
                id="mainModal"
            >
                <Modal.Header closeButton onHide={() => setModalShow(false)}>

                </Modal.Header>
                <Row className='p-2'>
                    <Col sm="8">
                        <Row>
                            <Col><h3>LOGO</h3></Col>
                        </Row>
                        <Row className='leftModalSide'>
                            <Col sm="12">
                                <StepProgressBar
                                    startingStep={0}
                                    onSubmit={onFormSubmit}
                                    steps={[
                                        {
                                            label: 'Mobile',
                                            name: 'step 2',
                                            content: <Step1Content />,
                                        },
                                        {
                                            label: 'Address',
                                            name: 'step 2',
                                            content: step2Content,
                                        },
                                        {
                                            label: 'Payment',
                                            name: 'step 3',
                                            content: step3Content,
                                        },
                                    ]}
                                />
                            </Col>

                        </Row>
                    </Col>
                    <Col sm="4">
                        <Col><h3>LOGO</h3></Col>
                    </Col>
                </Row >
            </Modal >
        </>
    );
};

export default AddToCart;
