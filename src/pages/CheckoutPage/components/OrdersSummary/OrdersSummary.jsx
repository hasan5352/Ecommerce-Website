import { CartItem } from "./CartItem";

export function OrdersSummary({ cart }) {
  return (
		<div className="order-summary">

			{cart.map((p) => {
				return ( <CartItem productImg={p.product.image} title={p.product.name} 
						key={p.product.id} creationDate={p.createdAt} deliveryOptId={p.deliveryOptId}
						price={p.product.priceCents / 100} quantity={p.quantity} productId={p.productId}
				/> )
			})}

		</div>
	);
}