import React, { useRef, useState , useCallback } from 'react';
import brand1 from '../assets/img/brand-1.png';
import Subscribe from '../components/Subscribe/Subscribe';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { FiCheck } from "react-icons/fi";
import product04 from '../assets/img/product04.jpg';
import product02 from '../assets/img/product02.jpg';
import product03 from '../assets/img/product03.jpg';
import { FiGrid } from "react-icons/fi";
import { TfiViewList } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import request from '../components/helpers/request';


const ProductListing = ({ addProductToCart, products , SetProductsListing }) => {

    let productListEl = useRef(null);
    const [isToggled, setIsToggled] = useState(false);
    const [activeButton, setActiveButton] = useState('button2');

    // const [PagesData, setPagesData] = useState({
    //     firstPage : 1,
    //     lastPage : 10,
    //     nextPage : 2,
    //     prevPage : 0,
    // });

    const [page, setPage] = useState(1);

    const toggleClass = () => {
        setIsToggled(!isToggled);
    };

    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
        toggleClass();
    };

    const [PriceRangevalues, setPriceValues] = useState([1250, 3800]);
    const [MileageRangevalues, setMileageValues] = useState([700, 2800]);

    const handlePriceValuesChange = (newValues) => {
        setPriceValues(newValues);
    };

    const handleMileageValuesChange = (newValues) => {
        setMileageValues(newValues);
    };

    const addProduct = (e, product) => {
        e.preventDefault();
        addProductToCart(product);
        if (!e.currentTarget.parentElement.parentElement.parentElement.classList.contains('product-added')) {
            e.currentTarget.parentElement.parentElement.parentElement.classList.add('product-added');
        }
    }

    const favoritemode = (e) => {
        e.preventDefault();
        e.currentTarget.classList.add('favorite-mode-on');
    }

    const SetCurrentProducts = useCallback((data) => {
        SetProductsListing(data);
    }, [SetProductsListing]);

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
        request(`https://api.dev.itfabers.com/api/all-products?page=${page}`)
        .then((response) => {
           SetCurrentProducts(response.products.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [page]);


    const handlePageChange = (pageNumber) => {
        if (
            pageNumber > 0 &&
            pageNumber <=  10 &&
            pageNumber !== page
        )
        setPage(pageNumber);
    };

    return (
        <>
            <main className="page-main">
                <div className="product_listing_section">
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
                                            <li><span>Inventory</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="page-content">
                        <div className="uk-section-large uk-container">
                            <div className="uk-grid" data-uk-grid>
                                <div className="uk-width-1-3@m">
                                    <div className="js-filter-more filter-more">
                                        <div className="filter-more__desc">
                                            <div className="uk-h4">Search options</div>
                                            <span>Find your motorcycle</span>
                                        </div>
                                        <div className="filter-more__icon">
                                            <img src={brand1} alt="logo" title="brand" />
                                        </div>
                                    </div>
                                    <aside className="sidebar js-filter-content">
                                        <div className="widjet widjet--filters">
                                            <div className="widjet__content">
                                                <div className="uk-grid uk-grid-small uk-child-width-1-2" data-uk-grid>
                                                    <div className="uk-width-1-1">
                                                        <select className="uk-select uk-form-large" name="make">
                                                            <option value="">Select Make</option>
                                                            <option value="option-1">option-1</option>
                                                            <option value="option-2">option-2</option>
                                                        </select>
                                                    </div>
                                                    <div className="uk-width-1-1">
                                                        <select className="uk-select uk-form-large" name="model">
                                                            <option value="">Select Model</option>
                                                            <option value="option-1">option-1</option>
                                                            <option value="option-2">option-2</option>
                                                        </select>
                                                    </div>
                                                    <div className="uk-width-1-1">
                                                        <select className="uk-select uk-form-large" name="type">
                                                            <option value="">Select type</option>
                                                            <option value="option-1">option-1</option>
                                                            <option value="option-2">option-2</option>
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <select className="uk-select uk-form-large" name="min">
                                                            <option value="">Min CC</option>
                                                            <option value="option-1">option-1</option>
                                                            <option value="option-2">option-2</option>
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <select className="uk-select uk-form-large" name="max">
                                                            <option value="">Max CC</option>
                                                            <option value="option-1">option-1</option>
                                                            <option value="option-2">option-2</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widjet widjet--price">
                                            <div className="widjet__title">
                                                <div className="uk-h4">Price range</div>
                                                <span>Choose your price</span>
                                            </div>
                                            <div className="widjet__content">
                                                <div className="range-box">
                                                    <Slider range
                                                        min={0}
                                                        max={5000}
                                                        value={PriceRangevalues}
                                                        onChange={handlePriceValuesChange}
                                                    />
                                                    <div className="range-box__desc">
                                                        <span>KM Range Selected: $</span>
                                                        <span className='rangeValueSpan'>{PriceRangevalues[0]}</span>
                                                        <span>-</span>
                                                        <span className='rangeValueSpan'>{PriceRangevalues[1]}</span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="widjet widjet--mileage">
                                            <div className="widjet__title">
                                                <div className="uk-h4">mileage range</div>
                                                <span>Choose required mileage</span>
                                            </div>
                                            <div className="widjet__content">
                                                <div className="range-box">
                                                    <Slider range
                                                        min={0}
                                                        max={5000}
                                                        value={MileageRangevalues}
                                                        onChange={handleMileageValuesChange}
                                                    />
                                                    <div className="range-box__desc">
                                                        <span>KM Range Selected: </span>
                                                        <span className='rangeValueSpan'>{MileageRangevalues[0]}</span>
                                                        <span>- </span>
                                                        <span className='rangeValueSpan'>{MileageRangevalues[1]}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widjet">
                                            <div className="widjet__content">
                                                <div className="uk-text-center">
                                                    <button className="uk-button mg-centerAll uk-button-danger" type="button">Apply filter</button>
                                                    <br />
                                                    <a className="uk-text-meta uk-margin-top" href="/#">Clear All Filters</a>
                                                </div>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                                <div className="uk-width-2-3@m">
                                    <div className="sorting">
                                        <div className="sorting-left">
                                            <div className="result-count">Your search returned <span>35</span> results.</div>
                                        </div>
                                        <div className="sorting-right">
                                            <select className="uk-select" name="orderby">
                                                <option value="popularity">Sort by popularity</option>
                                                <option value="rating">Sort by average rating</option>
                                                <option value="date">Sort by newness</option>
                                                <option value="price">Sort by price: low to high</option>
                                                <option value="price-desc">Sort by price: high to low</option>
                                            </select>
                                            <button className={activeButton === 'button1' ? 'sorting-btn active' : 'sorting-btn'}
                                                onClick={() => handleButtonClick('button1')} type="button">
                                                <TfiViewList size={20} />
                                            </button>
                                            <button className={activeButton === 'button2' ? 'sorting-btn active' : 'sorting-btn'}
                                                onClick={() => handleButtonClick('button2')} type="button">
                                                <FiGrid size={20} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="products-items uk-grid" data-uk-grid>
                                        <div className={isToggled ? 'uk-grid uk-grid-medium uk-child-width-1-1@m uk-child-width-1-2@s product_listing' : 'uk-grid uk-grid-medium uk-child-width-1-2@m uk-child-width-1-2@s product_listing'}
                                            data-uk-grid ref={productListEl}>
                                            {products.map((product) => (
                                                <div key={product.id} id={product.id} className="product-container" >
                                                    <Link to="/product-inner" className={isToggled ? 'product-item uk-transition-toggle product-item--list' : ' product-item uk-transition-toggle '}>
                                                        <div className="product-item__head">
                                                            <div>
                                                                <div className="product-item__name"><span>{product.name}</span></div>
                                                                <div className="product-item__manufacturer">{product.short_description}</div>
                                                            </div>
                                                            <div>
                                                                <div className="product-item__price"> ${product.price}</div>
                                                            </div>
                                                        </div>
                                                        <div className="product-item__media uk-inline-clip uk-inline">
                                                            <img src={`https://api.dev.itfabers.com/${product.thumb_image}`} alt={product.thumb_image} title="product" />
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
                                                            <div onClick={(e) => favoritemode(e)}>
                                                                Add to Favorite <AiOutlineHeart className="default-mode" /><AiFillHeart className="mode-on" />
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>))}
                                        </div>
                                    </div>
                                    {products.length > 0 && (
                                        <div className="uk-margin-large-top uk-text-center">
                                            <ul className="uk-pagination uk-flex-center">
                                                <li>
                                                    <a href="/#"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handlePageChange(page - 1)
                                                        }}
                                                        className={`arrow ${page === 1 ? "pagination__disabled" : ""}`}
                                                    >
                                                        <span data-uk-pagination-previous></span>
                                                    </a>
                                                </li>
                                                
                                                {[...Array(Math.floor(10))].map((_, i) => (
                                                    <li className={`page__number ${page === i + 1 ? "uk-active" : ""}`}
                                                        key={i + 1}
                                                        onClick={() => handlePageChange(i + 1)}
                                                    >
                                                        <span>{i + 1}</span>
                                                    </li>
                                                ))}

                                                <li>
                                                    <a href="/#"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handlePageChange(page + 1)
                                                        }}
                                                        className={`arrow ${page === Math.floor(10)
                                                        ? "pagination__disabled"
                                                        : ""
                                                        }`}
                                                    >
                                                        <span data-uk-pagination-next></span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
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

export default ProductListing;