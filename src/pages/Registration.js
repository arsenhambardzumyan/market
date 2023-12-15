import React, { useState } from "react";
import blacklogo from '../assets/img/logo-black.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link , useNavigate } from "react-router-dom";
import request from "../components/helpers/request";


const Login = ({SetSuccessMessage , SetErrorMessage}) => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const [validated, setValidated] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }else{
            event.preventDefault();
            request(`https://api.dev.itfabers.com/api/auth/register/`, 'POST', formData)
                .then(() => {
                    // SetErrorMessage(null);
                    // SetSuccessMessage('success ✔');
                    navigate('/login');
                })
                .catch(err => {
                    console.log(err);
                    // SetErrorMessage(err)
                })
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
                                        <div className="uk-h1">Registration</div>
                                    </div>
                                    <div className="section-hero__breadcrumb">
                                        <ul className="uk-breadcrumb">
                                            <li><a href="/#">Home</a></li>
                                            <li><span>Registration</span></li>
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
                                            <Form.Group className="uk-width-1-1 login-btn-registrtation" controlId="validationCustom01">
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="first name"
                                                    className="uk-input uk-form-large"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                />

                                            </Form.Group>
                                            <Form.Group className="uk-width-1-1 login-btn-registrtation" controlId="validationCustom02">
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Last name"
                                                    className="uk-input uk-form-large"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                            <Form.Group className="uk-width-1-1 login-btn-registrtation" controlId="validationCustom03">
                                                <Form.Control
                                                    required
                                                    type="email"
                                                    placeholder="Your email"
                                                    className="uk-input uk-form-large"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                            <Form.Group className="uk-width-1-1 login-btn-registrtation" controlId="validationCustom04">
                                                <Form.Control
                                                    required
                                                    type="password"
                                                    placeholder="Password"
                                                    className="uk-input uk-form-large"
                                                    name="password"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                            <div className="uk-margin-medium-top uk-width-1-1 uk-text-center login-btn-login">
                                                <Button className="uk-button uk-button-danger uk-button-large" type="submit">Registration</Button>
                                            </div>
                                            <div className="uk-margin-medium-top uk-width-1-1 uk-text-center login-btn-registrtation">
                                                <Link to="/login" className="uk-button mg-center uk-button-danger uk-button-large">Login </Link>
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
