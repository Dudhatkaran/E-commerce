
import React, { useEffect, useState } from 'react'
import './Login.css';
import { FaLinkedinIn, FaGoogle, FaTwitter, FaFacebookF, FaLock, FaUserAlt } from "react-icons/fa";
import axios from 'axios';
import { API_URLS } from '../../../API/Api';
import { useNavigate } from 'react-router-dom';

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
                console.log(data);
                if (data._id != "") {
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
                console.log(data);
                if (data._id != "") {
                    // navigate("/")
                    localStorage.setItem("USER_ID", data._id);
                    localStorage.setItem("USER_NAME", data.name);
                    navigate("/");
                }
            })
            .catch(function (error) {
                console.log(error);
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
            <div className="container">
                <div className="forms-container">
                    <div className="signin-signup">
                        <form action="#" className="sign-in-form">
                            <h2 className="title">Sign in</h2>
                            <div className="input-field">
                                <FaUserAlt />
                                <input type="text" placeholder="Name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="input-field">
                                <FaLock />
                                <input type="password" placeholder="Password" name="email" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <button type="button" className="btn solid" onClick={signIn} >Sign In</button>

                            <p className="social-text">Or Sign in with social platforms</p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <FaFacebookF />
                                </a>
                                <a href="#" className="social-icon">
                                    <FaTwitter />
                                </a>
                                <a href="#" className="social-icon">
                                    <FaGoogle />
                                </a>
                                <a href="#" className="social-icon">
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </form>



                        <form className="sign-up-form">
                            <h2 className="title">Sign up</h2>
                            <div className="input-field">
                                <i className="fas fa-user" />
                                <input type="text" placeholder="Username" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-envelope" />
                                <input type="email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock" />
                                <input type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            {/* <div className="input-field">
                                <i className="fas fa-lock" />
                                <input type="text" placeholder="Role" name="role" value={role} onChange={(e) => setRole(e.target.value)} />
                            </div> */}
                            <div className="input-field">
                                <i className="fas fa-lock" />
                                <input type="number" placeholder="Phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <button type="button" className="btn solid" onClick={singUp} >Sign Up</button>
                            <p className="social-text">Or Sign up with social platforms</p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <FaFacebookF />
                                </a>
                                <a href="#" className="social-icon">
                                    <FaTwitter />
                                </a>
                                <a href="#" className="social-icon">
                                    <FaGoogle />
                                </a>
                                <a href="#" className="social-icon">
                                    <FaLinkedinIn />
                                </a>
                            </div>
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

        </>
    )
}

export default Login