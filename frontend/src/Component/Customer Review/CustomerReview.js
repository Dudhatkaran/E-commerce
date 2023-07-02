import React, { useState } from 'react'
import { Col, Container, Modal, Row } from 'react-bootstrap'
import { AiFillStar } from "react-icons/ai";
import style from './CustomerReview.module.css'
import Button from '../Button/Button';
import Box from '../Rating/Box';
import Input from '../InputField/Input';
import TextArea from '../TeaxtArea/TextArea';
import { BiUpload } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";

const CustomerReview = () => {
    const [progress, setProgress] = useState(100);
    const [modalShow, setModalShow] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setSelectedImage(URL.createObjectURL(file));
    };
    return (
        <>
            <Row className='text-center mb-3'>
                <h3> Customer Reviews</h3>
            </Row>
            <Row className='align-items-center'>
                <Col sm="4" className={`${style.leftReview} p-5 `}>
                    <div className='d-flex align-items-center'>
                        <AiFillStar color='orange' size={25} />
                        <AiFillStar color='orange' size={25} />
                        <AiFillStar color='orange' size={25} />
                        <AiFillStar color='orange' size={25} />
                        <AiFillStar color='orange' size={25} />
                        <span className='ms-2'>5.00 out of 5</span>
                    </div>
                    <h6 className='mt-3'>Based on 5 reviews</h6>
                </Col>
                <Col sm="4" className={`${style.leftReview} p-5 `}>
                    <div className='d-flex align-items-center'>
                        <AiFillStar color='orange' size={25} />
                        <AiFillStar color='orange' size={25} />
                        <AiFillStar color='orange' size={25} />
                        <AiFillStar color='orange' size={25} />
                        <AiFillStar color='orange' size={25} />
                        <progress value={progress} max={100} /><span className='ms-2'>5</span>
                    </div>
                    <div className='d-flex align-items-center'>
                        <AiFillStar color='orange' size={25} />
                        <AiFillStar color='orange' size={25} />
                        <AiFillStar color='orange' size={25} />
                        <AiFillStar color='orange' size={25} />
                        <AiFillStar color='orange' size={25} />
                        <progress value={progress} max={100} /><span className='ms-2'>5</span>
                    </div>
                    <div className='d-flex align-items-center'>
                        <AiFillStar color='orange' size={25} />
                        <AiFillStar color='orange' size={25} />
                        <AiFillStar color='orange' size={25} />
                        <AiFillStar color='orange' size={25} />
                        <AiFillStar color='orange' size={25} />
                        <progress value={progress} max={100} /><span className='ms-2'>5</span>
                    </div>
                    <div className='d-flex align-items-center'>
                        <AiFillStar color='orange' size={25} />
                        <AiFillStar color='orange' size={25} />
                        <AiFillStar color='orange' size={25} />
                        <AiFillStar color='orange' size={25} />
                        <AiFillStar color='orange' size={25} />
                        <progress value={progress} max={100} /><span className='ms-2'>5</span>
                    </div>
                    <div className='d-flex align-items-center'>
                        <AiFillStar color='orange' size={25} />
                        <AiFillStar color='orange' size={25} />
                        <AiFillStar color='orange' size={25} />
                        <AiFillStar color='orange' size={25} />
                        <AiFillStar color='orange' size={25} />
                        <progress value={progress} max={100} /><span className='ms-2'>5</span>
                    </div>
                    <h6 className='mt-3 text-center'>See All Reviews</h6>
                </Col>
                <Col sm="4" className="p-5">
                    <Button Name="Write Review" className={`${style.btn}`} onClick={() => setModalShow(true)} />
                </Col>
            </Row>

            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={modalShow}
                className='modal'
            >
                <Modal.Header closeButton onHide={() => setModalShow(false)}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add Your Review
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-center justify-content-center'>
                    <h4 className='text-center'>Rating</h4>
                    <Row className='justify-content-center mt-4'>
                        <Col sm="12" className={`${style.ratingreview} text-center`}>
                            <Box />
                        </Col>
                        <Col sm="12" className={`text-center mt-3`}>
                            <h5>Review Title (100)</h5>
                        </Col>
                        <Col sm="12" >
                            <Input placeholder="Give Your Review a Title" />
                        </Col>
                        <Col sm="12" className={`text-center mt-3`}>
                            <h5>Review(5000)</h5>
                        </Col>
                        <Col sm="12" className='mt-2'>
                            <TextArea placeholder="Write Your Comments Here" />
                        </Col>
                        <Col sm="12" className={`text-center mt-3`}>
                            <h5> Picture/Video (optional)</h5>
                        </Col>
                        <Col sm="12" className={`text-center mt-3`}>
                            <label className="">
                                <img className={selectedImage && "ms-3 prfoileImage"} alt="Image Upload" src={selectedImage ? selectedImage : <BiUpload size={50} />} style={{ width: "60%" }} />
                                <input type="file" onChange={handleImageChange} multiple accept="image/png, image/jpeg, image/*" style={{ display: "none" }} />
                            </label>
                        </Col>
                        <Col sm="12" className={`text-center mt-3`}>
                            <Input placeholder="YouTube URL" />
                        </Col>
                        <Col sm="12" className={`text-center mt-3`}>
                            <Input placeholder="Enter Your Name" />
                        </Col>
                        <Col sm="12" className={`text-center mt-3`}>
                            <Input type="email" placeholder="Enter Your Email" />
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={() => setModalShow(false)} className={`submitBtn`}>Submit Review</button>
                    <button onClick={() => setModalShow(false)} className={`cancelBtn`}>Cancel Review</button>
                </Modal.Footer>
            </Modal>
            <Container fluid>
                <hr style={{ color: "black" }}></hr>
                <Row>
                    <Col>Harsh</Col>
                </Row>
                <hr></hr>
                <Row className='mt-4 align-items-center'>
                    <Col sm="12">
                        <AiFillStar color='orange' size={25} />
                        <AiFillStar color='orange' size={25} />
                        <AiFillStar color='orange' size={25} />
                        <AiFillStar color='orange' size={25} />
                        <AiFillStar color='orange' size={25} />
                    </Col>
                    <Col sm="12" className='mt-2'>
                        <div className='text-start'>
                            <FaUserCircle size={30} />
                            <span className='ms-2'>Harsh Savaliya</span>
                        </div>
                    </Col>
                    <Col sm="12" className='mt-2'>
                        <h5>Nice Product</h5>
                    </Col>
                    <Col sm="12" className='mt-2'>
                        <p>Loved this Kurti. very pretty design, Pretty colour and material is good</p>
                    </Col>
                </Row>
                <hr></hr>
                <Row className='mt-4 align-items-center'>
                    <Col sm="12">
                        <AiFillStar color='orange' size={25} />
                        <AiFillStar color='orange' size={25} />
                        <AiFillStar color='orange' size={25} />
                        <AiFillStar color='orange' size={25} />
                        <AiFillStar color='orange' size={25} />
                    </Col>
                    <Col sm="12" className='mt-2'>
                        <div className='text-start'>
                            <FaUserCircle size={30} />
                            <span className='ms-2'>Harsh Savaliya</span>
                        </div>
                    </Col>
                    <Col sm="12" className='mt-2'>
                        <h5>Nice Product</h5>
                    </Col>
                    <Col sm="12" className='mt-2'>
                        <p>Loved this Kurti. very pretty design, Pretty colour and material is good</p>
                    </Col>
                </Row>
                <hr></hr>
                <Row className='mt-4 align-items-center'>
                    <Col sm="12">
                        <AiFillStar color='orange' size={25} />
                        <AiFillStar color='orange' size={25} />
                        <AiFillStar color='orange' size={25} />
                        <AiFillStar color='orange' size={25} />
                        <AiFillStar color='orange' size={25} />
                    </Col>
                    <Col sm="12" className='mt-2'>
                        <div className='text-start'>
                            <FaUserCircle size={30} />
                            <span className='ms-2'>Harsh Savaliya</span>
                        </div>
                    </Col>
                    <Col sm="12" className='mt-2'>
                        <h5>Nice Product</h5>
                    </Col>
                    <Col sm="12" className='mt-2'>
                        <p>Loved this Kurti. very pretty design, Pretty colour and material is good</p>
                    </Col>
                </Row>
                <hr></hr>
            </Container>
        </>
    )
}

export default CustomerReview