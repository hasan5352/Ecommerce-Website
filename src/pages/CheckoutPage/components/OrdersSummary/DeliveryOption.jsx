
export function DeliveryOption({ date, price }){
  return (
		<div className="delivery-option">
			<input type="radio" className="delivery-option-input" name="delivery-option-1" />
			<div>
				<div className="delivery-option-date"> {date} </div>
				<div className="delivery-option-price"> {price} - Shipping </div>
			</div>
		</div>
	);
}