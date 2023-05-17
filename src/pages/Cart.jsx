import React from 'react';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../action/cart.action';
const Cart = () => {
	const dispatch = useDispatch();
	const itemInCart = useSelector((state) => state.cartReducer);
	console.log(itemInCart);


	const deleteItem = (item) => {
		dispatch(deleteProduct(item.id));
	};

	return (
		<div>
			<Header />
			<h2>Panier</h2>
			<div className="container">
				{itemInCart &&
					itemInCart?.map((item, id) => {
						return (
							<div key={id}>
								<h4>{item?.title}</h4>
								<img src={item?.img} alt={item?.title} />
								<p>{item?.price}</p>
								<p>{item?.count}</p>
								<button onClick={() => deleteItem(item)}>X</button>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Cart;
