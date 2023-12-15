import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainSlider from "../components/MainSlider/MainSlider";
import CategoriesComponent from "../components/Homepage/CategoriesComponent";
import ProductsComponent from '../components/ProductsComponent';
import Subscribe from '../components/Subscribe/Subscribe';
import Partners from "../components/Partners/Partners";
import { fetchHomeData } from "../redux/actions/homeActions";
import { addToCart } from "../redux/actions/cartActions";
import SectionVideo from "../components/Homepage/SectionVideo";
import SectionGallery from "../components/Homepage/SectionGallery";
import { Circles } from 'react-loader-spinner'


const HomePage = () => {
    const dispatch = useDispatch();
    const homeData = useSelector((state) => state.home.homeData);
    const isPlaying = useSelector((state) => state.home.isPlaying);

    useEffect(() => {
        dispatch(fetchHomeData());
    }, [dispatch]);

    const handlePlayPause = () => {
        dispatch({ type: "TOGGLE_PLAY_PAUSE" });
    };

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    if (!homeData) {
        return (
            <div className="loader">
                <Circles
                    height="80"
                    width="80"
                    color="#ff0000"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
        )
    }else {
        homeData.hotOfferProducts = homeData.hotOfferProducts.slice(0, 3);
        homeData.topProducts = homeData.topProducts.slice(0, 3);
        homeData.bestProducts = homeData.bestProducts.slice(0, 3);
    }



    return (
        <>
            {homeData ? (
                <>
                    <MainSlider slides={homeData.slides || []} isPlaying={isPlaying} handlePlayPause={handlePlayPause} />
                    <CategoriesComponent categories={homeData.categories || []} />
                    <ProductsComponent
                        title="New Arrival"
                        description="Unveil the latest arrivals—your passport to fresh trends and must-have items. Elevate your style with our newest additions. Explore now for the hottest picks in the New Arrival section!"
                        products={homeData.newArrivalProducts || []}
                        pagination={false}
                        template="new"
                        addToCart={handleAddToCart}
                        col={3}
                    />
                    <SectionGallery />
                    <ProductsComponent
                        title="Top products"
                        description="Explore top-tier items in our Featured Collection. Elevate your style effortlessly with our latest arrivals. Uncover excellence in our Top Products section. Shop the best today!"
                        products={homeData.topProducts || []}
                        pagination={false}
                        template="top"
                        addToCart={handleAddToCart}
                        col={3}
                    />
                    <ProductsComponent
                        title="Hot Offer"
                        description="Unlock unbeatable deals in our Hot Offers section. Elevate your style with the latest arrivals. Explore excellence in our Top Products collection. Shop the hottest deals now!"
                        products={homeData.hotOfferProducts || []}
                        pagination={false}
                        template="hot"
                        addToCart={handleAddToCart}
                        col={3}
                    />
                    <SectionVideo />
                    <ProductsComponent
                        title="Best Products"
                        description="Uncover perfection in our Best Picks. Elevate your style with the latest arrivals. Dive into excellence with our Top Products selection. Shop the finest today!"
                        products={homeData.bestProducts || []}
                        pagination={false}
                        template="hot"
                        addToCart={handleAddToCart}
                        col={3}
                    />
                    <Partners />
                    <Subscribe />
                </>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}

export default HomePage;
