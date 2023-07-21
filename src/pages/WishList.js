import React, { useRef, useState } from 'react';
import Subscribe from '../components/Subscribe/Subscribe';
import 'rc-slider/assets/index.css';
import { FiCheck } from "react-icons/fi";
import product04 from '../assets/img/product04.jpg';
import product02 from '../assets/img/product02.jpg';
import product03 from '../assets/img/product03.jpg';
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsFillHeartbreakFill } from "react-icons/bs";


const WishList = ({ addProductToCart,  products }) => {
    
    let productListEl = useRef(null);

    const [isToggled] = useState(false);

    const addProduct = (e, product) => {
        e.preventDefault();
        addProductToCart(product);
        if (!e.currentTarget.parentElement.parentElement.parentElement.classList.contains('product-added')) {
            e.currentTarget.parentElement.parentElement.parentElement.classList.add('product-added');
        }
    }

    React.useEffect(() => {
        let localList;
        if (localStorage.getItem("shopping-cart") != null) {
            localList = JSON.parse(localStorage.getItem("shopping-cart")).map(product => product.id);
            for (let i = 0; i < productListEl.current.childElementCount; i++) {
                if (localList.includes(+productListEl.current.children[i].id)) {
                    if (!productListEl.current.children[i].classList.contains('product-added')) {
                        productListEl.current.children[i].classList.add('product-added')
                    }
                }
            }
        }
    }, []);

    return (
        <>
            <main className="page-main">
                <div className="product_inner_section wishList-container">
                    <div className="section-hero">
                        <div className="section-hero__bg">
                            <div className="uk-container">
                                <div className="section-hero__content">
                                    <div className="section-hero__title"> <span>Taking rides to a newer level</span>
                                        <div className="uk-h1">Wish List</div>
                                    </div>
                                    <div className="section-hero__breadcrumb">
                                        <ul className="uk-breadcrumb">
                                            <li><a href="/#">Home</a></li>
                                            <li><span>Wish List</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="page-content"  id="product_inner">
                        <div className="favorite-products">
                            <div className="uk-section uk-container">
                                <div className="uk-h2 uk-margin-medium-bottom">Your Favorite Products</div>
                                <div className="products-items uk-grid" data-uk-grid>
                                    <div className='uk-grid uk-grid-medium uk-child-width-1-3@m uk-child-width-1-3@s product_listing'
                                        data-uk-grid ref={productListEl}>
                                        {products.map((product) => (
                                            <div key={product.id} id={product.id} className="product-container" >
                                                <Link to="/product-inner" className={isToggled ? 'product-item uk-transition-toggle product-item--list' : ' product-item uk-transition-toggle '}>
                                                    <div className="product-item__head">
                                                        <div>
                                                            <div className="product-item__name"><span>{product.name}</span></div>
                                                            <div className="product-item__manufacturer">{product.description}</div>
                                                        </div>
                                                        <div>
                                                            <div className="product-item__price"> ${product.price}</div>
                                                        </div>
                                                    </div>
                                                    <div className="product-item__media uk-inline-clip uk-inline">
                                                        <img src={product.image} alt={product.image} title="product" />
                                                        <div className="uk-transition-fade" href="/#" onClick={(e) => addProduct(e, product)}>
                                                            <div className="uk-overlay-cover uk-overlay-primary"></div>
                                                            <FiCheck className="checked_icon uk-position-center " size={60} />
                                                            <div className="uk-position-center"><span className="icon-cross"></span></div>
                                                        </div>
                                                        <button className="product-item__whish btn-whish"><i className="far fa-heart"><AiOutlineHeart /></i></button></div>
                                                    <div className="product-item__info">
                                                        <ul className="list-info">
                                                            <li className="list-info-item">
                                                                <div className="list-info-item__title">Year</div>
                                                                <div className="list-info-item__value">2021</div>
                                                            </li>
                                                            <li className="list-info-item">
                                                                <div className="list-info-item__title">Type</div>
                                                                <div className="list-info-item__value">Sports</div>
                                                            </li>
                                                            <li className="list-info-item">
                                                                <div className="list-info-item__title">Make</div>
                                                                <div className="list-info-item__value">BMW</div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="product-item__specifications">
                                                        <ul className="specifications-list">
                                                            <li className="specifications-list-item">
                                                                <div className="specifications-list-item__icon">
                                                                    <img src={product04} alt="Engine type" title="product" />
                                                                </div>
                                                                <div className="specifications-list-item__desc">
                                                                    <div className="specifications-list-item__title">Engine type</div>
                                                                    <div className="specifications-list-item__value">4-Stroke Cylinder</div>
                                                                </div>
                                                            </li>
                                                            <li className="specifications-list-item">
                                                                <div className="specifications-list-item__icon">
                                                                    <img src={product03} alt="Engine Power" />
                                                                </div>
                                                                <div className="specifications-list-item__desc">
                                                                    <div className="specifications-list-item__title">Engine Power</div>
                                                                    <div className="specifications-list-item__value">205hp (151 kW)</div>
                                                                </div>
                                                            </li>
                                                            <li className="specifications-list-item">
                                                                <div className="specifications-list-item__icon">
                                                                    <img src={product02} alt="Displacement" /></div>
                                                                <div className="specifications-list-item__desc">
                                                                    <div className="specifications-list-item__title">Displacement</div>
                                                                    <div className="specifications-list-item__value">999 cc</div>
                                                                </div>
                                                            </li>
                                                            <li className="specifications-list-item">
                                                                <div className="specifications-list-item__icon">
                                                                    <img src={product04} alt="Bore/Stroke" />
                                                                </div>
                                                                <div className="specifications-list-item__desc">
                                                                    <div className="specifications-list-item__title">Bore/Stroke</div>
                                                                    <div className="specifications-list-item__value">80mm / 49.7mm</div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="add-favorite-block remove-fav-btn">
                                                        <div>
                                                            Remove from favorite 
                                                            <BsFillHeartbreakFill className="default-mode"/>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        ))}
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

export default WishList;