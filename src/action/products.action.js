import axios from 'axios';
export const GET_PRODUCT = 'GET_PRODUCT';

// Création d'une action pour interragir avec la BDD et le store

export const getProduct = () => {
	return (dispatch) => {
		return axios.get('https://dummyjson.com/products').then((res) => {
			dispatch({ type: GET_PRODUCT, payload: res.data });
		});
	};
};
