import React, { useState, useContext } from 'react';
import '@styles/Header.scss';

import icon_menu from '@icons/icon_menu.svg';
import logo_yard_sale from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import AppContext from '../context/AppContext';
import MyOrder from '@containers/MyOrder';

import Menu from '@components/Menu'

const Header = () => {
	const [toggle, setToggle] = useState(false);
	const [toggleOrders, settoggleOrders] = useState(false);

	const { state } = useContext(AppContext);

	const handleToggle = () => {
		setToggle(!toggle);
	}

	return (
		<nav>
			<img src={icon_menu} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={logo_yard_sale} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleToggle}>
						platzi@example.com
					</li>
					<li
						className="navbar-shopping-cart"
						onClick={() => settoggleOrders(!toggleOrders)}>
						<img src={shoppingCart} alt="shopping cart" />
						{state.cart.lenght > 0 ? <div>{state.cart.lenght}</div> : null}
					</li>
				</ul>
			</div>
			{toggle ? <Menu /> : null}
			{toggleOrders ? <MyOrder /> : null}

		</nav>
	);
}

export default Header;
