import imglogo from '../../assets/img/logo.png';
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/css/uikit-core.min.css";
import product03 from '../../assets/img/product03.jpg';
import product02 from '../../assets/img/product02.jpg';
import product04 from '../../assets/img/product04.jpg';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

const Footer = () => {
    UIkit.use(Icons);

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
                                <p>Dolore magna aliq quis nostrud ulamco laboris nisi ut aliquip exa comads conseq asuis aute irure dolor reprehenderit.</p>
                            </div>
                            <div className="uk-margin-medium">
                                <div className="support">
                                    <a className="support__link" href="tel:13004905008">
                                        <div className="support__icon"><i className="fas fa-headset"></i></div>
                                        <div className="support__desc">
                                            <div className="support__label">Talk with our support</div>
                                            <div className="support__phone">+1 (300) 490 5008</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="uk-margin-medium">
                                <div className="social">
                                    <ul className="social-list">
                                        <li className="social-list__item"><a className="social-list__link" href="/#!"><i className="fab fa-twitter"></i></a></li>
                                        <li className="social-list__item"><a className="social-list__link" href="/#!"><i className="fab fa-facebook-f"></i></a></li>
                                        <li className="social-list__item"><a className="social-list__link" href="/#!"><i className="fab fa-google-plus-g"></i></a></li>
                                        <li className="social-list__item"><a className="social-list__link" href="/#!"><i className="fab fa-youtube"></i></a></li>
                                        <li className="social-list__item"><a className="social-list__link" href="/#!"><i className="fab fa-pinterest-p"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="page-footer__column page-footer__menu">
                                <div className="uk-h4">About KeyMoto</div>
                                <ul className="list-decor">
                                    <li> <a href="/#">Our Company</a></li>
                                    <li> <a href="/#">Renting Facility</a></li>
                                    <li> <a href="/#">KeyMoto Inventory</a></li>
                                    <li> <a href="/#">Our Services</a></li>
                                    <li> <a href="/#">Clients Testimonials</a></li>
                                    <li> <a href="/#">Mission & Vision</a></li>
                                    <li> <a href="/#">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="page-footer__column page-footer__news">
                                <div className="uk-h4">Latest News</div>
                                <ul className="latest-news-list">
                                    <li>
                                        <div className="latest-news-item">
                                            <div className="latest-news-item__thumb"><img src={product02} alt="news-thumb" /></div>
                                            <div className="latest-news-item__info"><a className="latest-news-item__title" href="/#">We Allow Each Rider To Customize Their Rides.</a>
                                                <div className="latest-news-item__date">August 25, 2021</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="latest-news-item">
                                            <div className="latest-news-item__thumb"><img src={product03} alt="news-thumb" /></div>
                                            <div className="latest-news-item__info"><a className="latest-news-item__title" href="/#">Motorcycles Which Feels Just Right Like Ease.</a>
                                                <div className="latest-news-item__date">August 25, 2021</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="latest-news-item">
                                            <div className="latest-news-item__thumb"><img src={product04} alt="news-thumb" /></div>
                                            <div className="latest-news-item__info"><a className="latest-news-item__title" href="/#">Gaze Upon Unbelievably Exciting To Futuristic.</a>
                                                <div className="latest-news-item__date">August 25, 2021</div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="page-footer__column page-footer__info">
                                <div className="uk-h4">Dealer Information</div>
                                <ul className="info-list">
                                    <li>
                                        <div className="info-list-item">
                                            <div className="info-list-item__title">Sales Hours</div>
                                            <div className="info-list-item__value">Monday - Friday: <br /> 09:00 am to 06:00 pm</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="info-list-item">
                                            <div className="info-list-item__title">Service Hours</div>
                                            <div className="info-list-item__value">Monday - Friday: <br /> 09:00 am to 06:00 pm</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="info-list-item">
                                            <div className="info-list-item__title">Parts Shop Hours</div>
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
            <div className="uk-modal-full uk-modal" id="modal-search" data-uk-modal>
                <div className="uk-modal-dialog uk-flex uk-flex-center uk-flex-middle" data-uk-height-viewport><button className="uk-modal-close-full" type="button" data-uk-close></button>
                    <form className="uk-search uk-search-large"><input className="uk-search-input uk-text-center" type="search" placeholder="Search..." autoFocus /></form>
                </div>
            </div>
        </footer>
    )
}

export default Footer;