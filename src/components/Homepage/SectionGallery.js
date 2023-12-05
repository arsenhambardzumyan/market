import React from "react";

import product04 from '../../assets/img/product04.jpg';
import product02 from '../../assets/img/product02.jpg';
import product03 from '../../assets/img/product03.jpg';
const SectionVideo = () => {
    return (
        <div className="section-gallery">
            <div className="uk-section uk-container uk-container-large">
                <div className="uk-grid uk-child-width-1-4@m uk-child-width-1-3@s" data-uk-grid data-uk-lightbox>
                    <div>
                        <div>
                            <a href={product04}>
                                <img className="uk-width-1-1" src={product04} alt="img-gallery" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <a href={product02}>
                                <img className="uk-width-1-1" src={product02} alt="img-gallery" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <a href={product03}>
                                <img className="uk-width-1-1" src={product03} alt="img-gallery" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <a href={product04}>
                                <img className="uk-width-1-1" src={product04} alt="img-gallery" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <a href={product02}>
                                <img className="uk-width-1-1" src={product02} alt="img-gallery" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <a href={product03}>
                                <img className="uk-width-1-1" src={product03} alt="img-gallery" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <a href={product04}>
                                <img className="uk-width-1-1" src={product04} alt="img-gallery" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <a href={product02}>
                                <img className="uk-width-1-1" src={product02} alt="img-gallery" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionVideo;
