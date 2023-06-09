import React from 'react';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../action/cart.action';
import { NavLink } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

const Cart = () => {
	const dispatch = useDispatch();
	const itemInCart = useSelector((state) => state.cartReducer);
	let totalPrice = 0;
	const total = () => {
		itemInCart.forEach((element) => {
			totalPrice += element.price * element.count;
		});
		return 'Total : ' + totalPrice.toFixed(2) + ' €';
	};

	const deleteItem = (item) => {
		const notify = toast.error(`${item.count} x ${item.title} remove from cart`, {
			position: 'top-center',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'dark',
		});
		dispatch(deleteProduct(item.id));
	};

	return (
		<div className="cart">
			<Header />
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
			{itemInCart.length > 0 ? (
				<h2>Your shopping cart</h2>
			) : (
				<h2>Add products to your cart</h2>
			)}
			<div className="container-cart">
				{itemInCart &&
					itemInCart?.map((item, id) => {
						return (
							<div className="container-item-cart" key={id}>
								<div className="cart-title">
									<h4 title={item.title}>{item?.title}</h4>
								</div>
								<div className="cart-img">
									<img src={item?.img} alt={item?.title} />
								</div>
								<p className="cart-price"> {item?.price} €</p>
								<p className="cart-count">x {item?.count}</p>
								<p className="cart-total">{(item?.price * item?.count).toFixed(2)} €</p>
								<button className="cart-delete" onClick={() => deleteItem(item)}>
									X
								</button>
							</div>
						);
					})}
			</div>
			<div className="checkout-container">
				<span className="cart-total-item">{itemInCart.length > 0 ? total() : null}</span>
				<NavLink className={itemInCart.length > 0 ? 'checkout' : null} to="/checkout">
					{' '}
					{itemInCart.length > 0 ? 'Checkout' : null}
				</NavLink>
			</div>
		</div>
	);
};

export default Cart;
