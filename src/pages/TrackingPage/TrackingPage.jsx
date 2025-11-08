import './TrackingPage.css';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import { Link } from 'react-router';

export function TrackingPage({ Header }) {
	const {orderId, productId} = useParams();
	const [product, setProduct] = useState(null);
	const [deliveryPercent, setdeliveryPercent] = useState(null);

	useEffect(()=>{
		axios.get(`/api/orders/${orderId}?expand=products`) .then((res) => {
			// console.log(res.data);
			const prod = res.data.products.find(p => p.productId === productId);
			setProduct(prod);
			const totalDelTime = prod.estimatedDeliveryTimeMs - res.data.orderTimeMs;
			const timePassed = dayjs().valueOf() - res.data.orderTimeMs
			let delPercent = (timePassed / totalDelTime)*100;
			if (delPercent > 100) delPercent = 100;
			// console.log(delPercent);
			setdeliveryPercent(delPercent);
		})
	}, [orderId])

	if(!product) return;
	return (
		<>
			<title>Shop-Tracking</title>
			{Header}

			<div className="tracking-page">
				<div className="order-tracking">
					<Link className="back-to-orders-link link-primary" to="/orders"> View all orders </Link>
					<div className="delivery-date"> 
						Arriving on {dayjs(product.estimatedDeliveryTimeMs).format("D MMMM, YYYY")}
					</div>

					<div className="product-info"> {product.product.name} </div>
					<div className="product-info"> Quantity: {product.quantity} </div>
					<img className="product-image" src={"/" + product.product.image} />

					<div className="progress-labels-container">
						<div className="progress-label"> Preparing </div>
						<div className="progress-label current-status"> Shipped </div>
						<div className="progress-label"> Delivered </div>
					</div>

					<div className="progress-bar-container"> 
						<div className="progress-bar" style={{width: `${deliveryPercent}%`}}></div> 
					</div>
				</div>
			</div>
		</>
	);
}