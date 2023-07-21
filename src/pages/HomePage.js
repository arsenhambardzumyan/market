import React, { useRef, useState } from "react";
import product04 from '../assets/img/product04.jpg';
import product02 from '../assets/img/product02.jpg';
import product03 from '../assets/img/product03.jpg';
import milkprod1 from '../assets/img/milkprod1.jpg';
import milkprod2 from '../assets/img/milkprod2.jpg';
import milkprod3 from '../assets/img/milkprod3.jpg';
import milkprod4 from '../assets/img/milkprod4.jpg';
import milkprod5 from '../assets/img/milkprod5.jpg';
import brand1 from '../assets/img/brand-1.png';
import brand2 from '../assets/img/brand-2.png';
import brand3 from '../assets/img/brand-3.png';
import brand4 from '../assets/img/brand-4.png';
import brand5 from '../assets/img/brand-5.png';
import araratprod1 from '../assets/img/araratprod1.jpg';
import MainSlider from '../components/MainSlider/MainSlider';
import Subscribe from '../components/Subscribe/Subscribe';
import { FiCheck } from "react-icons/fi";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { AiOutlinePauseCircle } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import video from '../assets/video/energy_video.mp4';
import { Link } from "react-router-dom";

const HomePage = ({ addProductToCart, products }) => {

    let productListEl = useRef(null);
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const handlePlayPause = () => {
        const video = videoRef.current;
        if (video.paused) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    React.useEffect(() => {
        let localList;
        if(localStorage.getItem("shopping-cart")!= null){
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

    return (
        <>
            <MainSlider />
            <div className="section-about" id="section-about">
                <div className="uk-section-large uk-container">
                    <div className="uk-grid uk-grid-collapse" data-uk-grid>
                        <div className="uk-width-1-3@m section-about-first"><div className="section-about__img"></div></div>
                        <div className="uk-width-2-3@m">
                            <div className="section-about__content">
                                <div className="section-title"> <span>Taking rides to a newer level</span>
                                    <h3 className="uk-h2">Great performance<br /> that matters in future</h3>
                                </div>
                                <div className="section-content">
                                    <p>
                                        Dolore magna aliqua quis nostrud exercitation ullamco laboris nisi ut aliquip exa comads consequat
                                        asuis aute irure dolor in reprehenderit in voluptate velit esse cilum dolore fugiat sed ipsum nulla
                                        pariatur nostrul done elit magna.
                                    </p>
                                    <div className="uk-margin-medium">
                                        <div className="uk-grid uk-child-width-1-2@s" data-uk-grid>
                                            <div>
                                                <div className="block-icon">
                                                    <div className="block-icon__icon"><img className="block-icon__img" src={brand1} alt="icon-about" /></div>
                                                    <div className="block-icon__desc">
                                                        <div className="block-icon__title">Cutting Edge Tech</div>
                                                        <div className="block-icon__text">Exercitation ullamco laboris nis exa duis aute irure dolor.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="block-icon">
                                                    <div className="block-icon__icon"><img className="block-icon__img" src={brand2} alt="icon-about" /></div>
                                                    <div className="block-icon__desc">
                                                        <div className="block-icon__title">Perfect Styling</div>
                                                        <div className="block-icon__text">Exercitation ullamco laboris nis exa duis aute irure dolor.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="block-icon">
                                                    <div className="block-icon__icon"><img className="block-icon__img" src={brand3} alt="icon-about" /></div>
                                                    <div className="block-icon__desc">
                                                        <div className="block-icon__title">Distinctive Beauty</div>
                                                        <div className="block-icon__text">Exercitation ullamco laboris nis exa duis aute irure dolor.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="block-icon">
                                                    <div className="block-icon__icon"><img className="block-icon__img" src={brand4} alt="icon-about" /></div>
                                                    <div className="block-icon__desc">
                                                        <div className="block-icon__title">Radiance Polishing </div>
                                                        <div className="block-icon__text">Exercitation ullamco laboris nis exa duis aute irure dolor.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section-about__gallery">
                                        <div className="uk-grid uk-grid-small uk-child-width-1-2@s" data-uk-grid>
                                            <div><img className="uk-width-1-1" src={product03} alt="about-gallery" /></div>
                                            <div><img className="uk-width-1-1" src={product04} alt="about-gallery" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-category" id="section-category">
                <div className="uk-container uk-container-large">
                    <div className="uk-position-relative" tabIndex="-1" data-uk-slider>
                        <ul className="uk-slider-items uk-grid uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-child-width-1-5@xl">
                            <li>
                                <div className="category-item">
                                    <a className="category-item__link" href="/#">
                                        <div className="category-item__title"> <strong>Roadster</strong><span>Explore type</span></div>
                                        <div className="category-item__icon"> <img src={milkprod1} data-uk-svg alt="product" title="" /> </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="category-item">
                                    <a className="category-item__link" href="/#">
                                        <div className="category-item__title"> <strong>Sportbike</strong><span>Explore type</span></div>
                                        <div className="category-item__icon"> <img src={milkprod2} data-uk-svg alt="product" title="" /></div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="category-item">
                                    <a className="category-item__link" href="/#">
                                        <div className="category-item__title"> <strong>Chopper</strong><span>Explore type</span></div>
                                        <div className="category-item__icon"><img src={milkprod3} data-uk-svg alt="product" title="" /></div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="category-item">
                                    <a className="category-item__link" href="/#">
                                        <div className="category-item__title"> <strong>Cruiser</strong><span>Explore type</span></div>
                                        <div className="category-item__icon"><img src={milkprod4} data-uk-svg alt="product" title="" /></div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="category-item">
                                    <a className="category-item__link" href="/#">
                                        <div className="category-item__title"> <strong>Touring bike</strong><span>Explore type</span></div>
                                        <div className="category-item__icon"><img src={milkprod5} data-uk-svg alt="product" title="" /></div>
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin-top"></ul>
                    </div>
                </div>
            </div>
            <div className="section-products">
                <div className="uk-section-large uk-container">
                    <div className="section-title uk-text-center">
                        <img src={product02} alt="" title="" /><span>Taking rides to a newer level</span>
                        <h3 className="uk-h2">Choose a motorcycle</h3>
                    </div>
                    <div className="section-content">
                        <div className="uk-text-center uk-margin-medium-bottom">
                            <p>Dolore magna aliqua quis nostrud exercitation ullamco laboris nisi ut aliquip exa comds<br /> consequat
                                duis aute irure dolor repreh enderit in voluptate velit esse cilum.</p>
                        </div>
                        <div className="uk-grid uk-grid-medium uk-child-width-1-3@l uk-child-width-1-2@s product_listing" data-uk-grid ref={productListEl}>
                            {products.map((product) => (
                                <div key={product.id} id={product.id} >
                                    <Link to="/product-inner" className="product-item uk-transition-toggle" >
                                        <div className="product-item__head">
                                            <div>
                                                <div className="product-item__name"><span >{product.name}</span></div>
                                                <div className="product-item__manufacturer">{product.description}</div>
                                            </div>
                                            <div>
                                                <div className="product-item__price"> ${product.price}</div>
                                            </div>
                                        </div>
                                        <div className="product-item__media uk-inline-clip uk-inline">
                                            <img src={product.image} alt={product.image} title="product" />
                                            <div className="uk-transition-fade"  onClick={(e) => addProduct(e, product)}>
                                                <div className="uk-overlay-cover uk-overlay-primary"></div>
                                                <FiCheck className="checked_icon uk-position-center " size={60} />
                                                <div className="uk-position-center"><span className="icon-cross"></span></div>
                                            </div>
                                            <button className="product-item__whish btn-whish"><i className="far fa-heart"></i></button></div>
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
                                </div>))}
                        </div>
                        <div className="uk-text-center uk-margin-medium-top">
                            <a className="uk-button uk-button-danger mg-center" href="/#">View all models</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-info">
                <div className="uk-container uk-container-expand">
                    <div className="uk-grid uk-flex-middle uk-child-width-1-2@m" data-uk-grid>
                        <div><img className="section-info__img" src={araratprod1} alt="img-info" title="" /></div>
                        <div>
                            <div className="section-info__content">
                                <div className="section-title"> <span>Taking rides to a newer level </span>
                                    <h3 className="uk-h2">A step above with<br /> rider-friendly nature</h3>
                                </div>
                                <div className="section-content">
                                    <p>Dolore magna aliqua quis nostrud exercitation ullamco laboris nisi ut aliquip ex consequat. Duis
                                        aute irure dolor in reprehenderit in voluptate velit esse cilum dol sed ipsum nulla pariatur nostrul
                                        done elit magna.</p>
                                    <div className="uk-margin-medium-top">
                                        <div className="uk-grid uk-grid-small uk-child-width-1-3@l uk-child-width-1-2@m uk-child-width-1-3@s"
                                            data-uk-grid>
                                            <div>
                                                <div className="block-icon">
                                                    <div className="block-icon__icon"><img className="block-icon__img" src={product03} alt="icon-info" title="" /></div>
                                                    <div className="block-icon__desc">
                                                        <div className="block-icon__title">Easy To Book for rentals</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="block-icon">
                                                    <div className="block-icon__icon"><img className="block-icon__img" src={product04} alt="icon-info" /></div>
                                                    <div className="block-icon__desc">
                                                        <div className="block-icon__title">Longer rides for All day</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="block-icon">
                                                    <div className="block-icon__icon"><img className="block-icon__img" src={product03} alt="icon-info" title="" /></div>
                                                    <div className="block-icon__desc">
                                                        <div className="block-icon__title">Get mileage Unlimited</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-video">
                <div className="video-block">
                    <div className="video-info">
                        <div className="video-info__title">The Powerful performance<br /> With optimized balanced </div>
                        <div className="video-info__subtitle">Adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore.
                        </div>
                        <div className="video-info__list-thumb">
                            <ul>
                                <li><img src={product04} title="" alt="img-video-thumb" /></li>
                                <li><img src={product02} title="" alt="img-video-thumb" /></li>
                                <li><img src={product03} title="" alt="img-video-thumb" /></li>
                            </ul>
                        </div>  
                    </div>
                    <div className="video-box" data-uk-lightbox="video-autoplay: true">
                        <video ref={videoRef} className="video_inner_container" width="100%" height="100%" loop muted uk-video="autoplay: true" poster="../assets/img/product04.jpg" >
                            <source src={video} type="video/MP4" />
                        </video>
                        <button className="btn-play-toggle" onClick={handlePlayPause}>
                            {isPlaying ? <AiOutlinePauseCircle/>: <AiOutlinePlayCircle />}
                        </button>
                    </div>
                </div>
            </div>
            <div className="section-rental">
                <div className="uk-section uk-container">
                    <div className="section-title uk-text-center"><img src={product02} alt="" title="" /><span>Taking rides to a newer level</span>
                        <h3 className="uk-h2">Motorcycles on rent</h3>
                    </div>
                    <div className="section-content">
                        <div className="uk-text-center uk-margin-medium-bottom">
                            <p>Dolore magna aliqua quis nostrud exercitation ullamco laboris nisi ut aliquip exa comds<br /> consequat
                                duis aute irure dolor repreh enderit in voluptate velit esse cilum.</p>
                        </div>
                        <div data-uk-slider="autoplay:true">
                            <div className="uk-position-relative" tabIndex="-1">
                                <ul className="uk-slider-items uk-child-width-1-1">
                                    <li>
                                        <div className="rental-item">
                                            <div className="uk-grid uk-grid-small uk-flex-middle" data-uk-grid>
                                                <div className="uk-width-3-5@m uk-flex-last@m">
                                                    <div className="rental-item__img"><img src={product04} alt="Ducati X Diavel S" title="" />
                                                    </div>
                                                </div>
                                                <div className="uk-width-2-5@m uk-flex-first@m">
                                                    <div className="rental-item__desc">
                                                        <div className="rental-item__title">2021 Ducati X Diavel S<br /> - Glossy Black</div>
                                                        <div className="rental-item__price">
                                                            <div className="label">Rent for as low as</div>
                                                            <div className="price">$35</div>
                                                            <div className="value"> <span>per </span><span>day</span></div>
                                                        </div>
                                                        <div className="rental-item__text">Meet the new Ducati - A beauty with high speed excitement
                                                            cruiser control, best of both worlds & sporty power.</div>
                                                        <div className="rental-item__specifications">
                                                            <ul className="specifications-list">
                                                                <li className="specifications-list-item">
                                                                    <div className="specifications-list-item__icon">
                                                                        <img src={product02} alt="Engine type" title="" /></div>
                                                                    <div className="specifications-list-item__desc">
                                                                        <div className="specifications-list-item__title">Color</div>
                                                                        <div className="specifications-list-item__value">Black </div>
                                                                    </div>
                                                                </li>
                                                                <li className="specifications-list-item">
                                                                    <div className="specifications-list-item__icon">
                                                                        <img src={product02} alt="Engine type" title="" /></div>
                                                                    <div className="specifications-list-item__desc">
                                                                        <div className="specifications-list-item__title">Color</div>
                                                                        <div className="specifications-list-item__value">Black </div>
                                                                    </div>
                                                                </li>
                                                                <li className="specifications-list-item">
                                                                    <div className="specifications-list-item__icon">
                                                                        <img src={product02} alt="Engine type" title="" /></div>
                                                                    <div className="specifications-list-item__desc">
                                                                        <div className="specifications-list-item__title">Color</div>
                                                                        <div className="specifications-list-item__value">Black </div>
                                                                    </div>
                                                                </li>
                                                                <li className="specifications-list-item">
                                                                    <div className="specifications-list-item__icon">
                                                                        <img src={product02} alt="Engine type" title="" /></div>
                                                                    <div className="specifications-list-item__desc">
                                                                        <div className="specifications-list-item__title">Color</div>
                                                                        <div className="specifications-list-item__value">Black </div>
                                                                    </div>
                                                                </li>
                                                                <li className="specifications-list-item">
                                                                    <div className="specifications-list-item__icon">
                                                                        <img src={product02} alt="Engine type" title="" /></div>
                                                                    <div className="specifications-list-item__desc">
                                                                        <div className="specifications-list-item__title">Color</div>
                                                                        <div className="specifications-list-item__value">Black </div>
                                                                    </div>
                                                                </li>
                                                                <li className="specifications-list-item">
                                                                    <div className="specifications-list-item__icon">
                                                                        <img src={product02} alt="Engine type" title="" /></div>
                                                                    <div className="specifications-list-item__desc">
                                                                        <div className="specifications-list-item__title">Color</div>
                                                                        <div className="specifications-list-item__value">Black </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="rental-item">
                                            <div className="uk-grid uk-grid-small uk-flex-middle" data-uk-grid>
                                                <div className="uk-width-3-5@m uk-flex-last@m">
                                                    <div className="rental-item__img"><img src={product04} alt="Ducati X Diavel S" title="" />
                                                    </div>
                                                </div>
                                                <div className="uk-width-2-5@m uk-flex-first@m">
                                                    <div className="rental-item__desc">
                                                        <div className="rental-item__title">2021 Ducati X Diavel S<br /> - Glossy Black</div>
                                                        <div className="rental-item__price">
                                                            <div className="label">Rent for as low as</div>
                                                            <div className="price">$35</div>
                                                            <div className="value"> <span>per </span><span>day</span></div>
                                                        </div>
                                                        <div className="rental-item__text">Meet the new Ducati - A beauty with high speed excitement
                                                            cruiser control, best of both worlds & sporty power.</div>
                                                        <div className="rental-item__specifications">
                                                            <ul className="specifications-list">
                                                                <li className="specifications-list-item">
                                                                    <div className="specifications-list-item__icon">
                                                                        <img src={product02} alt="Engine type" title="" /></div>
                                                                    <div className="specifications-list-item__desc">
                                                                        <div className="specifications-list-item__title">Color</div>
                                                                        <div className="specifications-list-item__value">Black </div>
                                                                    </div>
                                                                </li>
                                                                <li className="specifications-list-item">
                                                                    <div className="specifications-list-item__icon">
                                                                        <img src={product02} alt="Engine type" title="" /></div>
                                                                    <div className="specifications-list-item__desc">
                                                                        <div className="specifications-list-item__title">Color</div>
                                                                        <div className="specifications-list-item__value">Black </div>
                                                                    </div>
                                                                </li>
                                                                <li className="specifications-list-item">
                                                                    <div className="specifications-list-item__icon">
                                                                        <img src={product02} alt="Engine type" title="" /></div>
                                                                    <div className="specifications-list-item__desc">
                                                                        <div className="specifications-list-item__title">Color</div>
                                                                        <div className="specifications-list-item__value">Black </div>
                                                                    </div>
                                                                </li>
                                                                <li className="specifications-list-item">
                                                                    <div className="specifications-list-item__icon">
                                                                        <img src={product02} alt="Engine type" title="" /></div>
                                                                    <div className="specifications-list-item__desc">
                                                                        <div className="specifications-list-item__title">Color</div>
                                                                        <div className="specifications-list-item__value">Black </div>
                                                                    </div>
                                                                </li>
                                                                <li className="specifications-list-item">
                                                                    <div className="specifications-list-item__icon">
                                                                        <img src={product02} alt="Engine type" title="" /></div>
                                                                    <div className="specifications-list-item__desc">
                                                                        <div className="specifications-list-item__title">Color</div>
                                                                        <div className="specifications-list-item__value">Black </div>
                                                                    </div>
                                                                </li>
                                                                <li className="specifications-list-item">
                                                                    <div className="specifications-list-item__icon">
                                                                        <img src={product02} alt="Engine type" title="" /></div>
                                                                    <div className="specifications-list-item__desc">
                                                                        <div className="specifications-list-item__title">Color</div>
                                                                        <div className="specifications-list-item__value">Black </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="rental-item">
                                            <div className="uk-grid uk-grid-small uk-flex-middle" data-uk-grid>
                                                <div className="uk-width-3-5@m uk-flex-last@m">
                                                    <div className="rental-item__img"><img src={product04} alt="Ducati X Diavel S" title="" />
                                                    </div>
                                                </div>
                                                <div className="uk-width-2-5@m uk-flex-first@m">
                                                    <div className="rental-item__desc">
                                                        <div className="rental-item__title">2021 Ducati X Diavel S<br /> - Glossy Black</div>
                                                        <div className="rental-item__price">
                                                            <div className="label">Rent for as low as</div>
                                                            <div className="price">$35</div>
                                                            <div className="value"> <span>per </span><span>day</span></div>
                                                        </div>
                                                        <div className="rental-item__text">Meet the new Ducati - A beauty with high speed excitement
                                                            cruiser control, best of both worlds & sporty power.</div>
                                                        <div className="rental-item__specifications">
                                                            <ul className="specifications-list">
                                                                <li className="specifications-list-item">
                                                                    <div className="specifications-list-item__icon">
                                                                        <img src={product02} alt="Engine type" title="" /></div>
                                                                    <div className="specifications-list-item__desc">
                                                                        <div className="specifications-list-item__title">Color</div>
                                                                        <div className="specifications-list-item__value">Black </div>
                                                                    </div>
                                                                </li>
                                                                <li className="specifications-list-item">
                                                                    <div className="specifications-list-item__icon">
                                                                        <img src={product02} alt="Engine type" title="" /></div>
                                                                    <div className="specifications-list-item__desc">
                                                                        <div className="specifications-list-item__title">Color</div>
                                                                        <div className="specifications-list-item__value">Black </div>
                                                                    </div>
                                                                </li>
                                                                <li className="specifications-list-item">
                                                                    <div className="specifications-list-item__icon">
                                                                        <img src={product02} alt="Engine type" title="" /></div>
                                                                    <div className="specifications-list-item__desc">
                                                                        <div className="specifications-list-item__title">Color</div>
                                                                        <div className="specifications-list-item__value">Black </div>
                                                                    </div>
                                                                </li>
                                                                <li className="specifications-list-item">
                                                                    <div className="specifications-list-item__icon">
                                                                        <img src={product02} alt="Engine type" title="" /></div>
                                                                    <div className="specifications-list-item__desc">
                                                                        <div className="specifications-list-item__title">Color</div>
                                                                        <div className="specifications-list-item__value">Black </div>
                                                                    </div>
                                                                </li>
                                                                <li className="specifications-list-item">
                                                                    <div className="specifications-list-item__icon">
                                                                        <img src={product02} alt="Engine type" title="" /></div>
                                                                    <div className="specifications-list-item__desc">
                                                                        <div className="specifications-list-item__title">Color</div>
                                                                        <div className="specifications-list-item__value">Black </div>
                                                                    </div>
                                                                </li>
                                                                <li className="specifications-list-item">
                                                                    <div className="specifications-list-item__icon">
                                                                        <img src={product02} alt="Engine type" title="" /></div>
                                                                    <div className="specifications-list-item__desc">
                                                                        <div className="specifications-list-item__title">Color</div>
                                                                        <div className="specifications-list-item__value">Black </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="slider-nav"><a href="/#" data-uk-slidenav-previous data-uk-slider-item="previous"> </a>
                                <div className="slider-nav__count">
                                    <ul>
                                        <li data-uk-slider-item="0"><span>1</span></li>
                                        <li data-uk-slider-item="1"><span>2</span></li>
                                        <li data-uk-slider-item="2"><span>3</span></li>
                                    </ul><span>/ 3</span>
                                </div><a href="/#" data-uk-slidenav-next data-uk-slider-item="next"> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-gallery">
                <div className="uk-section uk-container uk-container-large">
                    <div className="uk-grid uk-child-width-1-4@m uk-child-width-1-3@s" data-uk-grid data-uk-lightbox>
                        <div>
                            <div>
                                <a href="/#">
                                    <img className="uk-width-1-1" src={product04} alt="img-gallery" />
                                </a>
                            </div>
                        </div>
                        <div>
                            <div>
                                <a href="/#">
                                    <img className="uk-width-1-1" src={product02} alt="img-gallery" />
                                </a>
                            </div>
                        </div>
                        <div>
                            <div>
                                <a href="/#">
                                    <img className="uk-width-1-1" src={product03} alt="img-gallery" />
                                </a>
                            </div>
                        </div>
                        <div>
                            <div>
                                <a href="/#">
                                    <img className="uk-width-1-1" src={product04} alt="img-gallery" />
                                </a>
                            </div>
                        </div>
                        <div>
                            <div>
                                <a href="/#">
                                    <img className="uk-width-1-1" src={product02} alt="img-gallery" />
                                </a>
                            </div>
                        </div>
                        <div>
                            <div>
                                <a href="/#">
                                    <img className="uk-width-1-1" src={product03} alt="img-gallery" />
                                </a>
                            </div>
                        </div>
                        <div>
                            <div>
                                <a href="/#">
                                    <img className="uk-width-1-1" src={product04} alt="img-gallery" />
                                </a>
                            </div>
                        </div>
                        <div>
                            <div>
                                <a href="/#">
                                    <img className="uk-width-1-1" src={product02} alt="img-gallery" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-reviews">
                <div className="uk-section uk-container uk-container-large">
                    <div className="uk-grid uk-grid-collapse uk-flex-middle uk-child-width-1-2@m" data-uk-grid>
                        <div className="uk-text-center"> <img src={milkprod3} alt="img-reviews" title="" /></div>
                        <div>
                            <div className="section-title"> <span>Taking rides to a newer level</span>
                                <div className="uk-h2">Why people are <br /> talking about us</div>
                            </div>
                            <div className="section-content">
                                <div className="reviews-vertical">
                                    <div data-uk-slider="autoplay:true">
                                        <div className="uk-position-relative" tabIndex="-1">
                                            <ul className="uk-slider-items uk-grid uk-child-width-1-1">
                                                <li>
                                                    <div className="review-item">
                                                        <div className="review-item__desc">
                                                            <p>Magna aliqua quis nostrud exercitation ullamco laboris nisut aliqua yxa consequat duis
                                                                aute irure dolor iny reprehenderit voluptate velit esse cilum dols sed ipsum nulla
                                                                pariatur nostrul doney quis nostrud saercitation ullamco laboris nisi ut aliquip
                                                                reprehenderit.
                                                            </p>
                                                        </div>
                                                        <div className="review-item__user">
                                                            <div>
                                                                <div className="review-item__user-avatar"><img src={product03} alt="John Martin" title="" /></div>
                                                            </div>
                                                            <div>
                                                                <div className="review-item__user-name">John Martin</div>
                                                                <div className="review-item__user-position">KTM Motorcycle Buyer</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="review-item">
                                                        <div className="review-item__desc">
                                                            <p>Magna aliqua quis nostrud exercitation ullamco laboris nisut aliqua yxa consequat duis
                                                                aute irure dolor iny reprehenderit voluptate velit esse cilum dols sed ipsum nulla
                                                                pariatur nostrul doney quis nostrud saercitation ullamco laboris nisi ut aliquip
                                                                reprehenderit.
                                                            </p>
                                                        </div>
                                                        <div className="review-item__user">
                                                            <div>
                                                                <div className="review-item__user-avatar"><img src={product03} alt="John Martin" title="" /></div>
                                                            </div>
                                                            <div>
                                                                <div className="review-item__user-name">John Martin</div>
                                                                <div className="review-item__user-position">KTM Motorcycle Buyer</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="review-item">
                                                        <div className="review-item__desc">
                                                            <p>Magna aliqua quis nostrud exercitation ullamco laboris nisut aliqua yxa consequat duis
                                                                aute irure dolor iny reprehenderit voluptate velit esse cilum dols sed ipsum nulla
                                                                pariatur nostrul doney quis nostrud saercitation ullamco laboris nisi ut aliquip
                                                                reprehenderit.
                                                            </p>
                                                        </div>
                                                        <div className="review-item__user">
                                                            <div>
                                                                <div className="review-item__user-avatar"><img src={product03} alt="John Martin" title="" /></div>
                                                            </div>
                                                            <div>
                                                                <div className="review-item__user-name">John Martin</div>
                                                                <div className="review-item__user-position">KTM Motorcycle Buyer</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <ul className="uk-slider-nav uk-dotnav uk-dotnav-vertical"></ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-brands">
                <div className="uk-section uk-container uk-container-large">
                    <div data-uk-slider="autoplay:true">
                        <div className="uk-position-relative" tabIndex="-1">
                            <ul
                                className="uk-slider-items uk-grid uk-flex-middle uk-text-center uk-child-width-1-1 uk-child-width-1-3@s uk-child-width-1-5@m">
                                <li><img src={brand1} alt="brand-logo" title="" /></li>
                                <li><img src={brand2} alt="brand-logo" title="" /></li>
                                <li><img src={brand3} alt="brand-logo" title="" /></li>
                                <li><img src={brand4} alt="brand-logo" title="" /></li>
                                <li><img src={brand5} alt="brand-logo" title="" /></li>
                            </ul>
                        </div>
                        <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
                    </div>
                </div>
            </div>
            <Subscribe />
        </>
    )
}

export default HomePage;