import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import brand1 from '../../assets/img/brand-1.png';
import Slider from 'rc-slider';
import { useSelector } from "react-redux";


const Filter = ({postFilterData}) => {
    const categoriesData = useSelector((state) => state.shop.data.categories);
    const [filterData, setFilterData] = useState({
        categoryData: '',
        priceRangeValue: [100000, 500000],
    })

    const handlePriceValuesChange = (newValues) => {
        setFilterData({
            ...filterData,
            priceRangeValue: newValues
        });
    };

    const clearFilters = (e) => {
        e.preventDefault();
        setFilterData({
            ...filterData,
            categoryData: '',
            priceRangeValue: [5000, 1000000],
        });
    }

    const handleCategoryValue = (e) => {
        setFilterData({
            ...filterData,
            categoryData: e.target.value
        })
    }
    
    const handleApply = () => {
        postFilterData(filterData)
    }

    return (
        <>
            <div className="js-filter-more filter-more">
                <div className="filter-more__desc">
                    <div className="uk-h4">Categories</div>
                    {/*<span>Find your motorcycle</span>*/}
                </div>
                {/*<div className="filter-more__icon">
                    <img src={brand1} alt="logo" title="brand" />
                </div>*/}
            </div>
            <div className="uk-card category-line uk-card-body">
                <ul className="uk-list">
                    {categoriesData.map((category, index) => (
                        <li key={index}>
                            <Link to={`/category/${category.slug}`} className="uk-link-reset">
                                {category.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            {/*<div className="js-filter-more mt-3 filter-more">
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
                                <select value={filterData.categoryData} onChange={handleCategoryValue} className="uk-select uk-form-large" name="make">
                                    <option value="">Categories</option>
                                    {categoriesData.map((category, index) => (
                                        <option key={index * 1.1} value={`option-${index}`}>{category.name}</option>
                                    ))}
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
                                min={5000}
                                max={1000000}
                                value={filterData.priceRangeValue}
                                onChange={handlePriceValuesChange}
                            />
                            <div className="range-box__desc">
                                <span>Selected</span>
                                <span className='rangeValueSpan'>{filterData.priceRangeValue[0]}</span>
                                <span>-</span>
                                <span className='rangeValueSpan'>{filterData.priceRangeValue[1]}</span>
                                <span>֏</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="widjet">
                    <div className="widjet__content">
                        <div className="uk-text-center">
                            <button className="uk-button mg-centerAll uk-button-danger" type="button" onClick={handleApply}>Apply filter</button>
                            <br />
                            <a className="uk-text-meta uk-margin-top" href="/#" onClick={(e) => clearFilters(e)}>Clear All Filters</a>
                        </div>
                    </div>
                </div>
            </aside>*/}
        </>
    )
}

export default Filter;