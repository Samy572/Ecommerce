import React from 'react';
import Header from '../components/Header';
import Item from '../components/Item';
import { useEffect, useState } from 'react';


const Products = () => {

	return (
		<div>
			<Header />
			<div className="container">
				<Item />
			</div>
		</div>
	);
};

export default Products;
