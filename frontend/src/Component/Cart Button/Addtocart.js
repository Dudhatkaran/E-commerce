import React, { useEffect, useRef, useState } from 'react';
// import './Addtocart.css';
import './cart.css';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Col, Modal, Row } from 'react-bootstrap';
import { BestSale, Images } from '../../Shared';
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';
import { GrAddCircle } from "react-icons/gr";
import { BsCartCheckFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";

const AddToCart = ({ cartStatus }) => {
    const [phoneNumber, setPhoneNumber] = useState("")

    const inputRef = useRef(null);
    const [isAdded, setIsAdded] = useState(false);
    const [show, setShow] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const buttonRef = useRef(null);
    const [modalShow, setModalShow] = useState(false);
    const [curretIndex, setCurretIndex] = useState(1)

    const [countryCode, setCountryCode] = useState('');
    const [selectedCountry, setSelectedCountry] = useState(null);


    const handleClose = () => { setShow(false); setIsAdded(false) };
    const handleShow = () => { setShow(true); }

    const handleAddToCart = () => {
        setShow(true)
        setIsAdded(true);
    };

    useEffect(() => {
        const cartButtons = document.querySelectorAll('.cart-button');

        cartButtons.forEach(button => {
            button.addEventListener('click', cartClick);
        });

        function cartClick() {
            setShow(true)
            setIsAdded(true)
            let button = this;
            button.classList.add('clicked');
        }
    }, [])

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const orderHandler = () => {
        setModalShow(true)
    }

    const Step1Content = () => {
        const [phoneNumber, setPhoneNumber] = useState('');
        return (
            <>
                <Col className='text-center mt-5'>
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
                            <input id="cbx-12" type="checkbox" className='me-3' /><label htmlFor="cbx-12" /><svg width={15} height={14} viewBox="0 0 15 14" fill="none"><path d="M2 8.36364L6.23077 12L13 2" /></svg><span><h6>Notify me for orders, updates & offers</h6></span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1"><defs>
                            <filter id="goo-12"><feGaussianBlur in="SourceGraphic" stdDeviation={4} result="blur" /><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" result="goo-12" /><feBlend in="SourceGraphic" in2="goo-12" /></filter></defs></svg>
                    </div>
                    <style dangerouslySetInnerHTML={{ __html: ".checkbox-wrapper-12 {\n position: relative;\n}\n" }} />
                </Col>
            </>
        );
    };

    const Step2Content = () => {
        const [phoneNumber, setPhoneNumber] = useState('');
        return (
            <>

            </>
        );
    };
    const Step3Content = () => {
        const [phoneNumber, setPhoneNumber] = useState('');

        return (
            <>

            </>
        );
    };



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

    const onFormSubmit = () => {

    }

    const nextHandler = () => {
        if (curretIndex === 1) { setCurretIndex(2) }
        else if (curretIndex === 2) { setCurretIndex(3) }
        else if (curretIndex === 3) { setCurretIndex(1) }
    }

    return (
        <>
            <button className="cart-button">
                {
                    isAdded == true ? <span className="added BuyBtn" >Added</span> : <span className="add-to-cart BuyBtn" onClick={() => handleShow()}>Add to cart</span>
                }
                <BsCartCheckFill className="fas fa-shopping-cart" />
                <i className="fas fa-box" />
            </button>

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
                                                    <div className="cartButton">
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
                                <button className="button-57" role="button" onClick={() => setModalShow(true)}><span className="text">Place Order</span><span><TbTruckDelivery size={50} /></span></button>
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
                <Modal.Header closeButton onHide={() => setModalShow(false)}></Modal.Header>
                <Row className='p-1'>
                    <Col sm="8">
                        <div className='modalLeft'>
                            <Row className='topModalBar'>
                                <Col className='text-center'><h3>HK Creation</h3></Col>
                            </Row>
                            <Row className="tabButton p-2 topModalBar1">
                                <Col><button className={curretIndex === 1 ? "activeTab" : ""} onClick={() => setCurretIndex(1)}>Mobile</button></Col>
                                <Col ><button className={curretIndex === 2 ? "activeTab" : ""} onClick={() => setCurretIndex(2)}>Address</button></Col>
                                <Col><button className={curretIndex === 3 ? "activeTab" : ""} onClick={() => setCurretIndex(3)}>Payment</button></Col>
                            </Row>
                            {/* <Row className='leftModalSide'>
                            <Col sm="12">
                                <StepProgressBar
                                    startingStep={0}
                                    // onSubmit={onFormSubmit}
                                    steps={[
                                        {
                                            label: 'Mobile',
                                            name: 'step 2',
                                            content: <Step1Content />,
                                        },
                                        {
                                            label: 'Address',
                                            name: 'step 2',
                                            content: <Step2Content />,
                                        },
                                        {
                                            label: 'Payment',
                                            name: 'step 3',
                                            content: <Step3Content />
                                            ,
                                        },
                                    ]}
                                />
                            </Col>
                        </Row> */}
                            {
                                curretIndex === 1 &&
                                <Row className='leftModalSide align-items-end'>
                                    <Col className='text-center mt-5'>
                                        <h5>Enter Mobile Number</h5>
                                    </Col>
                                    <Col xs="12" className='text-center mt-3'>
                                        <div className='mainCallBar'>
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
                                                <input id="cbx-12" type="checkbox" className='me-3' /><label htmlFor="cbx-12" /><svg width={15} height={14} viewBox="0 0 15 14" fill="none"><path d="M2 8.36364L6.23077 12L13 2" /></svg>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1"><defs>
                                                <filter id="goo-12"><feGaussianBlur in="SourceGraphic" stdDeviation={4} result="blur" /><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" result="goo-12" /><feBlend in="SourceGraphic" in2="goo-12" /></filter></defs></svg>
                                            <span className='checkContaint'><h6>Notify me for orders, updates & offers</h6></span>
                                        </div>
                                        <style dangerouslySetInnerHTML={{ __html: ".checkbox-wrapper-12 {\n position: relative;\n}\n" }} />
                                    </Col>
                                </Row>
                            }
                            {
                                curretIndex === 2 &&
                                <Row className='leftModalSide pe-4'>
                                    <Col className='mt-3' xs="12">
                                        <p className='ms-2'>Hey! Welcome back +91 99987 60805 </p>
                                    </Col>
                                    <Col xs="12">
                                        <h5 className='ms-2'>Shipping Address</h5>
                                    </Col>
                                    <Col className='align-items-center' xs="12">
                                        <div className='ms-2 mt-2 align-items-center'>
                                            <div className='mainAddressBar'>
                                                <div className='d-flex align-items-center'>
                                                    <input type='radio' className='m-0 mb-0' defaultChecked /><h6 className='ms-1 me-2 mt-1'>Harsh Savaliya</h6><span className='emailSection'><p className="AddressEmail mt-3">harshsavaliya250@gmail.com</p></span>
                                                </div>
                                                <div className='px-3'>
                                                    <p>D-303 Victoriya Township, Pasodara, Kamrej Subdistrict, Surat District, Gujarat, 394180</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className='shipping align-items-center' xs="12">
                                        <h5 className='ms-2 mt-2'>Shipping method <input type='radio' className='m-0 mb-0 me-2' defaultChecked /><span>Free Shipping @ ₹0</span></h5>
                                    </Col>
                                    <Col className='mt-3' xs="12">
                                        <div className='ms-2'>
                                            <GrAddCircle size={30} /> Add New Address
                                        </div>
                                    </Col>
                                </Row>
                            }
                            {
                                curretIndex === 3 &&
                                <Row className='leftModalSide'>
                                    <Col className='mt-3' xs="12">
                                        <p className='ms-5'>Please select payment method to complete the order Additional 10% discount </p>
                                    </Col>
                                </Row>
                            }
                        </div>
                    </Col>
                    <Col sm="4">
                        <Row>
                            <Col><div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <BsCartCheckFill className='me-2' /> Order Summary
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            {

                                                Images.map((e) => {
                                                    if (!Images || Images.length === 0) {
                                                        return <img src={e.Slider1} />
                                                    }
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Col>
                        </Row>
                    </Col>
                </Row >
                <Row className='nextBtn'>
                    <Col className='text-center' xs="8"><div className='btnBg'><button onClick={nextHandler}>Next</button></div></Col>
                </Row>
            </Modal >
        </>
    );
};

export default AddToCart;
