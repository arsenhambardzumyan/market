// import UIkit from 'uikit';
// import Icons from 'uikit/dist/js/uikit-icons';
import brand1 from '../assets/img/brand-1.png';
// import IonRangeSlider from 'react-ion-slider';

// import React, { useRef, useState } from "react";

const ProductListing = () => {
    // let rangeEl = useRef(null);

    // rangeEl.current.IonRangeSlider({
    //     type: "double",
    //     min: 0,
    //     max: 1000,
    //     from: 200,
    //     to: 500,
    //     grid: true
    // });
    // UIkit.use(Icons);

    return (
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
                                        <li><a href="/">Home</a></li>
                                        <li><span>Inventory</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="page-content">
                    <div class="uk-section-large uk-container">
                        <div class="uk-grid" data-uk-grid>
                            <div class="uk-width-1-3@m">
                                <div class="js-filter-more filter-more">
                                    <div class="filter-more__desc">
                                        <div class="uk-h4">Search options</div>
                                        <span>Find your motorcycle</span>
                                    </div>
                                    <div class="filter-more__icon">
                                        <img src={brand1} alt="logo" title="brand" />
                                    </div>
                                </div>
                                <aside class="sidebar js-filter-content">
                                    <div class="widjet widjet--filters">
                                        <div class="widjet__content">
                                            <div class="uk-grid uk-grid-small uk-child-width-1-2" data-uk-grid>
                                                <div class="uk-width-1-1">
                                                    <select class="uk-select uk-form-large" name="make">
                                                        <option value="">Select Make</option>
                                                        <option value="option-1">option-1</option>
                                                        <option value="option-2">option-2</option>
                                                    </select>
                                                </div>
                                                <div class="uk-width-1-1">
                                                    <select class="uk-select uk-form-large" name="model">
                                                        <option value="">Select Model</option>
                                                        <option value="option-1">option-1</option>
                                                        <option value="option-2">option-2</option>
                                                    </select>
                                                </div>
                                                <div class="uk-width-1-1">
                                                    <select class="uk-select uk-form-large" name="type">
                                                        <option value="">Select type</option>
                                                        <option value="option-1">option-1</option>
                                                        <option value="option-2">option-2</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <select class="uk-select uk-form-large" name="min">
                                                        <option value="">Min CC</option>
                                                        <option value="option-1">option-1</option>
                                                        <option value="option-2">option-2</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <select class="uk-select uk-form-large" name="max">
                                                        <option value="">Max CC</option>
                                                        <option value="option-1">option-1</option>
                                                        <option value="option-2">option-2</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="widjet widjet--price">
                                        <div class="widjet__title">
                                            <div class="uk-h4">Price range</div>
                                            <span>Choose your price</span>
                                        </div>
                                        <div class="widjet__content">
                                            <div class="range-box">
                                                {/* <input type="text" class="js-range-slider"  ref={rangeEl} name="my_range" value="" /> */}
                                                {/* <IonRangeSlider /> */}
                                                <div class="range-box__desc">
                                                    <span>KM Range Selected: $</span>
                                                    <input id="range-price-from" type="text" />
                                                    <span>-</span>
                                                    <input id="range-price-to" type="text" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="widjet widjet--mileage">
                                        <div class="widjet__title">
                                            <div class="uk-h4">mileage range</div>
                                            <span>Choose required mileage</span>
                                        </div>
                                        <div class="widjet__content">
                                            <div class="range-box">
                                                <input class="js-range-slider" id="range-mileage" type="text" name="mileage" value="" />
                                                <div class="range-box__desc">
                                                    <span>KM Range Selected: </span>
                                                    <input id="range-mileage-from" type="text" />
                                                    <span>- </span>
                                                    <input id="range-mileage-to" type="text" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="widjet">
                                        <div class="widjet__content">
                                            <div class="uk-text-center">
                                                <button class="uk-button uk-button-danger" type="button">Apply filter</button>
                                                <br />
                                                <a class="uk-text-meta uk-margin-top" href="#!">Clear All Filters</a>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                            <div class="uk-width-2-3@m">
                                <div class="sorting">
                                    <div class="sorting-left">
                                        <div class="result-count">Your search returned <span>35</span> results.</div>
                                    </div>
                                    <div class="sorting-right">
                                        <select class="uk-select" name="orderby">
                                            <option value="popularity">Sort by popularity</option>
                                            <option value="rating">Sort by average rating</option>
                                            <option value="date" selected>Sort by newness</option>
                                            <option value="price">Sort by price: low to high</option>
                                            <option value="price-desc">Sort by price: high to low</option>
                                        </select>
                                        <button class="sorting-btn btn-list" type="button">
                                            <img src={brand1} alt="list" data-uk-svg />
                                        </button>
                                        <button class="sorting-btn btn-grid is-active" type="button">
                                            <img src={brand1} alt="grid" data-uk-svg />
                                        </button>
                                    </div>
                                </div>
                                <div class="products-items uk-grid uk-child-width-1-2@s" data-uk-grid>
                                    PRODUCTS
                                </div>
                                <div class="uk-margin-large-top uk-text-center">
                                    <ul class="uk-pagination uk-flex-center">
                                        <li><a href="/"><span data-uk-pagination-previous></span></a></li>
                                        <li class="uk-active"><span>1</span></li>
                                        <li><a href="/#">2</a></li>
                                        <li><a href="/#">3</a></li>
                                        <li><a href="/#">4</a></li>
                                        <li><a href="/#"><span data-uk-pagination-next></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default ProductListing;