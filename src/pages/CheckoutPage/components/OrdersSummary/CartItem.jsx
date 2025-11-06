import { DeliveryOption } from "./DeliveryOption";

export function CartItem({ productImg, title, price, quantity }){
  return (
		<div className="cart-item-container">
			<div className="delivery-date"> Delivery date: Tuesday, June 21 </div>

			<div className="cart-item-details-grid">
				<img className="product-image" src={productImg} />

				<div className="cart-item-details">
					<div className="product-name"> {title} </div>
					<div className="product-price"> ${price} </div>

					<div className="product-quantity">
						<span> Quantity: <span className="quantity-label">{quantity}</span> </span>
						<span className="update-quantity-link link-primary"> Update </span>
						<span className="delete-quantity-link link-primary"> Delete </span>
					</div>
				</div>

				<div className="delivery-options">
					<div className="delivery-options-title"> Choose a delivery option: </div>
					<DeliveryOption date="Tuesday, June 21" price={"FREE"} />
					<DeliveryOption date="Wednesday, June 15" price={"$4.99"} />
					<DeliveryOption date="Monday, June 13" price={"$9.99"} />
				</div>
			</div>
		</div>
	);
}