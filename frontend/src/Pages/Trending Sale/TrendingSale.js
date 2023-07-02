import React from 'react'
import style from './Trending.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import { TrendImage } from '../../Shared'

const TrendingSale = () => {
    return (
        <section id={`${style.TrendImageMain}`}>
            <Container fluid>
                <Row className={`${style} mt-4 text-center`}>
                    <Col className={`${style.saleHeading}`}>ELEGANCE REDEFINED, INSPIRED BY YOU </Col>
                </Row>
                <Row className={`${style} mt-3 text-center`}>
                    <Col className={`${style.saleSubHeading}`}>Welcome to Bunty's, your ultimate destination for exquisite ethnic wear. we prioritize quality and authenticity.</Col>
                </Row>
                <Row className='justify-containt-start mt-5'>
                    <Col sm="6" className='ms-0'>
                        <img src={TrendImage.trendImg1} width="100%" height="700px" />
                        <h2>Tredning Image 1</h2>
                    </Col>
                    <Col sm="6">
                        <img src={TrendImage.trendImg2} width="100%" height="700px" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default TrendingSale