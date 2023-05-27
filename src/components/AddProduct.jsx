import React from 'react';
import { useState } from 'react';
import { addToCart } from '../action/cart.action';
import { useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const AddProduct = ({ itemSelected, price }) => {
	const [counter, setCounter] = useState(1);
	const dispatch = useDispatch();
	const reducesCount = () => {
		if (counter > 1) {
			setCounter(counter - 1);
		}
	};
	const addItemToCart = async () => {
		const newProduct = {
			count: counter,
			title: itemSelected.title,
			price: itemSelected.price,
			img: itemSelected.img,
			id: itemSelected.id,
		};

		const notify = toast.success(
			`${newProduct.count} x ${newProduct.title} added to cart`,
			{
				position: 'top-center',
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'dark',
			}
		);

		await dispatch(addToCart(newProduct));
	};

	return (
		<div className="button-container-add-to-cart">
			<ToastContainer
				position="top-center"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
				style={{ marginTop: '50px' }}
			/>
			<div className="button-container">
				<button className="btn-more" onClick={() => reducesCount()}>
					-
				</button>
				<div className="counter">
					<span className="counter-product">{counter}</span>
				</div>
				<button className="btn-least" onClick={() => setCounter(counter + 1)}>
					+
				</button>

				<button className="add-to-cart" onClick={() => addItemToCart(itemSelected)}>
					ADD TO CART
				</button>
			</div>
			<span className="add-product-price">{(price * counter).toFixed(2) + ' €'}</span>
		</div>
	);
};

export default AddProduct;
