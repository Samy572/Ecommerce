import React from 'react';
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
		const newProduct = product.filter((el) => el.category === category);
		return setProductCategory(newProduct);
	};

	return (
		<>
			<div className="products">
				<div className="container-products">
					<h4>Select your Category</h4>
					<nav>
						<ul className="category">
							<Category
								category="earbuds"
								onCategoryClick={() => filterProductsByCategory('earbuds')}
							/>
							<Category
								category="headphones"
								onCategoryClick={() => filterProductsByCategory('headphones')}
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
					<div className="container-card">
						<Item products={productCategory} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Products;
