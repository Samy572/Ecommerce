import axios from 'axios';
export const ADD_TO_CART = 'ADD_TO_CART';
export const GET_PRODUCT_FROM_CART = 'GET_PRODUCT_FROM_CART';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
const ROOT_URL = 'http://localhost:3000';

export const addToCart = (data) => {
	return (dispatch) => {
		axios
			.post(`${ROOT_URL}/product-cart`, data)
			.then(() => {
				dispatch({ type: ADD_TO_CART, payload: data });
			})
			.catch((error) => {
				console.error("Erreur lors de l'ajout du produit au panier :", error);
			});
	};
};

export const getProductFromCart = () => {
	return (dispatch) => {
		axios.get(`${ROOT_URL}/product-cart`).then((res) => {
			dispatch({ type: GET_PRODUCT_FROM_CART, payload: res.data });
		});
	};
};

// Supprimer un produit dans le store

export const deleteProduct = (data) => {
	return (dispacth) => {
		return axios.delete(`${ROOT_URL}/product/${data.id}`).then(() => {
			dispacth({ type: DELETE_PRODUCT, payload: data.id });
		});
	};
};
