import { useEffect } from "react";
import './DeliveryOption.css'

export function DeliveryOption({ date, price, productId, isChecked, setSelectedDate }){
	if (isChecked) {
		useEffect(()=>{
			setSelectedDate(date);
		}, [])
	}

	const displaySelectedDate = () => {setSelectedDate(date);}

  return (
		<div className="delivery-option">
			<input type="radio" className="delivery-option-input" 
				name={`delivery-option-${productId}`}
				defaultChecked={isChecked}
				onClick={displaySelectedDate}
			/>

			<div>
				<div className="delivery-option-date"> {date} </div>
				<div className="delivery-option-price"> {price} - Shipping </div>
			</div>
		</div>
	);
}