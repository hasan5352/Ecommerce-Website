
import './CheckoutPage.css';
import { CheckoutHeader } from './components/CheckoutHeader/CheckoutHeader';
import { PaymentBox } from './components/PaymentBox/PaymentBox';
import { OrdersSummary } from './components/OrdersSummary/OrdersSummary';


export function CheckoutPage({ cart }){
	return (
		<>
			<title>Shop-Checkout</title>
			<CheckoutHeader />

			<div className="checkout-page">
				<div className="page-title">Review your order</div>

				<div className="checkout-grid">
					<OrdersSummary cart={cart} />
					<PaymentBox />
				</div>
			</div>
		</>
	);
}