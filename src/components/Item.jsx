import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Item = ({ products }) => {
	const dispatch = useDispatch();

	return (
		<>
			{products &&
				products?.map((product) => (
					<div key={product.id} className="card">
						<NavLink to={`/product/${product.id}`} key={product.id}>
							<div className="container-product-img">
								<img src={product.img} alt={product.title} />
							</div>
							<div className="container-product-infos">
								<h3>{product.title}</h3>
								<span>{product.price + ' €'}</span>
							</div>
						</NavLink>
					</div>
				))}
		</>
	);
};

export default Item;
