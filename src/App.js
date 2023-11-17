import React, { useState, useEffect } from "react";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import ProductListing from './pages/ProductListing';
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
import { Route, Routes } from 'react-router-dom';
import request from "./components/helpers/request";
import defaultImg from '../src/assets/img/defaultImg.jpg';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css'
import './App.css';

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

    let shoppingCart = document.getElementsByClassName('offConvassCart');
    const getTotalPrice = (items) => items.map((item) => item.price * item.count).reduce((acc, value) => acc + value, 0);
    const [productsInCart, setProducts] = useState(JSON.parse(localStorage.getItem("shopping-cart")) || []);
    const CartTotalPrice = getTotalPrice(productsInCart);

    const [productHome, setproductHome] = useState([]);
    const [productListing, setproductListing] = useState([]);
    const [categoryList, setcategoryList] = useState([]);

    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        localStorage.setItem(
            "shopping-cart",
            JSON.stringify(productsInCart),
        );
        request('https://api.dev.itfabers.com/api/website-setup')
            .then((homeData) => {
                homeData.products.forEach((product, i) => {
                    if (product.thumb_image === null) {
                        product.thumb_image = defaultImg;
                    }
                })
                homeData.productCategories.forEach((category, i) => {
                    if (category.image === null) {
                        category.image = defaultImg;
                    }
                })
                setproductHome(homeData.products);
                setcategoryList(homeData.productCategories)
            })
            .catch(error => {
                console.log(error);
            })
        if (errorMessage) {
            toast.error(errorMessage);
        }
        if (successMessage) {
            toast.success(successMessage)
        }

    }, [productsInCart, errorMessage, successMessage]);

    const SetProductsListing=(products)=>{
        setproductListing(products)
    }

    const SetSuccessMessage = (messageDone) => {
        setSuccessMessage(messageDone)
    }
    const SetErrorMessage = (messageError) => {
        setErrorMessage(null);
        setErrorMessage(messageError)
    }

    const addProductToCart = (product) => {
        const names = productsInCart.map(product => product.id)
        if (!names.includes(product.id)) {
            const newProduct = { ...product, count: 1 };
            setProducts([...productsInCart, newProduct]);
        }
    };

    const onQuantityChange = (productId, count) => {
        setProducts((oldState) => {
            const productsIndex = oldState.findIndex((item) => item.id === productId);
            if (productsIndex !== -1) {
                oldState[productsIndex].count = count;
            }
            return [...oldState];
        });
    };

    const onProductRemove = (product) => {
        setProducts((oldState) => {
            const productsIndex = oldState.findIndex((item) => item.id === product.id);
            if (productsIndex !== -1) {
                oldState.splice(productsIndex, 1);
            }
            return [...oldState];
        });
        console.log(product.id);
        if (document.getElementById(product.id)) {
            document.getElementById(product.id).classList.remove('product-added')
        }
    };

    const offConvasCartHide = (e) => {
        e.preventDefault();
        UIkit.offcanvas(shoppingCart).hide();
    }

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
                <Route path="/" element={<HomePage
                    products={productHome}
                    addProductToCart={addProductToCart}
                    categoryList={categoryList}
                />} />
                <Route path="product-listing"  element={<ProductListing
                    products={productListing}
                    SetProductsListing ={SetProductsListing}
                    addProductToCart={addProductToCart}
                />} />
                <Route path="Contacts" element={<Contacts />} />
                <Route path="login" element={<Login
                    SetSuccessMessage={SetSuccessMessage}
                    SetErrorMessage={SetErrorMessage}
                />} />
                <Route path="ResetPassword" element={<ResetPassword />} />
                <Route path="wish-list" element={<WishList
                    products={favoriteProducts}
                    addProductToCart={addProductToCart}
                />} />
                <Route path="registration" element={<Registration
                    SetSuccessMessage={SetSuccessMessage}
                    SetErrorMessage={SetErrorMessage}
                />} />
                <Route path="account" element={<Account />} />
                <Route path="shopping-cart" element={<ShoppingCartPage
                    products={productsInCart}
                    onQuantityChange={onQuantityChange}
                    onProductRemove={onProductRemove}
                    CartTotalPrice={CartTotalPrice}
                />} />
                <Route path="checkout" element={<Checkout
                    products={productsInCart}
                    CartTotalPrice={CartTotalPrice}
                />} />
                <Route path="product-inner/:id" element={
                    <ProductInner
                        products={productInner}
                        onQuantityChange={onQuantityChange}
                        addProductToCart={addProductToCart}
                    />}
                />
            </Routes>
            <Footer />
        </div>
    );
}


export default App;
