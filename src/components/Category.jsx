import React from 'react';

const Category = ({ category, onCategoryClick }) => {
	return (
		<li onClick={onCategoryClick}>
			<img className="category-img" src={`/category/${category}.jpg`} alt={category} />
		</li>
	);
};

export default Category;
