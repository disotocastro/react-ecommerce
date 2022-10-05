import React, { useContext } from 'react'; // Hook para trabajar con el estado
import '../styles/ProductItem.scss';
import add_to_cart from '@icons/bt_add_to_cart.svg';
import AppContext from '../context/AppContext';

const ProductItem = ({ product }) => {
	//estado y funcion modificadora

	const { addToCart } = useContext(AppContext);

	const handleClick = item => {
		addToCart(item);
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)} >
					<img src={add_to_cart} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;