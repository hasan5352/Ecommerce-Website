import { CartItem } from "./CartItem";

export function OrdersSummary({ cart, loadCart, fetchPaymentSummary }) {
  return (
		<div className="order-summary">

			{cart.map(p => <CartItem fetchPaymentSummary={fetchPaymentSummary} loadCart={loadCart} 
				item={p} key={p.product.id} /> 
			)}

		</div>
	);
}