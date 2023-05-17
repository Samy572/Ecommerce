// Permet de regrouper tous les fichiers reducer
import { combineReducers } from 'redux';
import productReducer from './product.reducer';
import cartReducer from './cart.reducer';
export default combineReducers({
	productReducer,
	cartReducer,
});
