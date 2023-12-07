import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrands } from "../redux/actions/brandsActions";
import { addToCart } from "../redux/actions/cartActions";
// import { Link } from 'react-router-dom';
import ProductsComponent from '../components/ProductsComponent';
import { Card, Placeholder } from 'react-bootstrap';
// import brand1 from '../assets/img/brand-1.png';
// import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import defaultImg from '../../src/assets/img/defaultImg.jpg';
import { FiGrid } from "react-icons/fi";
import { TfiViewList } from "react-icons/tfi";
import ReactPaginate from 'react-paginate';

const BrandsPage = () => {
    const dispatch = useDispatch();
    const brnadData = useSelector((state) => state.brands.brandsData.brands);
    const paginationData = useSelector((state) => state.brands.brandsData.pagination);
    const loaderData = useSelector((state) => state.brands.loading);
    const [isToggled, setIsToggled] = useState(false);
    const [listingLine, setlistingLine] = useState(3);
    // const [PriceRangevalues, setPriceValues] = useState([1250, 3800]);
    // const [MileageRangevalues, setMileageValues] = useState([700, 2800]);
    const [activeButton, setActiveButton] = useState('button2');
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(fetchBrands(page));
    }, [dispatch, page]);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    const toggleClass = () => {
        setIsToggled(!isToggled);
        if (isToggled) {
            setlistingLine(3)
        } else {
            setlistingLine(1)
        }
    };

    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
        toggleClass();
    };

    // const handlePriceValuesChange = (newValues) => {
    //     setPriceValues(newValues);
    // };

    // const handleMileageValuesChange = (newValues) => {
    //     setMileageValues(newValues);
    // };

    const handlePageChange = (eventNumber) => {
        let  pageNumber = eventNumber.selected + 1;

        const element = document.getElementById('products_container');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        if (
            pageNumber > 0 &&
            pageNumber <= 10 &&
            pageNumber !== page
        ) {
            setTimeout(() => {
                setPage(pageNumber);
            }, 700);
        }
    };

    if (!brnadData) {
        return <p>Loading...</p>;
    }

    const bannerImage = 'https://api.dev.itfabers.com/uploads/custom-images/default.jpg';

    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                <img src={bannerImage} alt="Banner" style={{ width: '100%', height: '500px', objectFit: 'cover', margin: '0 auto' }} />
            </div>

            <div className="uk-container listing_container uk-section-large " id="products_container">
                <div className="uk-grid" data-uk-grid>
                    {/* <div className="uk-width-1-3@m">
                        <div className="js-filter-more filter-more">
                            <div className="filter-more__desc">
                                <div className="uk-h4">Search options</div>
                                <span>Find your motorcycle</span>
                            </div>
                            <div className="filter-more__icon">
                                <img src={brand1} alt="logo" title="brand" />
                            </div>
                        </div>
                        <div className="uk-card category-line uk-card-body">
                            <h3 className="uk-card-title">Categories</h3>
                            <ul className="uk-list">
                                {brnadData.map((category, index) => (
                                    <li key={index}>
                                        <Link to={`/category/${category.slug}`} className="uk-link-reset">
                                            {category.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
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
                    </div> */}
                    <div className="uk-width-3-3@m">
                        <div className="sorting">
                            {/* <div className="sorting-left">
                                <div className="result-count">Your search returned <span>35</span> results.</div>
                            </div> */}
                            <div className="sorting-right">
                                {/* <select className="uk-select" name="orderby">
                                    <option value="popularity">Sort by popularity</option>
                                    <option value="rating">Sort by average rating</option>
                                    <option value="date">Sort by newness</option>
                                    <option value="price">Sort by price: low to high</option>
                                    <option value="price-desc">Sort by price: high to low</option>
                                </select> */}
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
                        <div className="products-items">
                            {loaderData ?
                                <div className={isToggled ? 'placeholder-line  uk-grid  uk-child-width-1-1@m uk-child-width-1-2@s placeholder-list brand_placeholder ' : ' brand_placeholder placeholder-list  uk-grid uk-child-width-1-3@m uk-child-width-1-3@s'}>
                                    <div className="product-container placeholder_container">
                                        <Card >
                                            <Card.Body>
                                                <Placeholder as={Card.Title} animation="glow">
                                                    <Placeholder xs={6} />
                                                </Placeholder>
                                                <Placeholder as={Card.Text} animation="glow">
                                                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                                    <Placeholder xs={6} /> <Placeholder xs={8} />
                                                </Placeholder>
                                            </Card.Body>
                                            <Card.Img variant="top" src={defaultImg} />
                                        </Card>
                                    </div>
                                    <div className="product-container placeholder_container">
                                        <Card  >
                                            <Card.Body>
                                                <Placeholder as={Card.Title} animation="glow">
                                                    <Placeholder xs={6} />
                                                </Placeholder>
                                                <Placeholder as={Card.Text} animation="glow">
                                                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                                    <Placeholder xs={6} /> <Placeholder xs={8} />
                                                </Placeholder>
                                            </Card.Body>
                                            <Card.Img variant="top" src={defaultImg} />
                                        </Card>
                                    </div>
                                    <div className="product-container placeholder_container">
                                        <Card  >
                                            <Card.Body>
                                                <Placeholder as={Card.Title} animation="glow">
                                                    <Placeholder xs={6} />
                                                </Placeholder>
                                                <Placeholder as={Card.Text} animation="glow">
                                                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                                    <Placeholder xs={6} /> <Placeholder xs={8} />
                                                </Placeholder>
                                            </Card.Body>
                                            <Card.Img variant="top" src={defaultImg} />
                                        </Card>
                                    </div>
                                </div>
                                :
                                <div className='uk-child-width-1-1@m uk-child-width-1-2@s product_listing'>
                                    <ProductsComponent
                                        title=""
                                        products={brnadData || []}
                                        pagination={true}
                                        template="shop"
                                        col={listingLine}
                                        addToCart={handleAddToCart}
                                    />
                                </div>
                            }
                        </div>
                        {/* {brnadData.length > 0 && (
                            <div className="uk-margin-large-top uk-text-center">
                                <ul className="uk-pagination uk-flex-center">
                                    <li>
                                        <a href="/#"
                                            onClick={(e) => {
                                                handlePageChange(e, page - 1)
                                            }}
                                            className={`arrow ${page === 1 ? "pagination__disabled" : ""}`}
                                        >
                                            <span data-uk-pagination-previous></span>
                                        </a>
                                    </li>
                                    {[...Array(Math.floor(10))].map((_, i) => (
                                        <li className={`page__number ${page === i + 1 ? "uk-active" : ""}`}
                                            key={i}
                                            onClick={(e) => handlePageChange(e, i + 1)}
                                        >
                                            <span>{i + 1}</span>
                                        </li>
                                    ))}
                                    <li>
                                        <a href="/#"
                                            onClick={(e) => {
                                                handlePageChange(e, page + 1)
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
                        )} */}
                            {brnadData.length > 0 && (
                            <ReactPaginate
                                breakLabel="..."
                                nextLabel=">"
                                activeClassName="uk-active"
                                onPageChange={(count) => {handlePageChange(count)}}
                                className="uk-pagination uk-flex-center"
                                // pageRangeDisplayed={paginationData.last_page}
                                pageCount={paginationData.last_page}
                                activeLinkClassName="uk-active"
                                previousLabel="<"
                                renderOnZeroPageCount={null}
                                previousLinkClassName="arrow"
                                nextLinkClassName="arrow"
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BrandsPage;
