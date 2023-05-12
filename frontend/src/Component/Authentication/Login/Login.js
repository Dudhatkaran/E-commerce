/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import style from './Login.module.css';

const Login = () => {

    const loginText = document.querySelector(".title-text .login");
    const loginForm = document.querySelector("form.login");
    const loginBtn = document.querySelector("label.login");
    const signupBtn = document.querySelector("label.signup");
    const signupLink = document.querySelector("form .signup-link a");
    signupBtn.onclick = (() => {
        loginForm.style.marginLeft = "-50%";
        loginText.style.marginLeft = "-50%";
    });
    loginBtn.onclick = (() => {
        loginForm.style.marginLeft = "0%";
        loginText.style.marginLeft = "0%";
    });
    signupLink.onclick = (() => {
        signupBtn.click();
        return false;
    });

    return (
        <>
            <h1>harsh</h1>
            <div className={ style.wrapper }>
                <div className={ style.title - text }>
                    <div className={ style.title - login }>
                        Login Form</div>
                    <div className={ style.title - signup }>
                        Signup Form</div>
                </div>
                <div className={ style.form - container }>
                    <div className={ style.slide - controls }>
                        <input type="radio" name="slide" id="login" checked />
                        <input type="radio" name="slide" id="signup" />
                        <label for="login" className="slide login">Login</label>
                        <label for="signup" className={ style.slide - ignup }>Signup</label>
                        <div className={ style.slider - tab }>
                        </div>
                    </div>
                    <div className={ style.form - inner }>
                        <form action="#" className={ style.login }>
                            <div className={ style.field }>
                                <input type="text" placeholder="Email Address" required />
                            </div>
                            <div className={ style.field }>
                                <input type="password" placeholder="Password" required />
                            </div>
                            <div className={ style.pass - link }>
                                <a>Forgot password?</a>
                            </div>
                            <div className={ style.field - btn }>
                                <div className={ style.btn - layer }>
                                </div>
                                <input type="submit" value="Login" />
                            </div>
                            <div className={ style.signup - link }>
                                Not a member? <a href="">Signup now</a></div>
                        </form>
                        <form action="#" className={ style.signup }>
                            <div className={ style.field }>
                                <input type="text" placeholder="Email Address" required />
                            </div>
                            <div className={ style.field }>
                                <input type="password" placeholder="Password" required />
                            </div>
                            <div className={ style.field }>
                                <input type="password" placeholder="Confirm password" required />
                            </div>
                            <div className={ style.field - btn }>
                                <div className={ style.btn - layer }>
                                </div>
                                <input type="submit" value="Signup" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login