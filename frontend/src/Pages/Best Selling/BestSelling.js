import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BestSale } from '../../Shared'
import style1 from './Bestselling.module.css'

const BestSelling = () => {
    return (
        <section id={`${style1.BestSale}`}>
            <Container fluid>
                <Row className='text-center mt-5'>
                    <Col>
                        <h3>OUR BEST SELLING</h3>
                    </Col>
                </Row>
                <Row className='mt-5 align-items-center'>
                    {
                        BestSale.map((sale) => {
                            const mainPrice = parseFloat(sale.MainPrice);
                            const salePrice = parseFloat(sale.SalePrice);
                            const savePrice = mainPrice - salePrice;
                            return (
                                <Col sm="3">
                                    <img src={sale.Image} width="100%" height="500px" />
                                    <div className='text-center'>
                                        <h6 className='text-truncate'>{sale.Details}</h6>
                                        <div className='d-flex'>
                                            <p className={`${style1.mainPrice} me-2 `}>Rs.{sale.MainPrice}</p>
                                            <p className='me-2'>Rs.{sale.SalePrice}</p>
                                            <p className={`${style1.savePrice}`}>Save Rs.{savePrice}</p>
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

export default BestSelling