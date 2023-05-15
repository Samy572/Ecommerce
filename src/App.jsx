import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/produits" element={<Products />}></Route>
				<Route path="/contact" element={<Contact />}></Route>
				<Route path="/panier" element={<Cart />}></Route>
				<Route path="/product/:id" element={<ProductDetail />}></Route>
				<Route path="*" element={<Home />}></Route>
			</Routes>
		</>
	);
}

export default App;
