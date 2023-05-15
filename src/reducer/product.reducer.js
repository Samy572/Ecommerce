import { GET_PRODUCT, POST_PRODUCT, DELETE_PRODUCT } from '../action/products.action';

const initialState = [];

export default function productReducer(state = initialState, action) {
	switch (action.type) {
		case GET_PRODUCT:
			return action.payload;
		case POST_PRODUCT:
			return action.payload;
		case DELETE_PRODUCT:
			return state.filter((product) => product.id !== action.payload);
		default:
			return state;
	}
}
