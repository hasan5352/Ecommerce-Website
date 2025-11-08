import './CheckoutHeader.css';

export function CheckoutHeader({cart}) {
	let numItems = 0;
	cart.forEach(item => { numItems += item.quantity; });
	
	return (
		<div className="checkout-header">
			<div className="header-content">
				<div className="checkout-header-left-section">
					<a href="/">
						<img className="logo" src="shop-icon.png" />
					</a>
				</div>

				<div className="checkout-header-middle-section"> Checkout: {numItems} items </div>

				<div className="checkout-header-right-section">
					<img src="images/icons/checkout-lock-icon.png" />
				</div>
			</div>
		</div>
	);
}