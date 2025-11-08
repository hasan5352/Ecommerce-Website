import dayjs from "dayjs";
import { Link } from "react-router";

export function OrderItem({ item, orderId }) {
	return (
		<>
			<div className="product-image-container">
				<img src={item.product.image} />
			</div>

			<div className="product-details">
				<div className="product-name"> {item.product.name} </div>
				<div className="product-delivery-date"> 
					Arriving on: {dayjs(item.estimatedDeliveryTimeMs).format("D MMMM, YYYY")} 
				</div>
				<div className="product-quantity"> Quantity: {item.quantity} </div>

				<button className="buy-again-button button-primary">
					<img className="buy-again-icon" src="images/icons/buy-again.png" />
					<span className="buy-again-message">Add to Cart</span>
				</button>
			</div>

			<div className="product-actions">
				<Link to={`/tracking/${orderId}/${item.productId}`}>
					<button className="track-package-button button-secondary">Track package </button>
				</Link>
			</div>
		</>
	);
}