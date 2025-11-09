import { DeliveryOption } from "./DeliveryOption";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import './CartItem.css'
import { QuantityDropdown } from '../../../../components/QuantityDropdown'

export function CartItem({ item, loadCart, fetchPaymentSummary }){
	const [deliveryOpts, setdeliveryOpts] = useState([]);
	const [selectedDate, setSelectedDate] = useState("");
	const [isEditing, setIsEditing] = useState(false);

	async function fetchDeliveryOptions(){
		let delOpts = await fetch("/api/delivery-options");
		delOpts = await delOpts.json();
		// console.log(delOpts[0])
		setdeliveryOpts(delOpts);
	}
	
	async function deleteCartItem(){
		await axios.delete(`/api/cart-items/${item.productId}`)
		await loadCart();
		fetchPaymentSummary();
	}

	useEffect(() => {fetchDeliveryOptions()}, []);

	const buyQuantity = useRef(null);
	async function updateEditingState() {
		if (isEditing) {
			await axios.put(`/api/cart-items/${item.productId}`, {
				quantity: Number(buyQuantity.current.value)
			});
			loadCart(); fetchPaymentSummary();
		}
		setIsEditing(!isEditing)
	}

  return (
		<div className="cart-item-container">
			<div className="delivery-date"> Delivery date: {selectedDate} </div>

			<div className="cart-item-details-grid">
				<img className="product-image" src={item.product.image} />

				<div className="cart-item-details">
					<div className="product-name"> {item.product.name} </div>
					<div className="product-price"> ${item.product.priceCents / 100} </div>

					<div className="product-quantity">
						<span> Quantity: <span className="quantity-label">
							{(isEditing)? <QuantityDropdown ref={buyQuantity} /> : item.quantity}
						</span> </span>
						<span className="update-quantity-link link-primary" onClick={updateEditingState}>
							{(isEditing)? "Save" : "Update"}
						</span>
						<span className="delete-quantity-link link-primary" onClick={deleteCartItem}> 
							Delete 
						</span>
					</div>
				</div>

				<div className="delivery-options">
					<div className="delivery-options-title"> Choose a delivery option: </div>
						{deliveryOpts.map((d) => 
							<DeliveryOption opt={d} setSelectedDate={setSelectedDate} key={d.id} 
								productId={item.productId} fetchPaymentSummary={fetchPaymentSummary} /> 
						)}
				</div>
			</div>
		</div>
	);
}