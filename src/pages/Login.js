import React, { useState } from "react";
import blacklogo from '../assets/img/logo-black.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


const Login = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <>
            <main className="page-main">
                <div className="contacts_container">
                    <div className="section-hero">
                        <div className="section-hero__bg">
                            <div className="uk-container">
                                <div className="section-hero__content">
                                    <div className="section-hero__title"> <span>Taking rides to a newer level</span>
                                        <div className="uk-h1">Login</div>
                                    </div>
                                    <div className="section-hero__breadcrumb">
                                        <ul className="uk-breadcrumb">
                                            <li><a href="/#">Home</a></li>
                                            <li><span>Login</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="page-content">
                        <div className="uk-section-small uk-container">
                            <div className="contact-form">
                                <div className="section-title uk-text-center"><img src={blacklogo} title="icon" alt="" /><span>Taking rides to a newer level</span>
                                    <h3 className="uk-h2">Login in your acount</h3>
                                </div>
                                <div className="section-content">
                                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                        <div className="uk-grid uk-grid-small uk-child-width-1-3@s" data-uk-grid>
                                            <Form.Group className="uk-width-1-1" controlId="validationCustom01">
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Your name"
                                                    className="uk-input uk-form-large"
                                                />
                                            </Form.Group>
                                            <Form.Group className="uk-width-1-1" controlId="validationCustom02">
                                                <Form.Control
                                                    required
                                                    type="password"
                                                    placeholder="Password"
                                                    className="uk-input uk-form-large"
                                                />
                                            </Form.Group>
                                            <div className="login-bottom uk-width-1-1">
                                                <div className="checkbox-content">
                                                    <label className="checkbox_field">
                                                        <input name="rememberme" className="uk-checkbox" type="checkbox" value="forever" />
                                                        <span>Remember Me</span>
                                                    </label>
                                                </div>
                                                <Link className="lost-pass" to='/ResetPassword'> Lost password?</Link>
                                            </div>
                                            <div className="uk-margin-medium-top uk-width-1-1 uk-text-center  login-btn-login">
                                                <Button className="uk-button uk-button-danger uk-button-large" type="submit">Login </Button>
                                            </div>
                                            <div className="uk-margin-medium-top uk-width-1-1 uk-text-center login-btn-registrtation">
                                                <Link to="/registration" className=" mg-center  uk-button uk-button-danger uk-button-large">Create New Account </Link>
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        </>
    )
}

export default Login;