import React from 'react'
import { Accordion, Col, Container, Row } from 'react-bootstrap'

const Faqs = () => {
    return (
        <Container>
            <Row className='text-center mb-5 mt-4'>
                <Col><h3>FAQs</h3></Col>
            </Row>
            <Row>
                <Col>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h5>Order Shipping</h5></Accordion.Header>
                            <Accordion.Body>
                                <h5>When will my order be dispatched?</h5>
                                <p>
                                    Once you have placed an order from the website, you will receive an order confirmation call from our Customer Care team. After the confirmation from your end, we dispatch the order within 24 hours.</p>
                                <h5>When will my order be dispatched?</h5>
                                <p>
                                    Once you have placed an order from the website, you will receive an order confirmation call from our Customer Care team. After the confirmation from your end, we dispatch the order within 24 hours.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><h5>Order Tracking</h5></Accordion.Header>
                            <Accordion.Body>
                                <h5>How can I track my order?</h5>
                                <p>1. Login {`->`} My Account {`->`} My Orders</p>
                                <p>2. Select the order you wish to track</p>
                                <p>3. You will be able to check the status and estimated delivery date over there.You will also receive the tracking details on your registered Email ID/ Whatsapp number once your order has been dispatched.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header><h5>Payment Related</h5></Accordion.Header>
                            <Accordion.Body>
                                <h5>How can I track my order?</h5>
                                <p>1. Login {`->`} My Account {`->`} My Orders</p>
                                <p>2. Select the order you wish to track</p>
                                <p>3. You will be able to check the status and estimated delivery date over there.You will also receive the tracking details on your registered Email ID/ Whatsapp number once your order has been dispatched.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header><h5>Return & Refund</h5></Accordion.Header>
                            <Accordion.Body>
                                <h5>How can I track my order?</h5>
                                <p>1. Login {`->`} My Account {`->`} My Orders</p>
                                <p>2. Select the order you wish to track</p>
                                <p>3. You will be able to check the status and estimated delivery date over there.You will also receive the tracking details on your registered Email ID/ Whatsapp number once your order has been dispatched.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header><h5>Order Cancellation</h5></Accordion.Header>
                            <Accordion.Body>
                                <h5>How can I track my order?</h5>
                                <p>1. Login {`->`} My Account {`->`} My Orders</p>
                                <p>2. Select the order you wish to track</p>
                                <p>3. You will be able to check the status and estimated delivery date over there.You will also receive the tracking details on your registered Email ID/ Whatsapp number once your order has been dispatched.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header><h5>About Leemboodi Products</h5></Accordion.Header>
                            <Accordion.Body>
                                <h5>How can I track my order?</h5>
                                <p>1. Login {`->`} My Account {`->`} My Orders</p>
                                <p>2. Select the order you wish to track</p>
                                <p>3. You will be able to check the status and estimated delivery date over there.You will also receive the tracking details on your registered Email ID/ Whatsapp number once your order has been dispatched.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    )
}

export default Faqs