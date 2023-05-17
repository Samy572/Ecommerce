import React from 'react';
import { useState } from 'react';
import { addToCart } from '../action/cart.action';
import { useDispatch, useSelector } from 'react-redux';

const AddProduct = ({ itemSelected }) => {
	const [counter, setCounter] = useState(1);
	const itemInStore = useSelector((state) => state.productReducer);
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

		await dispatch(addToCart(newProduct));
	};

	return (
		<>
			<div className="button-container-add-to-cart">
				<div className="button-container">
					<button className="btn-more" onClick={() => reducesCount()}>
						-
					</button>
					<div className="counter">
						<span>{counter}</span>
					</div>
					<button className="btn-least" onClick={() => setCounter(counter + 1)}>
						+
					</button>
				</div>
				<button className="add-to-cart" onClick={() => addItemToCart(itemSelected)}>
					ADD TO CART
				</button>
			</div>
		</>
	);
};

export default AddProduct;
