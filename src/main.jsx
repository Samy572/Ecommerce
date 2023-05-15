import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.scss';

// Router
import { BrowserRouter } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import rootReducer from './reducer';
import { configureStore } from '@reduxjs/toolkit';
import { getProduct } from './action/products.action';

const store = configureStore({
	reducer: rootReducer,
	devTools: true,
});

store.dispatch(getProduct());

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
);
