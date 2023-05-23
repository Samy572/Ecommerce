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
			<div className="container-product-detail">
				<div className="container-img-title-description">
					<img
						className="img-product-detail"
						src={itemSelected?.img}
						alt={itemSelected?.title}
					/>
					<h2>{itemSelected?.title}</h2>
					<p>{itemSelected?.description}</p>
				</div>

				<AddProduct price={itemSelected.price} itemSelected={itemSelected} />
			</div>
		</div>
	);
};

export default ProductDetail;
