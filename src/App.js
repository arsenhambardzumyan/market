import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import BrandsPage from './pages/BrandsPage';
import ProductsPage from './pages/ProductsPage';
import CategoryPage from './pages/CategoryPage';
import HotOfferPage from './pages/HotOfferPage';
import NewArrivalPage from './pages/NewArrivalPage';
// import ProductListing from './pages/ProductListing';
import Contacts from './pages/Contacts';
import Login from './pages/Login';
import Registration from './pages/Registration';
import ResetPassword from './pages/ResetPassword';
import ShoppingCartPage from './pages/ShoppingCartPage';
import Checkout from './pages/Checkout';
import Account from './pages/Account';
import WishList from './pages/WishList';
import ProductInner from './pages/ProductInner';
import ShoppingCart from "./components/ShoppingCarts/ShoppingCart";
import UIkit from 'uikit';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import './App.css';
import { 
    addToCart, 
    updateQuantity, 
    removeFromCart, 
    addToFavorites, 
    addToProductInner 
}   from './redux/actions/cartActions';

const favoriteProducts = [
    {
        id: 8,
        name: "Favorite product 8",
        description: "Vivamus v55555",
        price: 899,
        image: require("./assets/img/milkprod4.jpg"),
    },
    {
        id: 9,
        name: "Favorite product 6",
        description: "Vivamus viaximus sem.",
        price: 500,
        image: require("./assets/img/product01.png"),
    },
    {
        id: 10,
        name: "Favorite product 7",
        description: "Vivamus vm.",
        price: 500,
        image: require("./assets/img/milkprod2.jpg"),
    },
    {
        id: 11,
        name: "Favorite product 8",
        description: "Vivamus v55555",
        price: 899,
        image: require("./assets/img/milkprod4.jpg"),
    },
    {
        id: 12,
        name: "Favorite product 6",
        description: "Vivamus viaximus sem.",
        price: 500,
        image: require("./assets/img/product01.png"),
    },
    {
        id: 13,
        name: "Favorite product 7",
        description: "Vivamus vm.",
        price: 500,
        image: require("./assets/img/milkprod2.jpg"),
    }
]

const productInner = [
    {
        id: 5,
        name: "product 5",
        description: "Vivamus v555555itae neque accumsan, ultrices nisl nec maximus sem.",
        price: 320,
        image: require("./assets/img/milkprod1.jpg"),
    },
    {
        id: 6,
        name: "product 6",
        description: "Vivamus vita6666666666e neque accumsan, ultrices nisl et, viverra magna. Fusce nec maximus sem.",
        price: 500,
        image: require("./assets/img/product03.jpg"),
    },
    {
        id: 7,
        name: "product 7",
        description: "Vivamus v77777erra magna. Fusce nec maximus sem.",
        price: 500,
        image: require("./assets/img/milkprod5.jpg"),
    }
];


function App() {

    const dispatch = useDispatch();
    const productsInCart = useSelector((state) => state.cart.productsInCart);
    // const errorMessage = useSelector((state) => state.cart.errorMessage);
    // const successMessage = useSelector((state) => state.cart.successMessage);
    // const apiUrl = process.env.REACT_APP_BASE_URL;
    let shoppingCart = document.getElementsByClassName('offConvassCart');
    const getTotalPrice = (items) => items.map((item) => item.price * item.count).reduce((acc, value) => acc + value, 0);
    const CartTotalPrice = getTotalPrice(productsInCart);

    const addProductToCart = (product) => {
        const names = productsInCart.map((product) => product.id);
        if (!names.includes(product.id)) {
            dispatch(addToCart(product));
        }
    };

    const onQuantityChange = (productId, count) => {
        dispatch(updateQuantity(productId, count));
    };

    const onProductRemove = (product) => {
        dispatch(removeFromCart(product.id));
    };

    const addFavoriteToCart = (product) => {
        dispatch(addToFavorites(product));
    };

    const addProductInnerToCart = (product) => {
        dispatch(addToProductInner(product));
    };

    const offConvasCartHide = (e) => {
        e.preventDefault();
        UIkit.offcanvas(shoppingCart).hide();
    };

    return (
        <div className='page-wrapper'>
            <Header products={productsInCart} />
            <ShoppingCart
                products={productsInCart}
                onQuantityChange={onQuantityChange}
                offConvasCartHide={offConvasCartHide}
                onProductRemove={onProductRemove}
                CartTotalPrice={CartTotalPrice}
            />
            <ToastContainer
                position="bottom-left"
                autoClose={3000}
                limit={3}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <Routes>
                <Route path="/" element={<HomePage addProductToCart={addProductToCart} />} />
                <Route path="brands" element={<BrandsPage addProductToCart={addProductToCart}/>} />
                <Route path="shop" element={<ProductsPage addProductToCart={addProductToCart} />} />
                <Route path="hot-offer" element={<HotOfferPage addProductToCart={addProductToCart} />} />
                <Route path="new-arrival" element={<NewArrivalPage addProductToCart={addProductToCart} />} />
                {/* <Route path="product-listing" element={<ProductListing addProductToCart={addProductToCart} />} /> */}
                <Route path="Contacts" element={<Contacts />} />
                <Route path="login" element={<Login       

                            // SetSuccessMessage={SetSuccessMessage}
                            // SetErrorMessage={SetErrorMessage} 
                            
                />} 
                            
                />
                <Route path="ResetPassword" element={<ResetPassword />} />
                <Route path="wish-list" element={<WishList products={favoriteProducts} addProductToCart={addFavoriteToCart} />} />
                <Route path="registration" element={<Registration />} />
                <Route path="account" element={<Account />} />
                <Route path="shopping-cart" element={<ShoppingCartPage
                    products={productsInCart}
                    onQuantityChange={onQuantityChange}
                    onProductRemove={onProductRemove}
                    CartTotalPrice={CartTotalPrice}
                />} />
                <Route path="checkout" element={<Checkout products={productsInCart} CartTotalPrice={CartTotalPrice} />} />
                <Route path="product/:slug" element={<ProductInner
                    products={productInner}
                    onQuantityChange={onQuantityChange}
                    addProductToCart={addProductInnerToCart}
                />} />
                <Route path="category/:slug" element={<CategoryPage addProductToCart={addProductInnerToCart}/>} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
