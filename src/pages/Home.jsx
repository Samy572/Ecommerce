import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sales from '../components/Sales';
import Products from './Products';
import Newsletter from '../components/Newsletter';

const Home = () => {
	return (
		<div className="home">
			<Header />
			<Sales />
			<Products />
			<Newsletter />
			<Footer />
		</div>
	);
};

export default Home;
