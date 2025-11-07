import { CartItem } from "./CartItem";

export function OrdersSummary({ cart }) {
  return (
		<div className="order-summary">

			{cart.map(p => <CartItem item={p} key={p.product.id} /> )}

		</div>
	);
}