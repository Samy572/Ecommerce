import axios from 'axios';
export const GET_PRODUCT = 'GET_PRODUCT';
export const POST_PRODUCT = 'POST_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

// Création d'une action pour interragir avec la BDD et le store

export const getProduct = () => {
	return (dispatch) => {
		return axios.get('http://localhost:3000/product').then((res) => {
			dispatch({ type: GET_PRODUCT, payload: res.data });
		});
	};
};

// Ajouter un produit dans le store

export const postProduct = (data) => {
	return (dispatch) => {
		return axios.post('http://localhost:3000/add-product', data.id).then((res) => {
			dispatch({ type: POST_PRODUCT, payload: res.data });
		});
	};
};

// Supprimer un produit dans le store

export const deleteProduct = (data) => {
	return (dispacth) => {
		return axios.delete('http://localhost:3000/product', data.id).then((res) => {
			dispacth({ type: DELETE_PRODUCT, payload: res.data.id });
		});
	};
};
