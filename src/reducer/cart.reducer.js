import {
	ADD_TO_CART,
	DELETE_PRODUCT,
	GET_PRODUCT_FROM_CART,
} from '../action/cart.action';

const initialState = [];

export default function cartReducer(state = initialState, action) {
	switch (action.type) {
		case GET_PRODUCT_FROM_CART:
			return action.payload;
		case ADD_TO_CART:
			return [...state, action.payload];

		case DELETE_PRODUCT:
			return state.filter((product) => product.id !== action.payload);

		default:
			return state;
	}
}
