
import './CheckoutPage.css';
import { CheckoutHeader } from './components/CheckoutHeader/CheckoutHeader';
import { PaymentBox } from './components/PaymentBox/PaymentBox';
import { OrdersSummary } from './components/OrdersSummary/OrdersSummary';


export function CheckoutPage({ cart, products }){
	const cartProducts = cart.map((item)=>{
		for (const p of products) if (p.id == item.productId) return p;
	})
	return (
		<>
			<title>Shop-Checkout</title>
			<CheckoutHeader />

			<div className="checkout-page">
				<div className="page-title">Review your order</div>

				<div className="checkout-grid">
					<OrdersSummary cartProducts={cartProducts} cart={cart} />
					<PaymentBox />
				</div>
			</div>
		</>
	);
}