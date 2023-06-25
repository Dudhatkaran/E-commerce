import React from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../../Component/Layout/Layout'
import Slider from '../../Component/Owl-Carousal/Slider'
import TrendingSale from '../Trending Sale/TrendingSale'
import ExplorProduct from '../Explor Product/ExplorProduct'
import Topkurti from '../Top Kurti/Topkurti'
import BestSelling from '../Best Selling/BestSelling'
import Footer from '../../Component/Footer/Footer'
import Productcard from '../../Component/Product Card/Productcard'

const Home = () => {
    var navigate = useNavigate()

    const logOut = () => {
        localStorage.removeItem("USER_ID")
        localStorage.removeItem("USER_NAME")
        navigate("/Login")
    }
    return (
        <>
            <Layout />
            <Slider />
            <TrendingSale />
            <ExplorProduct />
            <Topkurti />
            <BestSelling />
            <Footer />
        </>
    )
}

export default Home