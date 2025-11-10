import { NavLink, useNavigate } from 'react-router';
import './header.css';
import { useMemo, useRef } from 'react';

export function Header({ cart }) {
	let cartQuantity = useMemo(()=> cart.reduce((total, item) => total + item.quantity, 0), [cart]);

	let searchBar = useRef(null);
	const navigate = useNavigate();
	const searchProducts = () => { navigate(`/?search=${searchBar.current.value.trim()}`) }

	return (
		<div className="header">
			<div className="left-section">
				<NavLink to="/" className="header-link">
					<img className="logo" src="/shop-icon.png" />
				</NavLink>
			</div>

			<div className="middle-section">
				<input ref={searchBar} className="search-bar" type="text" placeholder="Search" />

				<button className="search-button" onClick={searchProducts}>
					<img className="search-icon" src="/images/icons/search-icon.png" />
				</button>
			</div>

			<div className="right-section">
				<NavLink className="orders-link header-link" to="/orders">
					<span className="orders-text">Orders</span>
				</NavLink>

				<NavLink className="cart-link header-link" to="/checkout">
					<img className="cart-icon" src="/images/icons/cart-icon.png" />
					<div className="cart-quantity"> {cartQuantity} </div>
					<div className="cart-text">Cart</div>
				</NavLink>
			</div>
		</div>	
	);
}