import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import style from './ExplorProduct.module.css'
import { ExplorCard } from '../../Shared'
import Button from '../../Component/Button/Button'

const ExplorProduct = () => {
    return (
        <section id={`${style.ExplorProduct}`}>
            <Container fluid>
                <Row className={`${style.mainProductPart} text-center mt-5 mb-5`}>
                    <Col><h4>Explor MORE</h4></Col>
                </Row>
                <Row>
                    {
                        ExplorCard.map((card) => {
                            return (
                                <Col sm="3">
                                    <div className={`${style.mainCard}`}>
                                        <img src={card.Image} width="100%" height="400px" />
                                        <div className={`${style.overlay}`}>
                                            <div className={`${style.text}`}>
                                                <Button Name={card.Name} />
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}

export default ExplorProduct