import axios from 'axios';
export const GET_PRODUCT = 'GET_PRODUCT';
export const POST_PRODUCT = 'POST_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

const ROOT_URL = 'http://localhost:3000';

// Création d'une action pour interragir avec la BDD et le store

export const getProduct = () => {
	return (dispatch) => {
		return axios.get(`${ROOT_URL}/product`).then((res) => {
			dispatch({ type: GET_PRODUCT, payload: res.data });
		});
	};
};

// Ajouter un produit dans le panier

// export const postProduct = (data) => {
// 	return (dispatch) => {
// 		return axios.post(`${ROOT_URL}/add-product`, data).then((res) => {
// 			dispatch({ type: POST_PRODUCT, payload: res.data });
// 		});
// 	};
// };


