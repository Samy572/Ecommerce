// Permet de regrouper tous les fichiers reducer
import { combineReducers } from 'redux';
import productReducer from './product.reducer';
export default combineReducers({
	productReducer,
});
