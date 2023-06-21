import imglogo from '../../assets/img/logo.png';
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/css/uikit-core.min.css";
import "uikit/dist/js/uikit.min.js";

const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="page-footer__top">
                <div className="uk-container">
                    <div className="uk-grid uk-grid-small uk-child-width-1-4@l uk-child-width-1-2@s" data-uk-grid>
                        <div>
                            <div className="uk-margin-medium">
                                <div className="logo"><a className="logo__link" href="index.html">
                                    <div className="logo__icon"><img src={imglogo} alt="KeyMoto" /></div>
                                </a></div>
                            </div>
                            <div className="uk-margin-medium">
                                <p>Dolore magna aliq quis nostrud ulamco laboris nisi ut aliquip exa comads conseq asuis aute irure dolor reprehenderit.</p>
                            </div>
                            <div className="uk-margin-medium">
                                <div className="support"><a className="support__link" href="tel:13004905008">
                                    <div className="support__icon"><i className="fas fa-headset"></i></div>
                                    <div className="support__desc">
                                        <div className="support__label">Talk with our support</div>
                                        <div className="support__phone">+1 (300) 490 5008</div>
                                    </div>
                                </a></div>
                            </div>
                            <div className="uk-margin-medium">
                                <div className="social">
                                    <ul className="social-list">
                                        <li className="social-list__item"><a className="social-list__link" href="#!"><i className="fab fa-twitter"></i></a></li>
                                        <li className="social-list__item"><a className="social-list__link" href="#!"><i className="fab fa-facebook-f"></i></a></li>
                                        <li className="social-list__item"><a className="social-list__link" href="#!"><i className="fab fa-google-plus-g"></i></a></li>
                                        <li className="social-list__item"><a className="social-list__link" href="#!"><i className="fab fa-youtube"></i></a></li>
                                        <li className="social-list__item"><a className="social-list__link" href="#!"><i className="fab fa-pinterest-p"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="page-footer__column page-footer__menu">
                                <div className="uk-h4">About KeyMoto</div>
                                <ul className="list-decor">
                                    <li> <a href="typography.html">Our Company</a></li>
                                    <li> <a href="typography.html">Renting Facility</a></li>
                                    <li> <a href="typography.html">KeyMoto Inventory</a></li>
                                    <li> <a href="typography.html">Our Services</a></li>
                                    <li> <a href="typography.html">Clients Testimonials</a></li>
                                    <li> <a href="typography.html">Mission & Vision</a></li>
                                    <li> <a href="page-contacts.html">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="page-footer__column page-footer__news">
                                <div className="uk-h4">Latest News</div>
                                <ul className="latest-news-list">
                                    <li>
                                        <div className="latest-news-item">
                                            <div className="latest-news-item__thumb"><img src="assets/img/news-thumb-1.jpg" alt="news-thumb" /></div>
                                            <div className="latest-news-item__info"><a className="latest-news-item__title" href="page-blog-article.html">We Allow Each Rider To Customize Their Rides.</a>
                                                <div className="latest-news-item__date">August 25, 2021</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="latest-news-item">
                                            <div className="latest-news-item__thumb"><img src="assets/img/news-thumb-2.jpg" alt="news-thumb" /></div>
                                            <div className="latest-news-item__info"><a className="latest-news-item__title" href="page-blog-article.html">Motorcycles Which Feels Just Right Like Ease.</a>
                                                <div className="latest-news-item__date">August 25, 2021</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="latest-news-item">
                                            <div className="latest-news-item__thumb"><img src="assets/img/news-thumb-3.jpg" alt="news-thumb" /></div>
                                            <div className="latest-news-item__info"><a className="latest-news-item__title" href="page-blog-article.html">Gaze Upon Unbelievably Exciting To Futuristic.</a>
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
                    <div className="uk-text-center">(c) 2022 KEYMOTO - Motorcycles Dealer Template. All rights reserved.</div>
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