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
        return <p>Loading...</p>;
    }
    return (
        <>
            {homeData ? (
                <>

                    <MainSlider data={homeData.mainSliderData || []} isPlaying={isPlaying} handlePlayPause={handlePlayPause} />
                    <CategoriesComponent categories={homeData.categories || []} />
                    <ProductsComponent
                        title="New Arrival"
                        products={homeData.newArrivalProducts || []}
                        pagination={false}
                        template="new"
                        addToCart={handleAddToCart}
                        col={3}
                    />
                    <SectionGallery />
                    <ProductsComponent
                        title="Top products"
                        products={homeData.topProducts || []}
                        pagination={false}
                        template="top"
                        addToCart={handleAddToCart}
                        col={3}
                    />
                    <ProductsComponent
                        title="Hot Offer"
                        products={homeData.hotOfferProducts || []}
                        pagination={false}
                        template="hot"
                        addToCart={handleAddToCart}
                        col={3}
                    />
                    <SectionVideo />
                    <ProductsComponent
                        title="Best Products"
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
