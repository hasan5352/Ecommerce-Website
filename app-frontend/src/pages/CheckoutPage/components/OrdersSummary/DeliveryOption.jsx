import { useContext, useEffect, useRef } from "react";
import './DeliveryOption.css'
import dayjs from "dayjs";
import axios from "axios";
import { PaymentContext } from '../../../../context/PaymentProvider';

export default function DeliveryOption({ opt, productId, setSelectedDate }){
	if (opt.priceCents == 0) {
		useEffect(()=>{
			setSelectedDate(date);
		}, [])
	}
	const price = (opt.priceCents === 0)? "Free" : opt.priceCents / 100;
	const date = dayjs().add(opt.deliveryDays, 'day').format("dddd, MMMM D");
	const radio = useRef(null);
	const { fetchPaymentSummary } = useContext(PaymentContext);

	async function selectCurrentOption() {
		setSelectedDate(date);
		radio.current.checked = true;
		await axios.put(`/api/cart-items/${productId}`, {deliveryOptionId: opt.id});
		fetchPaymentSummary()
	}

  return (
		<div className="delivery-option" onClick={selectCurrentOption}>
			<input type="radio" className="delivery-option-input" 
				name={`delivery-option-${productId}`}
				defaultChecked={opt.priceCents == 0} ref={radio}
			/>

			<div>
				<div className="delivery-option-date"> {date} </div>
				<div className="delivery-option-price"> {price} - Shipping </div>
			</div>
		</div>
	);
}