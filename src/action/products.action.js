import axios from 'axios';
export const GET_PRODUCT = 'GET_PRODUCT';

const ROOT_URL = 'http://localhost:3000';

// get product

export const getProduct = () => {
	return (dispatch) => {
		return axios
			.get(`${ROOT_URL}/product`)
			.then((res) => {
				dispatch({ type: GET_PRODUCT, payload: res.data });
			})
			.catch((error) => {
				console.log(error);
			});
	};
};
