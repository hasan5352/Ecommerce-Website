import { DeliveryOption } from "./DeliveryOption";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import './CartItem.css'

export function CartItem({ productImg, title, price, quantity, creationDate, productId }){
	const [deliveryOpts, setdeliveryOpts] = useState([]);
	let [selectedDate, setSelectedDate] = useState("");

	async function fetchDeliveryOptions(){
		let delOpts = await fetch("/api/delivery-options");
		delOpts = await delOpts.json();
		// console.log(delOpts[0])
		setdeliveryOpts(delOpts);
	}
	useEffect(() => {fetchDeliveryOptions()}, []);
	
  return (
		<div className="cart-item-container">
			<div className="delivery-date"> Delivery date: {selectedDate} </div>

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
					
					{deliveryOpts.map((d) => {
						const cost = (d.priceCents === 0)? "Free" : d.priceCents / 100;
						const delDate = dayjs(creationDate).add(d.deliveryDays, 'day').format("dddd, MMMM D");
						
						return (
							<DeliveryOption date={delDate} price={cost} setSelectedDate={setSelectedDate}
								key={d.id} productId={productId} isChecked={d.priceCents === 0}
							/>
						)
					})}

				</div>
			</div>
		</div>
	);
}