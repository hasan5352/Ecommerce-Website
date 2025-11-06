import { CartItem } from "./CartItem";

export function OrdersSummary({ cart }) {
	let i = 0;
  return (
		<div className="order-summary">

			{cart.map((p) => {
				return ( 
					<CartItem productImg={p.product.image} title={p.product.name} key={p.product.id}
						price={p.product.priceCents / 100} quantity={p.quantity}
					/>
			)})}

		</div>
	);
}