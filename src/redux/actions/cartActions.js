export const addToCart = (product) => ({
  type: 'ADD_TO_CART',
  payload: { ...product, count: 1 },
});

export const updateQuantity = (productId, count) => ({
  type: 'UPDATE_QUANTITY',
  payload: { productId, count },
});

export const removeFromCart = (productId) => ({
  type: 'REMOVE_FROM_CART',
  payload: { productId },
});

export const addToFavorites = (product) => ({
  type: 'ADD_TO_FAVORITES',
  payload: product,
});

export const addToProductInner = (product) => ({
  type: 'ADD_TO_PRODUCT_INNER',
  payload: product,
});