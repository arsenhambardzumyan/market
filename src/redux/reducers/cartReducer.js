const initialState = {
  productsInCart: JSON.parse(localStorage.getItem('shopping-cart')) || [],
  totalCartPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Handle adding product to the cart
      return {
        ...state,
        productsInCart: [...state.productsInCart, action.payload],
      };

    case 'UPDATE_QUANTITY':
      // Handle updating quantity of a product in the cart
      return {
        ...state,
        productsInCart: state.productsInCart.map((item) =>
          item.id === action.payload.productId
            ? { ...item, count: action.payload.count }
            : item
        ),
      };

    case 'REMOVE_FROM_CART':
      // Handle removing a product from the cart
      return {
        ...state,
        productsInCart: state.productsInCart.filter(
          (item) => item.id !== action.payload.productId
        ),
      };

    case 'ADD_TO_FAVORITES':
      return {
        ...state,
        favoriteProducts: [...state.favoriteProducts, action.payload],
      };
    case 'ADD_TO_PRODUCT_INNER':
      return {
        ...state,
        productInner: [...state.productInner, action.payload],
      };

    default:
      return state;
  }
};

export default cartReducer;
