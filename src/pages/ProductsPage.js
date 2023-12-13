import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/shopActions";
import { fetchFilter } from "../redux/actions/filterAction";

import { addToCart } from "../redux/actions/cartActions";
import ProductsComponent from '../components/ProductsComponent';
import { Card, Placeholder } from 'react-bootstrap';
import 'rc-slider/assets/index.css';
import defaultImg from '../../src/assets/img/defaultImg.jpg';
import { FiGrid } from "react-icons/fi";
import { TfiViewList } from "react-icons/tfi";
import ReactPaginate from 'react-paginate';
import Filter from "../components/Filter/Filter";
import { Circles } from  'react-loader-spinner'

const ProductsPage = () => {
    const dispatch = useDispatch();

    const productsData = useSelector((state) => state.shop.data.products);

    const paginationData = useSelector((state) => state.shop.data.pagination);
    const loaderData = useSelector((state) => state.shop.loading);

    const [isToggled, setIsToggled] = useState(false);
    const [listingLine, setlistingLine] = useState(2);



    const [activeButton, setActiveButton] = useState('button2');
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(fetchProducts(page));
    }, [dispatch, page]);

    const postFilterData = (filterData) =>{
      
        const PostData = {
            min_price : filterData.priceRangeValue[0],
            max_price : filterData.priceRangeValue[1],
            brand :  null,
            child_category :  null,
            sub_category : null,
            category : null
        }
        console.log(PostData);
        dispatch(fetchFilter(PostData));
    }

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

    if (!productsData) {
        return <div className="loader"><Circles
              height="80"
              width="80"
              color="#ff0000"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            /></div>;
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
                      <Filter postFilterData={postFilterData} />
                    </div>
                    <div className="uk-width-2-3@m">
                        <div className="sorting">
                            <div className="sorting-left">
                                {/* <div className="result-count">Your search returned <span>35</span> results.</div> */}
                            </div>
                            <div className="sorting-right">
                                {/*<select className="uk-select" name="orderby">
                                    <option value="popularity">Sort by popularity</option>
                                    <option value="rating">Sort by average rating</option>
                                    <option value="date">Sort by newness</option>
                                    <option value="price">Sort by price: low to high</option>
                                    <option value="price-desc">Sort by price: high to low</option>
                                </select>*/}
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
                        {productsData.length > 0 && (
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
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductsPage;
