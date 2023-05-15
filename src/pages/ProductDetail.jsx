import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AddProduct from '../components/AddProduct';

const ProductDetail = () => {
	const { id } = useParams();
	const itemSelected = useSelector((state) => state.productReducer[id - 1]);
	console.log(itemSelected);
	return (
		<div>
			<Header />
			<div className="container">
				<h2>{itemSelected?.title}</h2>
				<p>{itemSelected?.description}</p>
				<img src={itemSelected?.img} alt={itemSelected?.title} />
				<p>{itemSelected?.price + ' €'}</p>
				<AddProduct itemSelected={itemSelected} />
			</div>
		</div>
	);
};

export default ProductDetail;
