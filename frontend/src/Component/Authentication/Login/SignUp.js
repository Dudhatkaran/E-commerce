import React, { useEffect, useState } from 'react'
import './Login.css';
import axios from 'axios';
import { API_URLS } from '../../../API/Api';
import { Link, useNavigate } from 'react-router-dom';
import intlTelInput from 'intl-tel-input';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import { Col, Container, Row } from 'react-bootstrap';
import Input from '../../InputField/Input';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Radiobutton from '../../Radiobutton/Radiobutton';
import { FormControl, FormLabel, RadioGroup } from '@mui/material';

const SignUp = () => {
    var navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [phone, setPhone] = useState("")
    const [admin, setAdmin] = useState("")
    const [user, setUser] = useState("")
    const [role, setRole] = useState("User")

    const refFn = () => {
        setName("")
        setEmail("")
        setPassword("")
        setPhone("")
    }

    const singUp = async () => {
        if (name == "") {
            toast.error("Name is required");
        }
        else if (email == "") {
            toast.error("Email is required");
        }
        else if (password == "") {
            toast.error("Password is required");
        }
        else if (phone == "") {
            toast.error("Phone is required");
        }
        else if (role == "") {
            toast.error("Role is required");
        }
        else {
            await axios.post("http://192.168.0.106:3000/User/Insert", { name, email, password, phone, role })
                .then(res => {
                    const data = res.data;
                    console.log(data)
                    if (data._id != "" && data.success === true) {
                        toast.success(data.message);
                        refFn()
                        navigate("/Login");
                    }
                    else if (data.success === false) {
                        toast.error(data.message);
                    }
                })
                .catch((error) => {
                    console.log(error.request.response["message"])
                    toast.error(error.request.response);
                });
        }
    }

    useEffect(() => {
    }, [])

    const roleCheck = (e) => {
        setRole(e)
    }
    return (
        <div id='Login'>
            <div>
                <meta charSet="UTF-8" />
                <title>CodePen - Animated Login Form using Html &amp; CSS Only</title>
                <link rel="stylesheet" href="./style.css" />
                <section> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />
                    <div className="signin">
                        <div className="content">
                            <h2>Sign In</h2>
                            <div className="form">
                                <div className="wrapper">
                                    <input type="radio" name="select" id="option-1" required checked={role === "Admin"} value="Admin" onChange={e => roleCheck(e.target.value)} className='me-1' />
                                    <input type="radio" name="select" id="option-2" required checked={role === "User"} value="User" onChange={e => roleCheck(e.target.value)} />
                                    <label htmlFor="option-1" className="option option-1">
                                        <div className="dot" />
                                        <h6 className='mt-2'>Admin</h6>
                                    </label>
                                    <label htmlFor="option-2" className="option option-2">
                                        <div className="dot" />
                                        <h6 className='mt-2'>User</h6>
                                    </label>
                                </div>
                                <div className="inputBox">
                                    <input type="text" required value={name} onChange={(e) => setName(e.target.value)} /> <i>Username</i>
                                </div>
                                <div className="inputBox">
                                    <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} /> <i>Email</i>
                                </div>
                                <div className="inputBox">
                                    <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} /> <i>Password</i>
                                </div>
                                <div className="inputBox">
                                    <input type="text" required value={phone} onChange={(e) => setPhone(e.target.value)} /> <i>Phone</i>
                                </div>
                                <div className="links"> <a href="#">Forgot Password ?</a> <Link to="/login">Signup</Link>
                                </div>
                                <div className="inputBox">
                                    <input type="submit" defaultValue="Login" onClick={singUp} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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

            {/* </Container > */}
        </div>
    )
}

export default SignUp