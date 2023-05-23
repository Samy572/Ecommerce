import React from 'react';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../action/cart.action';
const Cart = () => {
	const dispatch = useDispatch();
	const itemInCart = useSelector((state) => state.cartReducer);

	const deleteItem = (id) => {
		dispatch(deleteProduct(id));
	};

	return (
		<div className="cart">
			<Header />
			<h2>Panier</h2>
			<div className="container">
				{itemInCart &&
					itemInCart?.map((item, id) => {
						return (
							<div key={id}>
								<h4>{item?.title}</h4>
								<img src={item?.img} alt={item?.title} />
								<p> Prix: {item?.price} €</p>
								<p>Quantité: {item?.count}</p>
								<p>Total: {(item?.price * item?.count).toFixed(2)} €</p>
								<button onClick={() => deleteItem(item.id)}>X</button>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Cart;
