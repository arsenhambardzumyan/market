import React, { useState, useEffect } from "react";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import ProductListing from './pages/ProductListing';
import ShoppingCart from "./components/ShoppingCarts/ShoppingCart";
import UIkit from 'uikit';
import { Route, Routes } from 'react-router-dom';

import './App.css';

const products = [
    {
        id: 1,
        name: "Product 1",
        description:
            "Vivamus vitae neque accumsan, ultrices nisl et, viverra magna. Fusce nec maximus sem.",
        price: 199,
        image: require("./assets/img/product01.png"),
    },
    {
        id: 2,
        name: "product 2",
        description:
            "Vivamus vitae neque accumsan, ultrices nisl nec maximus sem.",
        price: 320,
        image: require("./assets/img/product02.jpg"),
    },
    {
        id: 3,
        name: "product 3",
        description:
            "Vivamus vitae neque accumsan, ultrices nisl et, viverra magna. Fusce nec maximus sem.",
        price: 500,
        image: require("./assets/img/product03.jpg"),
    }
];


function App() {

    let shoppingCart = document.getElementsByClassName('offConvassCart');
    const [productsInCart, setProducts] = useState(JSON.parse(localStorage.getItem("shopping-cart")) || []);
    const getTotalPrice = (items) => items.map((item) => item.price*item.count).reduce((acc, value) => acc + value, 0);
	const CartTotalPrice = getTotalPrice(productsInCart);


    useEffect(() => {
        localStorage.setItem(
            "shopping-cart",
            JSON.stringify(productsInCart),
        );
    }, [productsInCart]);


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
        document.getElementById(product.id).classList.remove('product-added')
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

            <Routes>
                <Route path="/" element={<HomePage     products={products}   addProductToCart={addProductToCart} />}  />
                <Route path="product-listing" element={<ProductListing  />}  />
                
            </Routes>

            <Footer />
        </div>
    );
}

export default App;
