import React from "react";
import product04 from '../assets/img/product04.jpg';
import Subscribe from '../components/Subscribe/Subscribe';
import blacklogo from '../assets/img/logo-black.png';

const Contacts = () => {
    return (
        <>
            <main className="page-main">
                <div className="contacts_container">
                    <div className="section-hero">
                        <div className="section-hero__bg">
                            <div className="uk-container">
                                <div className="section-hero__content">
                                    <div className="section-hero__title"> <span>Taking rides to a newer level</span>
                                        <div className="uk-h1">Contact us</div>
                                    </div>
                                    <div className="section-hero__breadcrumb">
                                        <ul className="uk-breadcrumb">
                                            <li><a href="/#">Home</a></li>
                                            <li><span>Contact us</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-map"> <iframe title="map-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3076.515310719304!2d-75.04652368429473!3d39.54798681593648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c72c312084a583%3A0xede8aadeaa53ed5f!2zNDIyNyBMYWtlIFJkLCBOZXdmaWVsZCwgTkogMDgzNDQsINCh0KjQkA!5e0!3m2!1sru!2sua!4v1608717865402!5m2!1sru!2sua"></iframe></div>
                   
                    <div className="page-content">
                        <div className="uk-section-large uk-container">
                            <div className="contact-info">
                                <div className="contact-info-title">get in touch with us for buying or selling motorcycles. Also you can <br/> take a test drive latest models from almost all brands. </div>
                                <div className="uk-grid uk-grid-divider uk-child-width-1-4@m uk-child-width-1-2@s" data-uk-grid>
                                    <div>
                                        <div className="contact-info-item">
                                            <div className="contact-info-item__icon"> <img src={product04} title="icon" alt="contact-icon" /></div>
                                            <div className="contact-info-item__title">Schedule A Ride</div>
                                            <div className="contact-info-item__value"> <a href="tel:17108796054">+1 (710) 879 6054</a></div>
                                            <div className="contact-info-item__title">Buying or Selling</div>
                                            <div className="contact-info-item__value"> <a href="tel:08004564040">0 (800) 456 4040</a></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="contact-info-item">
                                            <div className="contact-info-item__icon"><img  src={product04} title="icon" alt="contact-icon" /></div>
                                            <div className="contact-info-item__title">Operating Hours</div>
                                            <div className="contact-info-item__value">Mon - Fri 9.30am - 8pm</div>
                                            <div className="contact-info-item__title">Operating Hours</div>
                                            <div className="contact-info-item__value">Sat - Sun 10am - 7pm</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="contact-info-item">
                                            <div className="contact-info-item__icon"><img  src={product04} title="icon" alt="contact-icon" /></div>
                                            <div className="contact-info-item__title">Reach us by email</div>
                                            <div className="contact-info-item__value"> <a href="mailto:dealers@keymoto.com">dealers@keymoto.com</a></div>
                                            <div className="contact-info-item__title">Customer Service</div>
                                            <div className="contact-info-item__value"> <a href="mailto:m.cycle@domain.com">m.cycle@domain.com</a></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="contact-info-item">
                                            <div className="contact-info-item__icon"><img  src={product04} title="icon" alt="contact-icon" /></div>
                                            <div className="contact-info-item__title">Showroom Address</div>
                                            <div className="contact-info-item__value">4227 Lake Road, Surf<br /> City, New Jersey<br /> 36026 - USA</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="contact-form">
                                    <div className="section-title uk-text-center"><img  src={blacklogo} title="icon" alt="" /><span>Taking rides to a newer level</span>
                                        <h3 className="uk-h2">send a message</h3>
                                    </div>
                                    <div className="section-content">
                                        <form action="#!">
                                            <div className="uk-grid uk-grid-small uk-child-width-1-3@s" data-uk-grid>
                                                <div><input className="uk-input uk-form-large" type="text" placeholder="Your Name" /></div>
                                                <div><input className="uk-input uk-form-large" type="text" placeholder="Email" /></div>
                                                <div><input className="uk-input uk-form-large" type="text" placeholder="Subject" /></div>
                                                <div className="uk-width-1-1"><textarea className="uk-textarea uk-form-large" placeholder="Message"></textarea></div>
                                                <div className="uk-margin-medium-top uk-width-1-1 uk-text-center"><button className="uk-button uk-button-danger uk-button-large" type="submit">Send message</button></div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main >    
            <Subscribe />
        </>
    )
}

export default Contacts;