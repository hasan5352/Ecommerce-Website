import { OrderContainer } from './components/OrderContainer';
import './OrdersPage.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export function OrdersPage({ Header }) {
	const [orders, setOrders] = useState(null);

	useEffect(()=>{
		axios.get("/api/orders?expand=products") .then((res)=>{
			// console.log(res.data);
			setOrders(res.data);
		})
	}, []);

	if (orders == null) return;
	return (
		<>
			<title>Shop-Orders</title>
			{Header}

			<div className="orders-page">
				<div className="page-title">Your Orders</div>

				<div className="orders-grid">
					{orders.map( o => <OrderContainer order={o} key={o.id} /> )}
				</div>
			</div>
		</>
	);
}
