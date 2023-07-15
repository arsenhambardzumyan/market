import React from 'react';
// import { RiDeleteBin6Line } from "react-icons/ri";
// import { AiOutlinePlus } from "react-icons/ai";
// import { AiOutlineMinus } from "react-icons/ai";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { IoIosArrowRoundBack } from "react-icons/io";
import Subscribe from '../components/Subscribe/Subscribe';
import { Link } from "react-router-dom";
import 'rc-slider/assets/index.css';
// import UIkit from 'uikit';

// let shoppingCart = document.getElementsByClassName('offConvassCart');

const Checkout = ({ products, CartTotalPrice }) => {

    // React.useEffect(() => {
    //     UIkit.offcanvas(shoppingCart).hide();
    //     const element = document.getElementById('cart_section');
    //     if (element) {
    //         element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    //     }
    // }, []);

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
                    <div className="page-content" id="cart_section">
                        <div className="uk-section-large uk-container shopping-page">
                            <h3 className="cart_inner_title">Order processing</h3>
                            <div className="uk-grid" data-uk-grid="true">
                                <div className="uk-width-2-3@m">
                                    <div className="personal_details">
                                        <div className="uk-h4 block_title">Your Personal Details</div>
                                        <div className="form_container">
                                            <form>
                                                <label>Name*</label>
                                                <input type="text" placeholder='Name' disabled />
                                                <label>Last Name</label>
                                                <input type="text" placeholder='Last Name' disabled />
                                                <label>Email*</label>
                                                <input type="text" placeholder='Email' disabled />
                                                <label>Telephone*</label>
                                                <input type="text" placeholder='Telephone' disabled />
                                            </form>
                                        </div>
                                    </div>
                                    <div className="shopping_cart_inner shopping_section_inner">
                                        <div className="shoppingCart cart_product_list">
                                            <div className="cart-products">
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
                                <div className="uk-width-1-3@m ">
                                    <div className="shipping_metod price_inner">
                                        <div className="widjet__title"><div className="uk-h4">Payment method</div></div>
                                    </div>
                                    <div className="price_inner">
                                        <div className="widjet__title"><div className="uk-h4">Your Cart</div><span>get in touch via message</span></div>
                                        <div className="bottom_block">
                                            <div className="subtotal_block">
                                                <div className="inner_title">Subtotal</div>
                                                <div className="total_sum">{CartTotalPrice}<span>$</span></div>
                                            </div>
                                            <a href="/#" className="checkout_button">Order</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
            <Subscribe />
        </>

    )
}

export default Checkout;