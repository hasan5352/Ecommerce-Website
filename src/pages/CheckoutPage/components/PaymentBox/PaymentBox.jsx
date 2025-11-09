import { useEffect, useState } from 'react';
import './PaymentBox.css'
import axios from 'axios';
import { useNavigate } from 'react-router';

export function PaymentBox({ paymentSummary, fetchPaymentSummary, loadCart }) {
	useEffect(()=>{
		fetchPaymentSummary();
	}, []);

	const navigate = useNavigate();
	async function createOrder(params) {
		await axios.post("/api/orders");
		await loadCart();
		navigate("/orders");
	}

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

			<button className="place-order-button button-primary" onClick={createOrder}> Place your order </button>
		</div>	
	);
}