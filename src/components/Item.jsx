import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Item = ({ products }) => {
	const dispatch = useDispatch();

	return (
		<div className="card">
			{products &&
				products?.map((product) => (
					<div key={product.id} className="card">
						<NavLink to={`/product/${product.id}`} key={product.id}>
							<h2>{product.title}</h2>
							<p>{product.description}</p>
							<img src={product.img} alt={product.title} />
							<p>{product.price + ' €'}</p>
						</NavLink>
					</div>
				))}
		</div>
	);
};

export default Item;
