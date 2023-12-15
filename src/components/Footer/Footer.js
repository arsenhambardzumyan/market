import React, { useEffect } from 'react';
import imglogo from '../../assets/img/logo.png';
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/css/uikit-core.min.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchfooter } from "../../redux/actions/footerActions";
import { Circles } from 'react-loader-spinner'

const Footer = () => {
    const dispatch = useDispatch();
    const filterStore = useSelector((state) => state.footer.footerData);

    useEffect(() => {
        dispatch(fetchfooter('data'));
    }, [dispatch])

    // console.log(filterStore);
    
    if (!filterStore.footer) {
        return (
            <div className="loader">
                {/* <Circles
                    height="80"
                    width="80"
                    color="#ff0000"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                /> */}
            </div>
        )
    }

    return (
        <footer className="page-footer">
            <div className="page-footer__top">
                <div className="uk-container">
                    <div className="uk-grid uk-grid-small uk-child-width-1-4@l uk-child-width-1-2@s" data-uk-grid>
                        <div>
                            <div className="uk-margin-medium">
                                <div className="logo">
                                    <a className="logo__link" href="/#">
                                        <span className="logo__icon">
                                            <img src={imglogo} alt="KeyMoto" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="uk-margin-medium">
                                <p>{filterStore.footer.about_us}</p>
                            </div>
                            <div className="uk-margin-medium">
                                <div className="support">
                                    <a className="support__link" href={`tel:${filterStore.footer.phone}`}>
                                        <div className="support__icon"><i className="fas fa-headset"></i></div>
                                        <div className="support__desc">
                                            <div className="support__label">Talk with our support</div>
                                            <div className="support__phone">{filterStore.footer.phone}</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* <div className="uk-margin-medium">
                                <div className="social">
                                    <ul className="social-list">
                                        <li className="social-list__item"><a className="social-list__link" href="/#!"><i className="fab fa-twitter"></i></a></li>
                                        <li className="social-list__item"><a className="social-list__link" href="/#!"><i className="fab fa-facebook-f"></i></a></li>
                                        <li className="social-list__item"><a className="social-list__link" href="/#!"><i className="fab fa-google-plus-g"></i></a></li>
                                        <li className="social-list__item"><a className="social-list__link" href="/#!"><i className="fab fa-youtube"></i></a></li>
                                        <li className="social-list__item"><a className="social-list__link" href="/#!"><i className="fab fa-pinterest-p"></i></a></li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                        <div>
                            <div className="page-footer__column page-footer__menu">
                                <div className="uk-h4">Main pages</div>
                                <ul className="list-decor">
                                    <li><Link to="brands">Brands</Link></li>
                                    <li><Link to="new-arrival">New arrival</Link></li>
                                    <li><Link to="hot-offer">Best sellers</Link></li>
                                    <li><Link to="shop">Shop</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="page-footer__column page-footer__news">
                                <div className="uk-h4">Latest News</div>
                                <ul className="latest-news-list">
                                    <li>
                                        <div className="latest-news-item">
                                            <div className="latest-news-item__thumb"><img src="https://api.dev.itfabers.com/uploads/custom-images/default.jpg" alt="news-thumb" /></div>
                                            <div className="latest-news-item__info"><a className="latest-news-item__title" href="/#">News1</a>
                                                <div className="latest-news-item__date">October 20, 2023</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="latest-news-item">
                                            <div className="latest-news-item__thumb"><img src="https://api.dev.itfabers.com/uploads/custom-images/default.jpg" alt="news-thumb" /></div>
                                            <div className="latest-news-item__info"><a className="latest-news-item__title" href="/#">News2</a>
                                                <div className="latest-news-item__date">October 20, 2023</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="latest-news-item">
                                            <div className="latest-news-item__thumb"><img src="https://api.dev.itfabers.com/uploads/custom-images/default.jpg" alt="news-thumb" /></div>
                                            <div className="latest-news-item__info"><a className="latest-news-item__title" href="/#">News3</a>
                                                <div className="latest-news-item__date">October 20, 2023</div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="page-footer__column page-footer__info">
                                <div className="uk-h4">Working Hours</div>
                                <ul className="info-list">
                                    <li>
                                        <div className="info-list-item">
                                            <div className="info-list-item__value">Monday - Friday: <br /> 09:00 am to 06:00 pm</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-footer__bottom">
                <div className="uk-container">
                    <div className="uk-text-center">(c) 2023 Black Market -  All rights reserved.</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
