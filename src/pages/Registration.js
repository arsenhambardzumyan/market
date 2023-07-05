import React, { useState } from "react";
import blacklogo from '../assets/img/logo-black.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


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
                                            <Form.Group className="uk-width-1-1" controlId="validationCustom01">
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="first name"
                                                    className="uk-input uk-form-large"
                                                />
                                            </Form.Group>
                                            <Form.Group className="uk-width-1-1" controlId="validationCustom01">
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Last name"
                                                    className="uk-input uk-form-large"
                                                />
                                            </Form.Group>
                                            <Form.Group className="uk-width-1-1" controlId="validationCustom01">
                                                <Form.Control
                                                    required
                                                    type="email"
                                                    placeholder="Your email"
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
                                            <div className="uk-margin-medium-top uk-width-1-1 uk-text-center">
                                                <Button className="uk-button uk-button-danger uk-button-large" type="submit">Registration</Button>
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