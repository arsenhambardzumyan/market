import React, { useState, useEffect } from 'react';
import request from "../helpers/request";

const Partners = () => {

    const [partnersList, setPartners] = useState([]);

    useEffect(() => {
        request(`https://api.dev.itfabers.com/api/partners`)
            .then((partners) => {
                setPartners(partners.partners);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    return (
        <div className="section-brands">
            <div className="uk-section uk-container uk-container-large">
                <div data-uk-slider="autoplay:true" className='uk-slider'>
                    <div className="uk-position-relative" tabIndex="-1">
                        <ul className="uk-slider-items uk-grid uk-flex-middle uk-text-center uk-child-width-1-1 uk-child-width-1-3@s uk-child-width-1-5@m">
                            {partnersList.map((slider, index) => (
                                <li key={index}>
                                    <img src={`https://api.dev.itfabers.com/`+slider.image} alt='patyner' />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
                </div>
            </div>
        </div>
    )
}

export default Partners;