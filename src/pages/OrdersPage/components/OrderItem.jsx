import dayjs from "dayjs";
import { Link } from "react-router";
import axios from "axios";

export function OrderItem({ item, orderId, addProductToCart }) {
	
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

				<button className="buy-again-button button-primary" 
					onClick={()=>{addProductToCart(item.productId, item.quantity)}} >
					<img className="buy-again-icon" src="images/icons/buy-again.png" />
					<span className="buy-again-message"> Re-order </span>
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