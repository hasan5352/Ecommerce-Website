import { CartItem } from "./CartItem";

export function OrdersSummary({ cart, cartProducts }) {
	let i = 0;
  return (
		<div className="order-summary">

			{cartProducts.map((p) => {
				// return (<CartItem productImg={p.image}
				// 	title={p.name} key={p.id}
				// 	price={p.priceCents / 100} quantity={cart[i++].quantity}
				// />)
			})}

		</div>
	);
}