import React from 'react';
import Header from '../components/Header';
import Item from '../components/Item';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Category from '../components/Category';

const Products = () => {
	const product = useSelector((state) => state.productReducer);
	const [productCategory, setProductCategory] = useState([]);

	useEffect(() => {
		setProductCategory(product);
	}, [product]);

	// Filter by category
	const filterProductsByCategory = (category) => {
		let newProduct = [];
		for (let i = 0; i < product.length; i++) {
			if (product[i].category === category) {
				newProduct.push(product[i]);
			}
		}
		return setProductCategory(newProduct);
	};

	return (
		<div>
			<Header />
			<div className="container">
				<div className="search">
					<input id="search" type="search" />
					<label htmlFor="search">Rechercher</label>
				</div>
				<nav>
					<ul
						style={{ display: 'flex', listStyle: 'none', justifyContent: 'space-around' }}
					>
						<Category
							category="Earbuds"
							onCategoryClick={() => filterProductsByCategory('earbuds')}
						/>
						<Category
							category="headphone"
							onCategoryClick={() => filterProductsByCategory('headphone')}
						/>
						<Category
							category="speaker"
							onCategoryClick={() => filterProductsByCategory('speaker')}
						/>
						<Category
							category="watch"
							onCategoryClick={() => filterProductsByCategory('watch')}
						/>
					</ul>
				</nav>
				<Item products={productCategory} />
			</div>
		</div>
	);
};

export default Products;
