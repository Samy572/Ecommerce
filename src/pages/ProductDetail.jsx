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
			<div className="container-item-selected">
				<div className="container-img-title-description">
					<h2 className='title-item-selected'>{itemSelected?.title}</h2>
					<img
						className="img-product-detail"
						src={itemSelected?.img}
						alt={itemSelected?.title}
					/>

					<p>{itemSelected?.description}</p>
				</div>

				<AddProduct price={itemSelected.price} itemSelected={itemSelected} />
			</div>
		</div>
	);
};

export default ProductDetail;
