import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiCheck } from 'react-icons/fi';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { addToCart } from '../redux/actions/cartActions';
import defaultImg from '../../src/assets/img/defaultImg.jpg';

const ProductsComponent = ({ title, description, products, pagination, template,   col, addProductToCart }) => {

    let productListEl = useRef(null);

    const [isToggled, setIsToggled] = useState(false);

    const toggleClass = () => {
        setIsToggled(!isToggled);
    };


    const favoritemode = (e) => {
        e.preventDefault();
        e.currentTarget.classList.add('favorite-mode-on');
    };

    const addProduct = (e, product) => {
        e.preventDefault();
        addProductToCart(product);
        if (!e.currentTarget.parentElement.parentElement.parentElement.classList.contains('product-added')) {
            e.currentTarget.parentElement.parentElement.parentElement.classList.add('product-added');
        }
    };
    return (
        <>
            <div className="uk-section uk-container">
                <div className="section-title uk-text-center">
                    <h3 className="uk-h2">{title}</h3>
                </div>
                <div className="uk-text-center uk-margin-medium-bottom">
                    <p>Dolore magna aliqua quis nostrud exercitation ullamco laboris nisi ut aliquip exa comds<br /> consequat
                        duis aute irure dolor repreh enderit in voluptate velit esse cilum.</p>
                </div>
                <div className={isToggled ? `uk-grid uk-grid-medium uk-child-width-1-1@m uk-child-width-1-${col}@s product_listing` : `uk-grid uk-grid-medium uk-child-width-1-${col}@m uk-child-width-1-2@s product_listing`} data-uk-grid ref={productListEl}>
                    {products && Object.keys(products).length !== 0 ?
                        products.map((product, index) => (
                            <div key={index} id={product.id} className="product-container" >
                                <Link to={`/product/${product.slug}`} className={isToggled ? 'product-item uk-transition-toggle product-item--list' : ' product-item uk-transition-toggle '}>
                                    <div className="product-item__head">
                                        <div>
                                            <div className="product-item__name"><span>{product.name}</span></div>
                                            <div className="product-item__manufacturer">{product.shortDescription}</div>
                                        </div>
                                        <div>
                                            <div className="product-item__price">{product.price} AMD</div>
                                        </div>
                                    </div>
                                    <div className="product-item__media uk-inline-clip uk-inline">
                                        <img src={product.image !==null ? `${product.image}` : `${defaultImg}`} alt="productImage" title="product" />
                                        <div className="uk-transition-fade" onClick={(e) => addProduct(e, product)}>
                                            <div className="uk-overlay-cover uk-overlay-primary"></div>
                                            <FiCheck className="checked_icon uk-position-center " size={60} />
                                            <div className="uk-position-center"><span className="icon-cross"></span></div>
                                        </div>
                                        <button className="product-item__whish btn-whish"><i className="far fa-heart"><AiOutlineHeart /></i></button></div>
                                    <div className="product-item__info">
                                        {/* <ul className="list-info">
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
                        </ul> */}
                                        <div className='product_description'>{product.seoDescription}</div>

                                    </div>
                                    {/* <div className="product-item__specifications">
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
                    </div>  */}
                                    <div className="add-favorite-block">
                                        <div onClick={(e) => favoritemode(e)}>
                                            Add to Favorite <AiOutlineHeart className="default-mode" /><AiFillHeart className="mode-on" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                        : <p>No products available</p>}
                </div>
            </div>
        </>
    );
};

// mapStateToProps is used to get the state from Redux store and map it to component props
const mapStateToProps = (state) => ({
    cartProducts: state.products, // Make sure this matches your actual Redux state structure
});

// mapDispatchToProps is used to dispatch actions to the Redux store
const mapDispatchToProps = (dispatch) => ({
    addProductToCart: (product) => dispatch(addToCart(product)),
});

// Connect the component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(ProductsComponent);
