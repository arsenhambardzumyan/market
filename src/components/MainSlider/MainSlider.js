import React from 'react';
import {Link} from "react-router-dom";

const MainSlider = (data) => {
    return (
        <div className="section-hero">
            <div data-uk-slideshow="autoplay: false; min-height: 560; max-height: 950; animation: fade">
                <div className="uk-position-relative" tabIndex="-1">
                    <ul className="uk-slideshow-items">
                        {data.slides.map((slider, index) => (
                            <li key={index} className="slideshow-item">
                                <img src={slider.image} alt="slideImagee" data-uk-cover />
                                <div className="uk-position-center uk-position-small">
                                    <div className="uk-container">
                                        <div className="uk-grid" data-uk-grid>
                                            <div className="uk-width-3-5@m">
                                                <div className="slideshow-item__content">
                                                    <div className="slideshow-item__title" data-uk-slideshow-parallax="x: 100,-100">
                                                        <span>{slider.badge}</span>
                                                        <div className="uk-h2">{slider.title}</div>
                                                    </div>
                                                    <div className="slideshow-item__desc" data-uk-slideshow-parallax="x: 200,-200">
                                                        <p>{slider.description}</p>
                                                    </div>
                                                    <div className="slideshow-item__btns" data-uk-slideshow-parallax="x: 300,-300">
                                                        <Link to={`/product/${slider.product_slug}`} className="uk-button uk-button-danger">Learn more </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="uk-width-2-5@m uk-visible@l"></div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="slideshow-nav">
                    <a href="/#" data-uk-slidenav-previous data-uk-slideshow-item="previous"> </a>
                    <div className="slideshow-nav__count">
                        <ul>
                        {data.slides.map((slider, index) => (
                          <li key={index} data-uk-slideshow-item={index}><span>{index+1} </span></li>
                        ))}
                        </ul>
                        <span>/{data.slides.length}</span>
                    </div>
                    <a href="/#" data-uk-slidenav-next data-uk-slideshow-item="next"> </a>
                </div>
            </div>
        </div>
    )
}

export default MainSlider;
