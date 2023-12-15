import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryProducts } from "../redux/actions/categoryActions";
import { addToCart } from "../redux/actions/cartActions";
import { Link, useParams } from 'react-router-dom';
import ProductsComponent from '../components/ProductsComponent';
import { Circles } from 'react-loader-spinner';

const CategoryPage = () => {
    const dispatch = useDispatch();
    const { slug } = useParams();
    const categoriesData = useSelector((state) => state.category.category.categories);
    const productsData = useSelector((state) => state.category.category.products);
    useEffect(() => {
        dispatch(fetchCategoryProducts(slug));
    }, [dispatch, slug]);
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    if (!categoriesData) {
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
    }

    const bannerImage = 'https://api.dev.itfabers.com/uploads/custom-images/default.jpg';

    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                <img src={bannerImage} alt="Banner" style={{ width: '100%', height: '500px', objectFit: 'cover', margin: '0 auto' }} />
            </div>
            <div className="uk-container">
                <div className="uk-grid-small" data-uk-grid>
                    <div className="uk-width-1-4">
                        <div className="uk-card uk-card-default uk-card-body">
                            <h3 className="uk-card-title">Categories</h3>
                            <ul className="uk-list">
                                {categoriesData && Object.keys(categoriesData).length !== 0 ? categoriesData.map((category) => (
                                    <li key={category.id}>
                                        <Link to={`/category/${category.slug}`} className="uk-link-reset">
                                            {category.name}
                                        </Link>
                                    </li>
                                )):''}
                            </ul>
                        </div>
                    </div>
                    <div className="uk-width-3-4">
                        <div className="uk-child-width-1-3@s uk-grid-small uk-grid-match" data-uk-grid>
                            <ProductsComponent
                                title=""
                                products={productsData || []}
                                pagination={true}
                                template="shop"
                                addToCart={handleAddToCart}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoryPage;
