import React from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../../Component/Layout/Layout'

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

            
            <div>Home</div>
            <button onClick={logOut}>Log Out</button>
        </>
    )
}

export default Home