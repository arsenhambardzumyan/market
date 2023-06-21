import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

function ShoppingCart({ products, CartTotalPrice, onProductRemove, offConvasCartHide, onQuantityChange, }) {

	return (
		<div className="offcanvass offConvassCart" id="offcanvas" data-uk-offcanvas="flip: true; overlay: true">
			<div className="uk-offcanvas-bar">
				<button className="uk-offcanvas-close" data-uk-close="" type="button" onClick={offConvasCartHide}></button>
				<div className="modal shopping_cart_inner">
					<div className="cart_inner_title">Shopping Bag (<span>{products.length}</span>)</div>
					<div className="shoppingCart cart_product_list">
						<div className="cart-products">
							{products.length === 0 && (<span className="empty-text">Your basket is currently empty</span>)}
							{products.map((product) => (
								<div className="cart-product" key={product.id}>
									<img src={product.image} alt={product.name} />
									<div className="product-info">
										<div className="cart_product_name">{product.name}</div>
										<span className="product-price">{product.price * product.count}$</span>
									</div>
									<select className="count" value={product.count}
											onChange={(event) => { onQuantityChange(product.id, event.target.value); }}>
											{[...Array(10).keys(),].map((number) => {
												const num = number + 1;
												return (<option value={num} key={num}>{num}</option>);
											})}
										</select>
									<button className="btn remove-btn" onClick={() => onProductRemove(product)}>
										<RiDeleteBin6Line size={20} />
									</button>
								</div>
							))}
						</div>
					</div>
					{products.length > 0 && (
						<div className="bottom_block">
							<div className="subtotal_block">
								<div className="inner_title">Subtotal</div>
								<div className="total_sum">{CartTotalPrice}<span>$</span></div>
							</div>
							<a href="/#" className="checkout_button">Checkout</a>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default ShoppingCart;
