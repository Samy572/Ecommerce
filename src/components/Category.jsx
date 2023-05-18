import React from 'react';

const Category = ({ category, onCategoryClick }) => {
	return <li onClick={onCategoryClick}>{category}</li>;
};

export default Category;
