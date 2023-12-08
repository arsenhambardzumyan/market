import imglogo from '../../assets/img/logo.png';
import navLogo from '../../assets/img/icons/menu.svg';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import { Link } from "react-router-dom";
import { AiOutlineUser } from 'react-icons/ai';

const Header = ({ products }) => {

    let searchElem = document.getElementsByClassName('searchLink');
    let rightMenuBtn = document.getElementsByClassName('offConvassRight');
    let shoppingCart = document.getElementsByClassName('offConvassCart');

    UIkit.use(Icons);

    const offConvasShow = (e) => {
        e.preventDefault();
        UIkit.offcanvas(rightMenuBtn).show();
    }

    const offConvasCartShow = (e) => {
        e.preventDefault();
        UIkit.offcanvas(shoppingCart).show();
    }

    const offConvasHide = (e) => {
        e.preventDefault();
        UIkit.offcanvas(rightMenuBtn).hide();
    }

    const modalSearchShow = (e) => {
        e.preventDefault();
        UIkit.modal(searchElem).show();
    }

    const modalSearchClose = (e) => {
        e.preventDefault();
        UIkit.modal(searchElem).hide();
    }

    return (
        <header className="page-header page-header-transparent">
            <div className="page-header__inner">
                <div className="page-header__left">
                    <div className="logo">
                        <Link className="logo__link" to="/">
                            <div className="logo__icon"><img src={imglogo} alt="logo" /></div>
                        </Link>
                    </div>
                </div>
                <div className="page-header__center">
                    <nav className="page-nav" data-uk-navbar>
                        <ul className="uk-navbar-nav">
                            <li><Link to="brands">Brands</Link></li>
                            <li><Link to="new-arrival">New arrival</Link></li>
                            <li><Link to="hot-offer">Best sellers</Link></li>
                            <li><Link to="shop">Shop</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="page-header__right">
                    <a className="uk-navbar-toggle search-btn" href="#modal-search" data-uk-search-icon onClick={modalSearchShow}> </a>
                    <Link to="login" className="uk-navbar-toggle header-btn"> <AiOutlineUser size={30} /> </Link>
                    <a className="uk-navbar-toggle header-btn cart-btn" href="#/" onClick={offConvasCartShow}>
                        <div className="cart-btn__icon uk-icon" data-uk-icon="cart">
                            {products.length > 0 && (<span className="product-count cart-btn__count">{ products.length}</span>)}
                        </div>
                    </a>
                    <a className="uk-navbar-toggle menu-btn openRightMenubtn" onClick={offConvasShow} href="/#">
                        <img src={navLogo} alt="menu" />
                    </a>
                </div>
            </div>
            <div className="offcanvass offConvassRight" id="offcanvas" data-uk-offcanvas="flip: true; overlay: true;">
                <div className="uk-offcanvas-bar " >
                    <button className="uk-offcanvas-close" data-uk-close="" type="button" onClick={offConvasHide}></button>
                    <div className="uk-margin">
                        <div className="logo">
                            <a className="logo__link" href="#/">
                                <div className="logo__icon"><img src={imglogo} alt="img-logo" /></div>
                            </a>
                        </div>
                    </div>
                    <div className="uk-margin">
                        <ul className="uk-nav uk-nav-default uk-nav-parent-icon" data-uk-nav>
                            <li><Link to="brands">Brands</Link></li>
                            <li><Link to="new-arrival">New arrival</Link></li>
                            <li><Link to="hot-offer">Best sellers</Link></li>
                            <li><Link to="shop">Shop</Link></li>
                        </ul>
                    </div>
                    <div className="uk-margin-auto-top">
                        <div className="support"><a className="support__link" href="tel:13004905008">
                            <div className="support__icon"><i className="fas fa-headset"></i></div>
                            <div className="support__desc">
                                <div className="support__label">Talk with our support</div>
                                <div className="support__phone">+1 (300) 490 5008</div>
                            </div>
                        </a></div>
                    </div>
                </div>
            </div>
            <div className="uk-modal-full searchLink uk-modal" id="modal-search" data-uk-modal>
                <div className="uk-modal-dialog uk-flex uk-flex-center uk-flex-middle" data-uk-height-viewport>
                    <button className="uk-modal-close-full" type="button" data-uk-close onClick={modalSearchClose}></button>
                    <form className="uk-search uk-search-large">
                        <input className="uk-search-input uk-text-center" name="input-search" type="search" placeholder="Search..." autoFocus />
                    </form>
                </div>
            </div>
        </header>
    )
}

export default Header;
