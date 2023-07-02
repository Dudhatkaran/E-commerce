import React from 'react'
import style from './Topkurti.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import { TopItem } from '../../Shared'

const Topkurti = () => {
    return (
        <section id={`${style.TopKurti}`}>
            <Container fluid>
                <Row className='mt-5 align-items-center'>
                    {
                        TopItem.map((item) => {
                            return (
                                <>
                                    <Col sm="6">
                                        <div className={`${style.top_item}`}>
                                            <img src={item.Image} width="100%" />
                                        </div>
                                    </Col>
                                    <Col>
                                        <h3>{item.Name}</h3>
                                        <p className='mt-2'>{item.Details}</p>
                                    </Col>
                                </>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}

export default Topkurti