import { useContext } from "react";
import CartItem from "./CartItem";
import { CartContext } from "../../../../context/CartProvider";

export default function OrdersSummary() {
	const { cart } = useContext(CartContext);
  return (
		<div className="order-summary">
			{cart.map(p => <CartItem item={p} key={p.product.id} /> )}
		</div>
	);
}