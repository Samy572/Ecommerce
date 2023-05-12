import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Item = () => {
	const products = useSelector((state) => state.productReducer.products);
	console.log(products)
	return (
		<>
			<div className="card">
				{products &&
					products.slice(0, 10).map((product) => (
						<div key={product.id} className="card">
							<NavLink to={`/product/${product.id}`} key={product.id}>
								<h2>{product.title}</h2>
								<p>{product.description}</p>
								<img src={product.thumbnail} alt={product.title} />
								<p>{product.price + ' €'}</p>
							</NavLink>
						</div>
					))}
			</div>
		</>
	);
};

export default Item;
