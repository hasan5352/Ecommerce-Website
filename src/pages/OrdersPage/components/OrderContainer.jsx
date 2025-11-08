import dayjs from "dayjs";
import { OrderItem } from "./OrderItem";

export function OrderContainer({ order }) {
  return (
		<div className="order-container">
			<div className="order-header">
				<div className="order-header-left-section">
					<div className="order-date">
						<div className="order-header-label">Order Placed:</div>
						<div> {dayjs(order.orderTimeMs).format("D MMMM, YYYY")} </div>
					</div>
					<div className="order-total">
						<div className="order-header-label">Total:</div>
						<div>${order.totalCostCents / 100}</div>
					</div>
				</div>

				<div className="order-header-right-section">
					<div className="order-header-label">Order ID:</div>
					<div>{order.id}</div>
				</div>
			</div>

			<div className="order-details-grid">
				{order.products.map(p =>  <OrderItem key={p.productId} item={p} orderId={order.id} /> )}
			</div>
		</div>
	);
}