import React from "react";

import img1 from '../../assets/img/Computers 3baf6cda-4086-4e3f-9f23-d2823b5b7d57.png';
import img2 from '../../assets/img/TVs 239d07ff-336d-4748-9708-5469e15a7792.png';
import img3 from '../../assets/img/Refrigiraters a 5451faf5-2a24-4939-9a25-a8bf1d7256f2.png';
import img4 from '../../assets/img/Headphones 125898fd-58b5-47d5-9a8d-d551b4a58326.png';
import img5 from '../../assets/img/Screenshot 2023-12-06 at 17.35.08.png';
import img6 from '../../assets/img/Screenshot 2023-12-06 at 17.36.08.png';
import img7 from '../../assets/img/Screenshot 2023-12-06 at 17.39.34.png';
import img8 from '../../assets/img/Screenshot 2023-12-06 at 17.42.12.png';
const SectionGallery = () => {
    return (
        <div className="section-gallery">
            <div className="uk-section uk-container uk-container-large">
                <div className="uk-grid uk-child-width-1-4@m uk-child-width-1-3@s" data-uk-grid data-uk-lightbox>
                    <div>
                        <div>
                            <a href={img1}>
                                <img className="uk-width-1-1" src={img1} alt="img-gallery" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <a href={img2}>
                                <img className="uk-width-1-1" src={img2} alt="img-gallery" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <a href={img3}>
                                <img className="uk-width-1-1" src={img3} alt="img-gallery" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <a href={img4}>
                                <img className="uk-width-1-1" src={img4} alt="img-gallery" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <a href={img5}>
                                <img className="uk-width-1-1" src={img5} alt="img-gallery" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <a href={img6}>
                                <img className="uk-width-1-1" src={img6} alt="img-gallery" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <a href={img7}>
                                <img className="uk-width-1-1" src={img7} alt="img-gallery" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <a href={img8}>
                                <img className="uk-width-1-1" src={img8} alt="img-gallery" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionGallery;