import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Productcard from '../../Component/Product Card/Productcard'
import { SareeDetails } from '../../Shared'
import Header from '../../Component/Header/Header'
import Footer from '../../Component/Footer/Footer'
import Dropdowun from '../../Component/Dropdowun/Dropdowun'

const Gown = () => {
    const menu = ["1", "2", "3"]
    return (
        <section>
            <Header />
            <Container fluid>
                <Row className='text-center m-5 justify-content-between'>
                    <Col><h3>GOWN</h3></Col>
                </Row>
                <Row className='mb-4 align-items-center'>
                    <Col className='ms-3'><h5>Total:- {SareeDetails.length} Products</h5></Col>
                    <Col className='text-end me-2'>
                        <Dropdowun Heading="Select Brand" label="Select Brand" menuList={menu} />
                    </Col>
                </Row>
                <Row>
                    {
                        SareeDetails.map((card) => {
                            const mainPrice = parseFloat(card.MainPrice);
                            const salePrice = parseFloat(card.SalePrice);
                            const savePrice = mainPrice - salePrice;
                            return <Col sm="3" className='mb-5'><Productcard Img={card.Image} name={card.productName} producDetails={card.productDetails} MainPrice={mainPrice} SalePrice={salePrice} SavePrice={savePrice} /></Col>
                        })
                    }
                </Row>
            </Container>
            <Footer />
        </section>
    )
}

export default Gown