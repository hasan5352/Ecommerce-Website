
import './CheckoutPage.css';
import { CheckoutHeader } from './components/CheckoutHeader/CheckoutHeader';
import { PaymentBox } from './components/PaymentBox/PaymentBox';
import { OrdersSummary } from './components/OrdersSummary/OrdersSummary';

export function CheckoutPage({ cart, loadCart, paymentSummary, fetchPaymentSummary  }){
	if (!paymentSummary) return;
	return (
		<>
			<title>Shop-Checkout</title>
			<CheckoutHeader cart={cart} />

			<div className="checkout-page">
				<div className="page-title">Review your order</div>
				<div className="checkout-grid">
					<OrdersSummary loadCart={loadCart} cart={cart} fetchPaymentSummary={fetchPaymentSummary} />
					<PaymentBox paymentSummary={paymentSummary} loadCart={loadCart}	/>
				</div>
			</div>
		</>
	);
}