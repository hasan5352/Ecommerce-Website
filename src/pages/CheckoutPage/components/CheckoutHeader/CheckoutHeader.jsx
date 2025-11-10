import './CheckoutHeader.css';
import { useMemo } from 'react';

export function CheckoutHeader({cart}) {
	let cartQuantity = useMemo(()=> cart.reduce((total, item) => total + item.quantity, 0), [cart]);
	
	return (
		<div className="checkout-header">
			<div className="header-content">
				<div className="checkout-header-left-section">
					<a href="/">
						<img className="logo" src="shop-icon.png" />
					</a>
				</div>

				<div className="checkout-header-middle-section"> Checkout: {cartQuantity} items </div>

				<div className="checkout-header-right-section">
					<img src="images/icons/checkout-lock-icon.png" />
				</div>
			</div>
		</div>
	);
}