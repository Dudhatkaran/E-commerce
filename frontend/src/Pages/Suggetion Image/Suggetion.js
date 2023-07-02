import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { suggetionDetails } from '../../Shared'
import Productcard from '../../Component/Product Card/Productcard'

const Suggetion = () => {
    return (
        <Container fluid>
            <Row className='mt-5 text-center'>
                <Col><h3>You May Also Like</h3></Col>
            </Row>
            <Row className='mt-4'>
                {
                    suggetionDetails.map((e) => {
                        const mainPrice = parseFloat(e.MainPrice);
                        const salePrice = parseFloat(e.SalePrice);
                        const savePrice = mainPrice - salePrice;
                        return <Col><Productcard Img={e.Image} name={e.productName} producDetails={e.productDetails} MainPrice={mainPrice} SalePrice={salePrice} SavePrice={savePrice} /></Col>
                    })
                }
            </Row>
        </Container>
    )
}

export default Suggetion