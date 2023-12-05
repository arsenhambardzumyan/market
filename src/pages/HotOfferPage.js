import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/hotOfferActions";
import { addToCart } from "../redux/actions/cartActions";
// import { Link } from 'react-router-dom';
import ProductsComponent from '../components/ProductsComponent';
import { Card, Placeholder } from 'react-bootstrap';
import brand1 from '../assets/img/brand-1.png';
import 'rc-slider/assets/index.css';
import defaultImg from '../../src/assets/img/defaultImg.jpg';
import { FiGrid } from "react-icons/fi";
import { TfiViewList } from "react-icons/tfi";
// import ReactPaginate from 'react-paginate';

const HotOfferPage = () => {
    const dispatch = useDispatch();
    // const categoriesData = useSelector((state) => state.hotOffer.data.categories);
    const productsData = useSelector((state) => state.hotOffer.data.data);
    // const paginationData = useSelector((state) => state.hotOffer.data.pagination);
    const loaderData = useSelector((state) => state.hotOffer.loading);
    const [isToggled, setIsToggled] = useState(false);
    const [listingLine, setlistingLine] = useState(2);
    const [activeButton, setActiveButton] = useState('button2');
    const [page, setPage] = useState(1);
    
    useEffect(() => {
        setPage(1);
        dispatch(fetchProducts(page));
        // console.log(productsData , categoriesData);
    }, [dispatch, page]);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    const toggleClass = () => {
        setIsToggled(!isToggled);
        if (isToggled) {
            setlistingLine(2)
        } else {
            setlistingLine(1)
        }
    };

    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
        toggleClass();
    };

    // const handlePageChange = (eventNumber) => {
    //     let  pageNumber = eventNumber.selected + 1;
    //     const element = document.getElementById('products_container');
    //     if (element) {
    //         element.scrollIntoView({ behavior: 'smooth' });
    //     }
    //     if (
    //         pageNumber > 0 &&
    //         pageNumber <= 10 &&
    //         pageNumber !== page
    //     ) {
    //         setTimeout(() => {
    //             setPage(pageNumber);
    //         }, 700);
    //     }
    // };

    if (!productsData) {
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
                        <div className="uk-card category-line uk-card-body">
                            <h3 className="uk-card-title">Categories</h3>
                            <ul className="uk-list">
                                {/* {categoriesData.map((category, index) => (
                                    <li key={index}>
                                        <Link to={`/category/${category.slug}`} className="uk-link-reset">
                                            {category.name}
                                        </Link>
                                    </li>
                                ))} */}
                            </ul>
                        </div>
                    </div>
                    <div className="uk-width-2-3@m">
                        <div className="sorting">
                            <div className="sorting-left"></div>
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
                        <div className="products-items">
                            {loaderData ?
                                <div className={isToggled ? ' uk-grid uk-child-width-1-1@m uk-child-width-1-2@s placeholder_list  ' : '  uk-grid uk-child-width-1-2@m uk-child-width-1-2@s placeholder_list'}>
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
                                            <Card.Body className='card-body-bottom'>
                                                <Placeholder as={Card.Title} animation="glow">
                                                    <Placeholder xs={6} />
                                                </Placeholder>
                                                <Placeholder as={Card.Text} animation="glow">
                                                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                                    <Placeholder xs={6} /> <Placeholder xs={8} />
                                                </Placeholder>
                                                <Placeholder.Button variant="primary" xs={6} />
                                            </Card.Body>
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
                                            <Card.Body className='card-body-bottom'>
                                                <Placeholder as={Card.Title} animation="glow">
                                                    <Placeholder xs={6} />
                                                </Placeholder>
                                                <Placeholder as={Card.Text} animation="glow">
                                                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                                    <Placeholder xs={6} /> <Placeholder xs={8} />
                                                </Placeholder>
                                                <Placeholder.Button variant="primary" xs={6} />
                                            </Card.Body>
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
                                            <Card.Body className='card-body-bottom'>
                                                <Placeholder as={Card.Title} animation="glow">
                                                    <Placeholder xs={6} />
                                                </Placeholder>
                                                <Placeholder as={Card.Text} animation="glow">
                                                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                                    <Placeholder xs={6} /> <Placeholder xs={8} />
                                                </Placeholder>
                                                <Placeholder.Button variant="primary" xs={6} />
                                            </Card.Body>
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
                                            <Card.Body className='card-body-bottom'>
                                                <Placeholder as={Card.Title} animation="glow">
                                                    <Placeholder xs={6} />
                                                </Placeholder>
                                                <Placeholder as={Card.Text} animation="glow">
                                                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                                    <Placeholder xs={6} /> <Placeholder xs={8} />
                                                </Placeholder>
                                                <Placeholder.Button variant="primary" xs={6} />
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>
                                :
                                <div className='uk-child-width-1-1@m uk-child-width-1-2@s product_listing'>
                                    <ProductsComponent
                                        title=""
                                        products={productsData || []}
                                        pagination={true}
                                        template="shop"
                                        col={listingLine}
                                        addToCart={handleAddToCart}
                                    />
                                </div>
                            }
                        </div>
                        {/* {productsData.length > 0 && (
                            <ReactPaginate
                                breakLabel="..."
                                nextLabel=">"
                                activeClassName="uk-active"
                                onPageChange={(count) => {handlePageChange(count)}}
                                className="uk-pagination uk-flex-center"
                                pageRangeDisplayed={paginationData.last_page}
                                pageCount={paginationData.last_page}
                                activeLinkClassName="uk-active"
                                previousLabel="<"
                                renderOnZeroPageCount={null}
                                previousLinkClassName="arrow"
                                nextLinkClassName="arrow"
                            />
                        )} */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HotOfferPage;
