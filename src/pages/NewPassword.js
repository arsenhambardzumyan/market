import React, { useState } from "react";
import blacklogo from '../assets/img/logo-black.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

const NewPassword = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        password: '',
        repeatPassword: '',
      });
    
      const [validationErrors, setValidationErrors] = useState({
        password: '',
        repeatPassword: '',
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.repeatPassword) {
          setValidationErrors({
            password: 'Passwords do not match',
            repeatPassword: 'Passwords do not match',
          });
        } else {
          console.log('Form submitted:', formData);
          navigate('/')
        }
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
                                        <div className="uk-h1">Reset Password</div>
                                    </div>
                                    <div className="section-hero__breadcrumb">
                                        <ul className="uk-breadcrumb">
                                            <li><a href="/#">Home</a></li>
                                            <li><span>Reset Password</span></li>
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
                                    <h3 className="uk-h2">New  Password</h3>
                                </div>
                                <div className="section-content">
                                    <Form onSubmit={handleSubmit}>
                                        <div className="uk-grid uk-grid-small uk-child-width-1-3@s" data-uk-grid>
                                            <Form.Group className="uk-width-1-1" controlId="password">
                                                <Form.Control
                                                    required
                                                    name="password"
                                                    type="password"
                                                    placeholder="New Password"
                                                    className="uk-input uk-form-large"
                                                    value={formData.password}
                                                    onChange={handleInputChange}
                                                />
                                                 <Form.Text className="text-danger">{validationErrors.password}</Form.Text>
                                            </Form.Group>
                                            <Form.Group className="uk-width-1-1" controlId="repeatPassword">
                                                <Form.Control
                                                    required
                                                    name="repeatPassword"
                                                    type="password"
                                                    placeholder="Repeat  Password"
                                                    value={formData.repeatPassword}
                                                    onChange={handleInputChange}
                                                    className="uk-input uk-form-large"
                                                />
                                                  <Form.Text className="text-danger">{validationErrors.repeatPassword}</Form.Text>
                                            </Form.Group>
                                            <div className="uk-margin-medium-top uk-width-1-1 uk-text-center ">
                                                <Button className="uk-button uk-button-danger uk-button-large" type="submit">Reset Password</Button>
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

export default NewPassword;