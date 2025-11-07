import { useEffect, useState } from 'react';
import './PaymentBox.css'

export function PaymentBox() {
	const [paymentSummary, setPaymentSummary] = useState(null);
	async function fetchPaymentSummary() {
		let data = await fetch("/api/payment-summary");
		data = await data.json();
		// console.log(data)
		setPaymentSummary(data);
	}
	useEffect(()=>{
		fetchPaymentSummary();
	}, []);

	if (paymentSummary == null) return;
	return (
		<div className="payment-summary">
			<div className="payment-summary-title"> Payment Summary </div>

			<div className="payment-summary-row">
				<div>Items ({paymentSummary.totalItems}):</div>
				<div className="payment-summary-money">${paymentSummary.productCostCents / 100}</div>
			</div>

			<div className="payment-summary-row">
				<div>Shipping &amp; handling:</div>
				<div className="payment-summary-money">${paymentSummary.shippingCostCents / 100} </div>
			</div>

			<div className="payment-summary-row subtotal-row">
				<div>Total before tax:</div>
				<div className="payment-summary-money">${paymentSummary.totalCostBeforeTaxCents / 100} </div>
			</div>

			<div className="payment-summary-row">
				<div>Estimated tax (10%):</div>
				<div className="payment-summary-money">${paymentSummary.taxCents / 100} </div>
			</div>

			<div className="payment-summary-row total-row">
				<div>Order total:</div>
				<div className="payment-summary-money">${paymentSummary.totalCostCents / 100} </div>
			</div>

			<button className="place-order-button button-primary"> Place your order </button>
		</div>	
	);
}