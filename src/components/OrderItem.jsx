import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/OrderItem.scss';
import close_icon from '@icons/icon_close.png';

const OrderItem = ({ product }) => {
	const { removeItem } = useContext(AppContext);
	const handleRemove = product => {
		removeItem(product)
	}
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[1]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={close_icon} alt="close" onClick={() => handleRemove(product)} />
		</div>
	);
}

export default OrderItem;