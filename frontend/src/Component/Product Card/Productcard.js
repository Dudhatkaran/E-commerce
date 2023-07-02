import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import style from './Product.module.css'

const Productcard = ({ Img, MainPrice, producDetails, SalePrice, SavePrice, grid2, grid3 }) => {
    return (
        <div fluid id={`${style.Saree}`}>
            <div className={`${style.mainCard}`}>
                <img src={Img} width="100%" height={grid2 ? "700px" : (grid3 ? "500px" : "400px")} />
                <div className={`${style.overlay}`}>
                    <div className={`${style.text}`}>
                        <h6>Sale</h6>
                    </div>
                </div>
            </div>
            <Row className='text-center'>
                <Col><h6>{producDetails}</h6></Col>
            </Row>
            <Row className='text-center'>
                <Col>
                    <div className='d-flex'>
                        <p className={`${style.mainPrice} me-2`}>{MainPrice && "Rs."}{MainPrice}</p>
                        <p className='me-2'>{SalePrice && "Rs."}{SalePrice}</p>
                        <p className={`${style.savePrice}`}>{SavePrice && "Save Rs."}{SavePrice}</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Productcard