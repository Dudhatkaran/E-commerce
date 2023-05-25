
import React, { useEffect, useState } from 'react'
import './Login.css';
import { FaLinkedinIn, FaGoogle, FaTwitter, FaFacebookF, FaLock, FaUserAlt } from "react-icons/fa";
import axios from 'axios';
import { API_URLS } from '../../../API/Api';
import { useNavigate } from 'react-router-dom';
import intlTelInput from 'intl-tel-input';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import { Col, Row } from 'react-bootstrap';
import Input from '../../InputField/Input';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const { LoginApi } = API_URLS
const Login = () => {
    var navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const [role, setRole] = useState("")
    const [phone, setPhone] = useState("")


    const singUp = async () => {
        await axios.post("http://192.168.0.108:3000/User/Insert", { name, email, password, phone })
            .then(res => {
                const data = res.data;
                console.log(data.success);
                if (data._id != "" && data.success === true) {
                    toast.success(data.message);
                    setName("")
                    setEmail("")
                    setPassword("")
                    setPhone("")
                    navigate("/Login");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const signIn = async () => {
        await axios.post("http://192.168.0.108:3000/User/Login", { name, password })
            .then(res => {
                const data = res.data.data;
                console.log(data.success);
                if (data._id != "" && data.success === true) {
                    toast.success(data.message);
                    localStorage.setItem("USER_ID", data._id);
                    localStorage.setItem("USER_NAME", data.name);
                    navigate("/");
                }
            })
            .catch(function (error) {
                console.log(error);
                toast.error(error.message);
            });
    }


    useEffect(() => {
        const sign_in_btn = document.querySelector("#sign-in-btn");
        const sign_up_btn = document.querySelector("#sign-up-btn");
        const container = document.querySelector(".container");

        sign_up_btn.addEventListener("click", () => {
            container.classList.add("sign-up-mode");
        });

        sign_in_btn.addEventListener("click", () => {
            container.classList.remove("sign-up-mode");
        });
    }, [])

    return (
        <>
            <div className="container" id='Login'>
                <div className="forms-container">
                    <div className="signin-signup">
                        <form action="#" className="sign-in-form">
                            <h2 className="title">Sign in</h2>
                            <Row className='justify-content-center align-items-center'>
                                <Col xl="6">
                                    <Input label="Username" value={name} onChange={(e) => setName(e.target.value)} />
                                </Col>
                                <Col>
                                    <Input label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </Col>
                            </Row>
                            <button type="button" className="btn solid" onClick={signIn} >Sign In</button>
                        </form>



                        <form className="sign-up-form">
                            <h2 className="title">Sign up</h2>
                            <Row className='justify-content-center align-items-center'>
                                <Col xl="6">
                                    <Input label="Username" value={name} onChange={(e) => setName(e.target.value)} />
                                </Col>
                                <Col>
                                    <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </Col>
                                <Col>
                                    <Input label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </Col>
                                <Col>
                                    <Input label="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </Col>
                                {/* <Col>
                                    <IntlTelInput
                                        type="number"
                                        id="outlined-basic"
                                        variant="outlined"
                                        value={phone}
                                        onChange={e => setPhone(e.target.value)}
                                        containerClassName="intl-tel-input"
                                        inputClassName="form-control"
                                        preferredCountries={['in']}
                                        separateDialCode={true}
                                    />
                                </Col> */}
                            </Row>
                            <button type="button" className="btn solid" onClick={singUp} >Sign In</button>
                        </form>
                    </div>
                </div>
                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>New here ?</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                                ex ratione. Aliquid!
                            </p>
                            <button className="btn transparent" id="sign-up-btn" >
                                Sign up
                            </button>
                        </div>
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>Already a signup?</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                                ex ratione. Aliquid!
                            </p>
                            <button className="btn transparent mt-2" id="sign-in-btn">
                                Sign in
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer
                position="bottom-left"
                autoClose={2000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                style={{ fontSize: "14px" }}
            />

        </>
    )
}

export default Login