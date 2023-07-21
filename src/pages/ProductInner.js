import React, { useRef, useState } from 'react';
import brand2 from '../assets/img/brand-2.png';
import Subscribe from '../components/Subscribe/Subscribe';
import 'rc-slider/assets/index.css';
import { FiCheck } from "react-icons/fi";
import product04 from '../assets/img/product04.jpg';
import product02 from '../assets/img/product02.jpg';
import product03 from '../assets/img/product03.jpg';
import milkprod1 from '../assets/img/milkprod1.jpg';
import milkprod2 from '../assets/img/milkprod2.jpg';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";


const ProductInner = ({ addProductToCart,  products }) => {
    
    let productListEl = useRef(null);
    let productInnerListEl = useRef(null);
    let producNameRef = useRef(null);

    const [isToggled] = useState(false);

    const addProduct = (e, product) => {
        e.preventDefault();
        addProductToCart(product);
        if (!e.currentTarget.parentElement.parentElement.parentElement.classList.contains('product-added')) {
            e.currentTarget.parentElement.parentElement.parentElement.classList.add('product-added');
        }
    }
    
    const favoritemode =(e)=> {
        e.preventDefault();
        e.currentTarget.classList.add('favorite-mode-on');
    }

    const ProductInnerProto = {
        
        id: 777,
        name : 'Exampe Name',
        description : 'Example Description',
        price: 6200,
        image : product02,
    }

    React.useEffect(() => {
        const innerElid=ProductInnerProto.id;
        const element = document.getElementById('product_inner');

        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        let localList;
        if (localStorage.getItem("shopping-cart") != null) {
            localList = JSON.parse(localStorage.getItem("shopping-cart")).map(product => product.id);
            for (let i = 0; i < productListEl.current.childElementCount; i++) {
                if (localList.includes(+productListEl.current.children[i].id)) {
                    if (!productListEl.current.children[i].classList.contains('product-added')) {
                        productListEl.current.children[i].classList.add('product-added')
                    }
                }else if(localList.includes(+innerElid)){
                    if (!productInnerListEl.current.classList.contains('product-added')) {
                        productInnerListEl.current.classList.add('product-added')
                    }
                }
            }
        }
    }, [ProductInnerProto.id]);


    UIkit.use(Icons);

    const innerProductAdd = (e) => {
        addProduct(e, ProductInnerProto)
    }

    return (
        <>
            <main className="page-main">
                <div className="product_inner_section">
                    <div className="section-hero">
                        <div className="section-hero__bg">
                            <div className="uk-container">
                                <div className="section-hero__content">
                                    <div className="section-hero__title"> <span>Taking rides to a newer level</span>
                                        <div className="uk-h1">Inventory</div>
                                    </div>
                                    <div className="section-hero__breadcrumb">
                                        <ul className="uk-breadcrumb">
                                            <li><a href="/#">Home</a></li>
                                            <li><span>Product</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="page-content"  id="product_inner">
                        <div className="uk-section-large uk-container">
                            <div className="page-product" >
                                <div className="uk-grid uk-flex-middle" data-uk-grid>
                                    <div className="uk-width-2-3@m">
                                        <div className="page-product__title">
                                            <div className="uk-h1 productInnerName" ref={producNameRef} >{ProductInnerProto.name}</div>
                                            <span className="productInnerDesc">{ProductInnerProto.description}</span>
                                        </div>
                                    </div>
                                    <div className="uk-width-1-3@m">
                                        <div className="page-product__price">
                                            <div><span className="current">${ProductInnerProto.price} </span><span className="old productInnerPrice">MSRP: $7,800</span></div>
                                            <div className="uk-margin-small-top"><span>Included Taxes & Checkup*</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="uk-grid" data-uk-grid>
                                    <div className="uk-width-2-3@m" ref={productInnerListEl} id={ProductInnerProto.id}>
                                        <div className="page-product__btns">
                                            <button className="danger" type="button">
                                                <i className="fas fa-star"></i>
                                                <span>Save to fav</span>
                                            </button>
                                            <button className="secondary" type="button">
                                                <i className="fas fa-columns"></i>
                                                <a href='/#'  className="productInnerAddBtn" onClick={(e)=>innerProductAdd(e)} >
                                                    <FiCheck className="btn-checked" size={30} />
                                                    Add to Cart
                                                </a>
                                            </button>
                                        </div>
                                        <div className="page-product__gallery">
                                            <div data-uk-slideshow="min-height: 300; max-height: 430">
                                                <ul className="uk-slideshow-items uk-child-width-1-1">
                                                    <li><img className="uk-width-1-1 productInnerImage" src={ProductInnerProto.image} alt="img-gallery" data-uk-cover title="product" /></li>
                                                    <li><img className="uk-width-1-1" src={product03} alt="img-gallery" data-uk-cover title="product" /></li>
                                                    <li><img className="uk-width-1-1" src={product04} alt="img-gallery" data-uk-cover title="product" /></li>
                                                    <li><img className="uk-width-1-1" src={milkprod1} alt="img-gallery" data-uk-cover title="product" /></li>
                                                    <li><img className="uk-width-1-1" src={milkprod2} alt="img-gallery" data-uk-cover title="product" /></li>
                                                </ul>
                                                <div className="uk-margin-top" >
                                                    <ul className="uk-thumbnav uk-slider-items uk-grid uk-grid-small uk-child-width-1-3 uk-child-width-1-4@m uk-child-width-1-5@l">
                                                        <li data-uk-slideshow-item="0"><a href="/#"><img className="uk-width-1-1" src={product02} alt="img-gallery" data-uk-cover title="product" /></a></li>
                                                        <li data-uk-slideshow-item="1"><a href="/#"><img className="uk-width-1-1" src={product03} alt="img-gallery" data-uk-cover title="product" /></a></li>
                                                        <li data-uk-slideshow-item="2"><a href="/#"><img className="uk-width-1-1" src={product04} alt="img-gallery" data-uk-cover title="product" /></a></li>
                                                        <li data-uk-slideshow-item="3"><a href="/#"><img className="uk-width-1-1" src={milkprod1} alt="img-gallery" data-uk-cover title="product" /></a></li>
                                                        <li data-uk-slideshow-item="4"><a href="/#"><img className="uk-width-1-1" src={milkprod2} alt="img-gallery" data-uk-cover title="product" /></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="page-product__list-info">
                                            <div className="product-list-info">
                                                <div>
                                                    <div className="product-list-info-item"><img className="product-list-info-item__img" src={brand2} alt="icon-list-info" title="icon" />
                                                        <div className="product-list-info-item__title">Model year</div>
                                                        <div className="product-list-info-item__value">2021</div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="product-list-info-item"><img className="product-list-info-item__img" src={brand2} alt="icon-list-info" title="icon" />
                                                        <div className="product-list-info-item__title">Category</div>
                                                        <div className="product-list-info-item__value">Sports</div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="product-list-info-item"><img className="product-list-info-item__img" src={brand2} alt="icon-list-info" title="icon" />
                                                        <div className="product-list-info-item__title">Make</div>
                                                        <div className="product-list-info-item__value">BMW</div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="product-list-info-item"><img className="product-list-info-item__img" src={brand2} alt="icon-list-info" title="icon" />
                                                        <div className="product-list-info-item__title">Engine Power</div>
                                                        <div className="product-list-info-item__value">205 hp</div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="product-list-info-item"><img className="product-list-info-item__img" src={brand2} alt="icon-list-info" title="icon" />
                                                        <div className="product-list-info-item__title">Top Speed</div>
                                                        <div className="product-list-info-item__value">125+ mph</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="uk-margin-medium" />
                                        <h2>Motorcycle Overview</h2>
                                        <p>Dolore magna aliqua quis nostrud exercitation ullamco laboris nisi ut aliquip ex consequat. Duis aute irure dolor in reprehenderit in voluptate velits esd se cilum dol sed ipsum nulla pariatur nostrul done elit magna. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolor magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                        <p>Allamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderits voluptaty velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatate.</p>
                                        <hr className="uk-margin-medium" />
                                        <h2>Technical Specifications</h2>
                                        <div className="page-product__specifications">
                                            <ul className="product-specifications">
                                                <li className="product-specifications-item">
                                                    <div className="product-specifications-item__icon"><img src={brand2} alt="color" /></div>
                                                    <div className="product-specifications-item__desc">
                                                        <div className="product-specifications-item__title">Color</div>
                                                        <div className="product-specifications-item__value">Black \ Red </div>
                                                    </div>
                                                </li>
                                                <li className="product-specifications-item">
                                                    <div className="product-specifications-item__icon"><img src={brand2} alt="Bore/Stroke" /></div>
                                                    <div className="product-specifications-item__desc">
                                                        <div className="product-specifications-item__title">Bore/Stroke</div>
                                                        <div className="product-specifications-item__value">80mm / 49.7mm</div>
                                                    </div>
                                                </li>
                                                <li className="product-specifications-item">
                                                    <div className="product-specifications-item__icon"><img src={brand2} alt="Category" /></div>
                                                    <div className="product-specifications-item__desc">
                                                        <div className="product-specifications-item__title">Category</div>
                                                        <div className="product-specifications-item__value">Super Sports</div>
                                                    </div>
                                                </li>
                                                <li className="product-specifications-item">
                                                    <div className="product-specifications-item__icon"><img src={brand2} alt="Top Speed" /></div>
                                                    <div className="product-specifications-item__desc">
                                                        <div className="product-specifications-item__title">Top Speed</div>
                                                        <div className="product-specifications-item__value">Over 125 mph</div>
                                                    </div>
                                                </li>
                                                <li className="product-specifications-item">
                                                    <div className="product-specifications-item__icon"><img src={brand2} alt="Fuel Economy" /></div>
                                                    <div className="product-specifications-item__desc">
                                                        <div className="product-specifications-item__title">Fuel Economy</div>
                                                        <div className="product-specifications-item__value">37 mpg (WMTC)</div>
                                                    </div>
                                                </li>
                                                <li className="product-specifications-item">
                                                    <div className="product-specifications-item__icon"><img src={brand2} alt="Fuel Type" /></div>
                                                    <div className="product-specifications-item__desc">
                                                        <div className="product-specifications-item__title">Fuel Type</div>
                                                        <div className="product-specifications-item__value">Premium Unleaded</div>
                                                    </div>
                                                </li>
                                                <li className="product-specifications-item">
                                                    <div className="product-specifications-item__icon"><img src={brand2} alt="Engine type" /></div>
                                                    <div className="product-specifications-item__desc">
                                                        <div className="product-specifications-item__title">Engine type</div>
                                                        <div className="product-specifications-item__value">4-Stroke in-line 4-Cylinder ...</div>
                                                    </div>
                                                </li>
                                                <li className="product-specifications-item">
                                                    <div className="product-specifications-item__icon"><img src={brand2} alt="Engine Power / Torque" /></div>
                                                    <div className="product-specifications-item__desc">
                                                        <div className="product-specifications-item__title">Engine Power / Torque</div>
                                                        <div className="product-specifications-item__value">205hp (151 kW) / 83 lb-ft ...</div>
                                                    </div>
                                                </li>
                                                <li className="product-specifications-item">
                                                    <div className="product-specifications-item__icon"><img src={brand2} alt="Displacement" /></div>
                                                    <div className="product-specifications-item__desc">
                                                        <div className="product-specifications-item__title">Displacement</div>
                                                        <div className="product-specifications-item__value">999 cc</div>
                                                    </div>
                                                </li>
                                                <li className="product-specifications-item">
                                                    <div className="product-specifications-item__icon"><img src={brand2} alt="Elecrtic Alternator" /></div>
                                                    <div className="product-specifications-item__desc">
                                                        <div className="product-specifications-item__title">Elecrtic Alternator</div>
                                                        <div className="product-specifications-item__value">Full Three-Phase 450 W ...</div>
                                                    </div>
                                                </li>
                                                <li className="product-specifications-item">
                                                    <div className="product-specifications-item__icon"><img src={brand2} alt="Payload Capacity" /></div>
                                                    <div className="product-specifications-item__desc">
                                                        <div className="product-specifications-item__title">Payload Capacity</div>
                                                        <div className="product-specifications-item__value">463 lbs (210 kg)</div>
                                                    </div>
                                                </li>
                                                <li className="product-specifications-item">
                                                    <div className="product-specifications-item__icon"><img src={brand2} alt="Battery" /></div>
                                                    <div className="product-specifications-item__desc">
                                                        <div className="product-specifications-item__title">Battery</div>
                                                        <div className="product-specifications-item__value">12 V / 8 Ah</div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <hr className="uk-margin-medium" />
                                        <h2>Additional Options & Features</h2>
                                        <p>Ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididuntu labore dolor magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Allamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderits voluptaty velit esse cillum.</p>
                                        <ul className="list-check uk-column-1-2@m">
                                            <li>Designed for the pole position</li>
                                            <li>Power to turn signals, brake lights</li>
                                            <li>With the M carbon wheels with a 0.5 disc</li>
                                            <li>Pioneer superbikes: the 6.5" TFT display</li>
                                            <li>RR is your perfect partner in performance</li>
                                            <li>Always ready for the racing track</li>
                                            <li>For lights all integrated into one unit</li>
                                            <li>Wheels with a 1.0 mm thicker brakes</li>
                                            <li>For better rides reliable partner</li>
                                            <li>Maximum support energy-saving ergonomics</li>
                                        </ul>

                                    </div>
                                    <div className="uk-width-1-3@m">
                                        <div className="product-block-info">
                                            <div className="product-block-info__logos"><img src={brand2} alt="user-logo" /><img src={brand2} alt="user-logo" /></div>
                                            <div className="product-block-info__user user">
                                                <div className="user__avatar"><img src={brand2} alt="Joesph Hill" /></div>
                                                <div className="user__desc">
                                                    <div className="user__name">Joesph Hill</div>
                                                    <div className="user__date">Member Since April 2013</div>
                                                    <div className="user__social">
                                                        <ul className="social-list">
                                                            <li className="social-list__item"><a className="social-list__link" href="/#"><i className="fab fa-twitter"></i></a></li>
                                                            <li className="social-list__item"><a className="social-list__link" href="/#"><i className="fab fa-facebook-f"></i></a></li>
                                                            <li className="social-list__item"><a className="social-list__link" href="/#"><i className="fab fa-google-plus-g"></i></a></li>
                                                            <li className="social-list__item"><a className="social-list__link" href="/#"><i className="fab fa-linkedin-in"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-block-info__email block-icon">
                                                <div className="block-icon__icon"><img src={brand2} alt="comment" /></div>
                                                <div className="block-icon__desc">
                                                    <div className="block-icon__title">Contact Via Email</div>
                                                    <div className="block-icon__value"><a href="mailto:joseph.hill@domain.com">joseph.hill@domain.com</a></div>
                                                </div>
                                            </div>
                                            <div className="product-block-info__phone block-icon">
                                                <div className="block-icon__icon"><img src={brand2} alt="smartphone" /></div>
                                                <div className="block-icon__desc">
                                                    <div className="block-icon__title">Contact Via Mob</div>
                                                    <div className="block-icon__value"><a href="tel:12584037960">+1 (258) 403 7960</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="related-products">
                            <div className="uk-section uk-container">
                                <div className="uk-h2 uk-margin-medium-bottom">You May Also Like...</div>
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
                                                        <div className="uk-transition-fade" onClick={(e) => addProduct(e, product)}>
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
                                                    <div className="add-favorite-block">
                                                        <div onClick={(e)=> favoritemode(e)}>
                                                            Add to Favorite <AiOutlineHeart className="default-mode" /><AiFillHeart className="mode-on"/>
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

export default ProductInner;