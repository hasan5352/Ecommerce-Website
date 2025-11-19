
import './CheckoutPage.css';
import CheckoutHeader from './components/CheckoutHeader/CheckoutHeader';
import PaymentBox from './components/PaymentBox/PaymentBox';
import OrdersSummary from './components/OrdersSummary/OrdersSummary';

export default function CheckoutPage(){
	return (
		<>
			<title>Shop-Checkout</title>
			<CheckoutHeader />

			<div className="checkout-page">
				<div className="page-title">Review your order</div>
				<div className="checkout-grid">
					<OrdersSummary />
					<PaymentBox />
				</div>
			</div>
		</>
	);
}