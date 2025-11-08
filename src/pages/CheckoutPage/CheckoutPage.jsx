
import './CheckoutPage.css';
import { CheckoutHeader } from './components/CheckoutHeader/CheckoutHeader';
import { PaymentBox } from './components/PaymentBox/PaymentBox';
import { OrdersSummary } from './components/OrdersSummary/OrdersSummary';
import { useState } from 'react';

export function CheckoutPage({ cart, loadCart }){
	const [paymentSummary, setPaymentSummary] = useState(null);
	async function fetchPaymentSummary() {
		let data = await fetch("/api/payment-summary");
		data = await data.json();
		// console.log(data)
		setPaymentSummary(data);
	}
	return (
		<>
			<title>Shop-Checkout</title>
			<CheckoutHeader cart={cart} />

			<div className="checkout-page">
				<div className="page-title">Review your order</div>

				<div className="checkout-grid">
					<OrdersSummary loadCart={loadCart} cart={cart} fetchPaymentSummary={fetchPaymentSummary} />
					<PaymentBox paymentSummary={paymentSummary} fetchPaymentSummary={fetchPaymentSummary} />
				</div>
			</div>
		</>
	);
}