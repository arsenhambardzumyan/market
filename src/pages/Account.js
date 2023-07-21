import React from "react";
import Subscribe from '../components/Subscribe/Subscribe';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'rc-slider/assets/index.css';
import milkprod1 from '../assets/img/milkprod1.jpg';
import milkprod2 from '../assets/img/milkprod2.jpg';
import milkprod3 from '../assets/img/milkprod3.jpg';
import milkprod4 from '../assets/img/milkprod4.jpg';
import milkprod5 from '../assets/img/milkprod5.jpg';
import user from '../assets/img/user_01.jpg';

const Account = () => {
    return (
        <>
            <main className="page-main">
                <div className="shopping-container">
                    <div className="section-hero">
                        <div className="section-hero__bg">
                            <div className="uk-container">
                                <div className="section-hero__content">
                                    <div className="section-hero__title"> <span>Taking rides to a newer level</span>
                                        <div className="uk-h1">Account Page</div>
                                    </div>
                                    <div className="section-hero__breadcrumb">
                                        <ul className="uk-breadcrumb">
                                            <li><Link to="/">Home</Link></li>
                                            <li><span>Account</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="page-content checkout-container" id="cart_section">
                        <div className="uk-section-large uk-container shopping-page">
                            <h3 className="cart_inner_title">Your Account </h3>
                            <Form  className="uk-grid" data-uk-grid="true">
                                <div className="uk-width-2-3@m checkout-left account-info">
                                    <div className="personal_details">
                                        <div className="uk-h4 block_title">Your Personal Details</div>
                                        <div className="form_container">
                                            <Form.Group className="uk-width-1-1" >
                                             <Form.Label>Your Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Your name"
                                                    className="uk-input uk-form-large"
                                                    defaultValue="Nark"
                                                />
                                            </Form.Group>
                                            <Form.Group className="uk-width-1-1" >
                                                <Form.Label>Your Last Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Your Last Name"
                                                    className="uk-input uk-form-large"
                                                    defaultValue="Vardanyan"
                                                />
                                            </Form.Group>
                                            <Form.Group className="uk-width-1-1" >
                                                <Form.Label>Your Email</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    placeholder="Your Email"
                                                    className="uk-input uk-form-large"
                                                    defaultValue="vardanyan.narek@mail.ru"
                                                />
                                            </Form.Group>
                                            <Form.Group className="uk-width-1-1" >
                                                <Form.Label>Your Number</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    placeholder="Your Number"
                                                    className="uk-input uk-form-large"
                                                    defaultValue="3749895655"
                                                />
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className="shopping_section_inner">
                                        <div className="shoppingCart cart_product_list">
                                            <div className="uk-h4 block_title order-history-title">Order History</div>
                                            <div className="cart-products checkout-products">
                                                <div className="cart-product">
                                                    <div className="product_image">
                                                        <img src={milkprod1} alt="product_img" />
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="cart_product_name">History Product</div>
                                                        <span className="product-price">650$</span>
                                                    </div>
                                                    <div className="count_block">
                                                        <span>1</span>
                                                    </div>
                                                </div>
                                                <div className="cart-product">
                                                    <div className="product_image">
                                                        <img src={milkprod2} alt="product_img" />
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="cart_product_name">History Product</div>
                                                        <span className="product-price">800$</span>
                                                    </div>
                                                    <div className="count_block">
                                                        <span>3</span>
                                                    </div>
                                                </div>
                                                <div className="cart-product">
                                                    <div className="product_image">
                                                        <img src={milkprod3} alt="product_img" />
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="cart_product_name">History Product</div>
                                                        <span className="product-price">300$</span>
                                                    </div>
                                                    <div className="count_block">
                                                        <span>1</span>
                                                    </div>
                                                </div>
                                                <div className="cart-product">
                                                    <div className="product_image">
                                                        <img src={milkprod4} alt="product_img" />
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="cart_product_name">History Product</div>
                                                        <span className="product-price">450$</span>
                                                    </div>
                                                    <div className="count_block">
                                                        <span>2</span>
                                                    </div>
                                                </div>
                                                <div className="cart-product">
                                                    <div className="product_image">
                                                        <img src={milkprod5} alt="product_img" />
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="cart_product_name">History Product</div>
                                                        <span className="product-price">780$</span>
                                                    </div>
                                                    <div className="count_block">
                                                        <span>1</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wish_list_container shopping_section_inner">
                                        <div className="shoppingCart cart_product_list">
                                            <div className="uk-h4 block_title order-history-title">Wish List</div>
                                            <div className="cart-products checkout-products">
                                                <Link to="/product-inner" className="cart-product">
                                                    <span className="product_image">
                                                        <img src={milkprod2} alt="product_img" />
                                                    </span>
                                                    <span className="product-info">
                                                        <span className="cart_product_name">History Product</span>
                                                        <span className="product-price">600$</span>
                                                    </span>
                                                </Link>
                                                <Link to="/product-inner" className="cart-product">
                                                    <span className="product_image">
                                                        <img src={milkprod3} alt="product_img" />
                                                    </span>
                                                    <span className="product-info">
                                                        <span className="cart_product_name">History Product</span>
                                                        <span className="product-price">780$</span>
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="uk-width-1-3@m  checkout-right account-right-block">
                                    <div className="shipping_metod price_inner">
                                        <div className="widjet__title">
                                            <div className="uk-h4">Hi Narek</div>
                                        </div>
                                        <div className="user-account-block">
                                            <div className="user-info">
                                                <div className="user-name">User info</div>
                                                <div className="user-name">User description</div>
                                            </div>
                                            <div className="user-image">
                                                <img src={user} alt="user-img" title="user-img" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="price_inner">
                                    <Button className="uk-button  uk-button-danger mg-center account-btn uk-button-large" type="submit">Save Changes</Button>
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

export default Account;