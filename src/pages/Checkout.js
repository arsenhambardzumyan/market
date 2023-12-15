import React, { useState } from "react";
import Subscribe from '../components/Subscribe/Subscribe';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'rc-slider/assets/index.css';

const Checkout = ({ products, CartTotalPrice }) => {

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
                <div className="shopping-container">
                    <div className="section-hero">
                        <div className="section-hero__bg">
                            <div className="uk-container">
                                <div className="section-hero__content">
                                    <div className="section-hero__title"> <span>Taking rides to a newer level</span>
                                        <div className="uk-h1">Checkout Page</div>
                                    </div>
                                    <div className="section-hero__breadcrumb">
                                        <ul className="uk-breadcrumb">
                                            <li><Link to="/">Home</Link></li>
                                            <li><span>Checkout</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="page-content checkout-container" id="cart_section">
                        <div className="uk-section-large uk-container shopping-page">
                            <h3 className="cart_inner_title">Order processing</h3>
                            <Form noValidate validated={validated} onSubmit={handleSubmit} className="uk-grid" data-uk-grid="true">
                                <div className="uk-width-2-3@m checkout-left">
                                    <div className="personal_details">
                                        <div className="uk-h4 block_title">Your Personal Details</div>
                                        <div className="form_container">
                                            <Form.Group className="uk-width-1-1" controlId="validationCustom01">
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Your name"
                                                    className="uk-input uk-form-large"
                                                />
                                            </Form.Group>
                                            <Form.Group className="uk-width-1-1" controlId="validationCustom01">
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Your Last Name"
                                                    className="uk-input uk-form-large"
                                                />
                                            </Form.Group>
                                            <Form.Group className="uk-width-1-1" controlId="validationCustom01">
                                                <Form.Control
                                                    required
                                                    type="email"
                                                    placeholder="Your Email"
                                                    className="uk-input uk-form-large"
                                                />
                                            </Form.Group>
                                            <Form.Group className="uk-width-1-1" controlId="validationCustom01">
                                                <Form.Control
                                                    required
                                                    type="number"
                                                    placeholder="Your Number"
                                                    className="uk-input uk-form-large"
                                                />
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className="shopping_cart_inner shopping_section_inner">
                                        <div className="shoppingCart cart_product_list">
                                            <div className="cart-products checkout-products">
                                                {products.map((product) => (
                                                    <div className="cart-product" key={product.id}>
                                                        <div className="product_image">
                                                            <img src={product.image} alt={product.name} />
                                                        </div>
                                                        <div className="product-info">
                                                            <div className="cart_product_name">{product.name}</div>
                                                            <span className="product-price">{product.price * product.count}$</span>
                                                        </div>
                                                        <div className="count_block">
                                                            <span>{product.count}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="uk-width-1-3@m  checkout-right">
                                    <div className="shipping_metod price_inner">
                                        <div className="widjet__title">
                                            <div className="uk-h4">Payment method</div>
                                        </div>
                                        <div className="uk-margin">
                                            <div className="uk-form-label">Get payment method !</div>
                                            <div className="uk-form-controls uk-form-controls-text">
                                                <label><input className="uk-radio" type="radio" name="radio1" /> Visa Cart</label>
                                                <br />
                                                <label><input className="uk-radio" type="radio" name="radio1" /> Idram </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="price_inner">
                                        <div className="widjet__title"><div className="uk-h4">Your Cart</div><span>get in touch via message</span></div>
                                        <div className="bottom_block">
                                            <div className="subtotal_block">
                                                <div className="inner_title">Subtotal</div>
                                                <div className="total_sum">{CartTotalPrice}<span>$</span></div>
                                            </div>
                                            <Button className="uk-button checkout_button uk-button-danger uk-button-large" type="submit">Order</Button>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </main >
            <Subscribe />
        </>

    )
}

export default Checkout;