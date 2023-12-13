import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosArrowRoundBack } from "react-icons/io";
import Subscribe from '../components/Subscribe/Subscribe';
import { Link } from "react-router-dom";
import 'rc-slider/assets/index.css';
import UIkit from 'uikit';

let shoppingCart = document.getElementsByClassName('offConvassCart');

const ShoppingCartPage = ({ products, CartTotalPrice, onProductRemove, onQuantityChange, }) => {


    React.useEffect(() => {
        UIkit.offcanvas(shoppingCart).hide();
        const element = document.getElementById('cart_section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, []);

    const incrementCount = (productId) => {
        let prodInput = document.getElementById(productId + "cartInput").value;
        prodInput++;
        onQuantityChange(productId, prodInput);
    };

    const decrementCount = (productId) => {
        let prodInput = document.getElementById(productId + "cartInput").value;
        if (prodInput > 1) {
            prodInput--;
            onQuantityChange(productId, prodInput);
        }
    };

    const maxSize = 10;

    
    return (
        <>
            <main className="page-main">
                <div className="shopping-container">
                    <div className="section-hero">
                        <div className="section-hero__bg">
                            <div className="uk-container">
                                <div className="section-hero__content">
                                    <div className="section-hero__title"> <span>Taking rides to a newer level</span>
                                        <div className="uk-h1">Shopping Cart</div>
                                    </div>
                                    <div className="section-hero__breadcrumb">
                                        <ul className="uk-breadcrumb">
                                            <li><Link to="/">Home</Link></li>
                                            <li><span>Shopping Cart</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="page-content" id="cart_section">
                        <div className="uk-section-large uk-container shopping-page">
                            {products.length === 0 ? (
                                <div className="empty-cart-container">
                                    <div className="empty_cart_icon">
                                        <AiOutlineShoppingCart />
                                    </div>
                                    <h2 className="empty_text">Your Cart is Empty</h2>
                                    <p className="empty_description">Add something to make me Happy ...</p>
                                    <Link to="/product-listing" className="shopping-continune-btn uk-button uk-button-danger uk-button-large btn btn-primary">Continune Shopping</Link>
                                </div>)
                                : (
                                    <>
                                        <h3 className="cart_inner_title">Shopping Bag (<span>{products.length}</span>)</h3>
                                        <div className="uk-grid" data-uk-grid="true">
                                            <div className="uk-width-2-3@m">
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
                                                                        <button className="minusCount_btn" onClick={() => decrementCount(product.id)}><AiOutlineMinus size={15} /></button>
                                                                        <input type="number"
                                                                            id={product.id + "cartInput"}
                                                                            value={product.count}
                                                                            onChange={(event) => { onQuantityChange(product.id, event.target.value); }}
                                                                            min="0" max={maxSize}
                                                                            className="count_input"
                                                                        />
                                                                        <button className="plusCount_btn" onClick={() => incrementCount(product.id)}><AiOutlinePlus size={15} /></button>
                                                                    </div>
                                                                    <button className="btn remove-btn" onClick={() => onProductRemove(product)}>
                                                                        <RiDeleteBin6Line size={20} />
                                                                    </button>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="uk-width-1-3@m price_inner">
                                            <div className="widjet__title"><div className="uk-h4">Your Cart</div><span>get in touch via message</span></div>
                                                {products.length > 0 && (
                                                    <div className="bottom_block">
                                                        <div className="subtotal_block">
                                                            <div className="inner_title">Subtotal</div>
                                                            <div className="total_sum">{CartTotalPrice}<span>$</span></div>
                                                        </div>
                                                        <Link to="/checkout" className="checkout_button">Checkout</Link>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <Link to="/product-listing" className="back_btn"><IoIosArrowRoundBack />Continune Shopping</Link>
                                    </>
                                )}
                        </div>
                    </div>
                </div>
            </main >
            <Subscribe />
        </>

    )
}

export default ShoppingCartPage;