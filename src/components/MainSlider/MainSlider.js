import React , {useEffect} from 'react';
import product01 from '../../assets/img/product01.png';
import product02 from '../../assets/img/product02.jpg';
import product03 from '../../assets/img/product03.jpg';
// import request from "../helpers/request";
// import defaultImg from '../../assets/img/defaultImg.jpg';


const MainSlider = () => {

    // useEffect(() => {
    //     request('https://api.dev.itfabers.com/api/product/{slug}')
    //         .then((sliders) => {
    //             // homeData.products.forEach((product , i )=>{
    //             //     if(product.thumb_image===null){
    //             //         product.thumb_image = defaultImg;
    //             //     }
    //             // })
    //             // homeData.productCategories.forEach((category , i )=>{
    //             //     if(category.image===null){
    //             //         category.image = defaultImg;
    //             //     }
    //             // })
    //             // setproductHome(homeData.products);
    //             // setcategoryList(homeData.productCategories)
    //             console.log(sliders);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })

    // }, []);


    return (
        <div className="section-hero">
            <div data-uk-slideshow="autoplay: false; min-height: 560; max-height: 950; animation: fade">
                <div className="uk-position-relative" tabIndex="-1">
                    <ul className="uk-slideshow-items">
                        <li className="slideshow-item">
                            <img src={product01} alt="slideImagee" data-uk-cover />
                            <div className="uk-position-center uk-position-small">
                                <div className="uk-container">
                                    <div className="uk-grid" data-uk-grid>
                                        <div className="uk-width-3-5@m">
                                            <div className="slideshow-item__content">
                                                <div className="slideshow-item__title" data-uk-slideshow-parallax="x: 100,-100">
                                                    <span>Taking rides to a newer level</span>
                                                    <div className="uk-h2">the combination of<br /> power & perfection</div>
                                                </div>
                                                <div className="slideshow-item__desc" data-uk-slideshow-parallax="x: 200,-200">
                                                    <p>Consectetur adipiscing elit sed ipsum eiusmod tempor ncdidunt<br /> labore et dolore magna
                                                        aliqua quis ipsum suspendisse.</p>
                                                </div>
                                                <div className="slideshow-item__btns" data-uk-slideshow-parallax="x: 300,-300">
                                                    <a className="uk-button uk-button-danger" href="#section-about">Learn more </a>
                                                    <a className="uk-button uk-button-secondary" href="#section-category">Motorcycles </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="uk-width-2-5@m uk-visible@l"></div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="slideshow-item"><img src={product02} alt="slideImagee" data-uk-cover />
                            <div className="uk-position-center uk-position-small">
                                <div className="uk-container">
                                    <div className="uk-grid" data-uk-grid>
                                        <div className="uk-width-2-5@m uk-visible@l"></div>
                                        <div className="uk-width-3-5@m">
                                            <div className="slideshow-item__content">
                                                <div className="slideshow-item__title" data-uk-slideshow-parallax="x: 100,-100">
                                                    <span>Taking rides to a newer level</span>
                                                    <div className="uk-h2">putting a reliable<br /> machine on road</div>
                                                </div>
                                                <div className="slideshow-item__desc" data-uk-slideshow-parallax="x: 200,-200">
                                                    <p>Consectetur adipiscing elit sed ipsum eiusmod tempor ncdidunt<br /> labore et dolore magna
                                                        aliqua quis ipsum suspendisse.</p>
                                                </div>
                                                <div className="slideshow-item__btns" data-uk-slideshow-parallax="x: 300,-300">
                                                    <a className="uk-button uk-button-danger" href="/#!">Learn more </a>
                                                    <a className="uk-button uk-button-secondary" href="/#!">Motorcycles </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="slideshow-item"><img src={product03} alt="slideImagee" data-uk-cover />
                            <div className="uk-position-center uk-position-small">
                                <div className="uk-container">
                                    <div className="uk-grid" data-uk-grid>
                                        <div className="uk-width-3-5@m">
                                            <div className="slideshow-item__content">
                                                <div className="slideshow-item__title" data-uk-slideshow-parallax="x: 100,-100">
                                                    <span>Taking rides to a newer level</span>
                                                    <div className="uk-h2">modern designed<br /> for a Sleek look</div>
                                                </div>
                                                <div className="slideshow-item__desc" data-uk-slideshow-parallax="x: 200,-200">
                                                    <p>Consectetur adipiscing elit sed ipsum eiusmod tempor ncdidunt<br /> labore et dolore magna
                                                        aliqua quis ipsum suspendisse.</p>
                                                </div>
                                                <div className="slideshow-item__btns" data-uk-slideshow-parallax="x: 300,-300">
                                                    <a className="uk-button uk-button-danger" href="/#!">Learn more </a>
                                                    <a className="uk-button uk-button-secondary" href="/#!">Motorcycles </a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="slideshow-nav"><a href="/#" data-uk-slidenav-previous data-uk-slideshow-item="previous" > </a>
                    <div className="slideshow-nav__count">
                        <ul>
                            <li data-uk-slideshow-item="0"><span>1 </span></li>
                            <li data-uk-slideshow-item="1"><span>2</span></li>
                            <li data-uk-slideshow-item="2"><span>3</span></li>
                        </ul>
                        <span>/ 3</span>
                    </div>
                    <a href="/#" data-uk-slidenav-next data-uk-slideshow-item="next"> </a>
                </div>
            </div>
        </div>
    )
}

export default MainSlider;