import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrands } from "../redux/actions/brandsActions";
import { addToCart } from "../redux/actions/cartActions";
import ProductsComponent from '../components/ProductsComponent';
import { Card, Placeholder } from 'react-bootstrap';
import 'rc-slider/assets/index.css';
import defaultImg from '../../src/assets/img/defaultImg.jpg';
import ReactPaginate from 'react-paginate';
import { Circles } from 'react-loader-spinner'


const BrandsPage = () => {
    const dispatch = useDispatch();
    const brnadData = useSelector((state) => state.brands.brandsData.brands);
    const paginationData = useSelector((state) => state.brands.brandsData.pagination);
    const loaderData = useSelector((state) => state.brands.loading);
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(fetchBrands(page));
    }, [dispatch, page]);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
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

    if (!brnadData) {
        return (
            <div className="loader">
                <Circles
                    height="80"
                    width="80"
                    color="#ff0000"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
        )
    }

    const bannerImage = 'https://api.dev.itfabers.com/uploads/custom-images/default.jpg';

    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                <img src={bannerImage} alt="Banner" style={{ width: '100%', height: '500px', objectFit: 'cover', margin: '0 auto' }} />
            </div>

            <div className="uk-container listing_container uk-section-large " id="products_container">
                <div className="uk-grid" data-uk-grid>
                    <div className="uk-width-3-3@m">
                        <div className="products-items">
                            {loaderData ?
                                <div className={false ? 'placeholder-line  uk-grid  uk-child-width-1-1@m uk-child-width-1-2@s placeholder-list brand_placeholder ' : ' brand_placeholder placeholder-list  uk-grid uk-child-width-1-3@m uk-child-width-1-3@s'}>
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
                                        col={3}
                                        addToCart={handleAddToCart}
                                    />
                                </div>
                            }
                        </div>
                        {brnadData.length > 0 && (
                            <ReactPaginate
                                breakLabel="..."
                                nextLabel=">"
                                activeClassName="uk-active"
                                onPageChange={(count) => {handlePageChange(count)}}
                                className="uk-pagination uk-flex-center"
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
