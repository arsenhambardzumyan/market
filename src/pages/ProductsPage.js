import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/shopActions";
import { addToCart } from "../redux/actions/cartActions";
import { Link } from 'react-router-dom';
import ProductsComponent from '../components/ProductsComponent';

const ProductsPage = () => {
    const dispatch = useDispatch();
    const categoriesData = useSelector((state) => state.shop.data.categories);
    const productsData = useSelector((state) => state.shop.data.products);
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    console.log(categoriesData)
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    if (!categoriesData) {
        // Return null or a loading component while waiting for categoriesData
        return <p>Loading...</p>;
    }

    // Replace '/path/to/your/banner.jpg' with the actual path to your banner image
    const bannerImage = 'https://api.dev.itfabers.com/uploads/custom-images/default.jpg';

    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                <img src={bannerImage} alt="Banner" style={{ width: '100%', height: '500px', objectFit: 'cover', margin: '0 auto' }} />
            </div>

            <div className="uk-container">
                <div className="uk-grid-small" data-uk-grid>
                    {/* Left Sidebar */}
                    <div className="uk-width-1-4">
                        <div className="uk-card uk-card-default uk-card-body">
                            <h3 className="uk-card-title">Categories</h3>
                            <ul className="uk-list">
                                {categoriesData.map((category) => (
                                    <li key={category.id}>
                                        <Link to={`/category/${category.slug}`} className="uk-link-reset">
                                            {category.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Main Content */}
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

export default ProductsPage;
