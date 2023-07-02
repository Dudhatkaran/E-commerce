import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Productcard from '../../Component/Product Card/Productcard'
import { SareeDetails } from '../../Shared'
import Header from '../../Component/Header/Header'
import Footer from '../../Component/Footer/Footer'
import Dropdowun from '../../Component/Dropdowun/Dropdowun'
import { CiGrid2V } from "react-icons/ci";
import style from "./Saree.module.css";
import { HiOutlineViewGrid } from "react-icons/hi";
import { BsGrid3X2GapFill } from "react-icons/bs";
import { TfiLayoutGrid4Alt, TfiLayoutGrid3Alt, TfiLayoutGrid2Alt } from "react-icons/tfi";

const Saree = () => {
    const [twoGrid, setTwoGrid] = useState(false)
    const [threeGrid, setThreeGrid] = useState(false)
    const [fourGrid, setFourGrid] = useState(false)
    const menu = ["1", "2", "3"]

    const selectGrid1 = () => {
        setTwoGrid(prev => !prev)
        setThreeGrid(false)
        setFourGrid(false)
    }
    const selectGrid2 = () => {
        setThreeGrid(prev => !prev)
        setTwoGrid(false)
        setFourGrid(false)
    }
    const selectGrid3 = () => {
        setFourGrid(prev => !prev)
        setTwoGrid(false)
        setThreeGrid(false)
    }
    return (
        <section>
            <Header />
            <Container fluid>
                <Row className='text-center m-5 justify-content-between'>
                    <Col><h3>SAREE</h3></Col>
                </Row>
                <Row className='mb-4 align-items-center text-center'>
                    <Col className='ms-3 text-start'><h5>Total:- {SareeDetails.length} Products</h5></Col>
                    <Col className='ms-3'>
                        <TfiLayoutGrid2Alt size={20} className={`${style.twoGrid} me-2`} style={{ color: twoGrid && "greenyellow" }} onClick={selectGrid1} />
                        <TfiLayoutGrid3Alt size={20} className={`${style.twoGrid} me-2`} style={{ color: threeGrid && "greenyellow" }} onClick={selectGrid2} />
                        <TfiLayoutGrid4Alt size={23} className={`${style.twoGrid}`} style={{ color: fourGrid && "greenyellow" }} onClick={selectGrid3} />
                    </Col>
                    <Col className='text-end me-2'>
                        <Dropdowun Heading="Select Brand" label="Select Brand" menuList={menu} />
                    </Col>
                </Row>
                <Row className='text-center'>
                    {
                        SareeDetails.map((card) => {
                            const mainPrice = parseFloat(card.MainPrice);
                            const salePrice = parseFloat(card.SalePrice);
                            const savePrice = mainPrice - salePrice;
                            return <Col sm={twoGrid ? "6" : (threeGrid ? "4" : "3")} className='mb-5 text-center  '><Productcard Img={card.Image} name={card.productName} producDetails={card.productDetails} MainPrice={mainPrice} SalePrice={salePrice} SavePrice={savePrice} grid2={twoGrid} grid3={threeGrid} grid4={fourGrid} /></Col>
                        })
                    }
                </Row>
            </Container>
            <Footer />
        </section>
    )
}

export default Saree