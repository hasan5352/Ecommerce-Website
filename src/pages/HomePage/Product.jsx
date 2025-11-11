import './HomePage.css';
import { useContext, useRef } from 'react';
import QuantityDropdown from '../../components/QuantityDropdown';
import { CartContext } from '../../context/CartProvider';
import { PaymentContext } from '../../context/PaymentProvider'

export default function Product({ product }) {
	const buyQuantity = useRef(null);
	const addedToCartElem = useRef(null)
	const {addProductToCartInBackend, loadCart} = useContext(CartContext);
	const {fetchPaymentSummary} = useContext(PaymentContext);

	return (
		<div className="product-container">
			<div className="product-image-container">
				<img className="product-image" data-testid="product-image" src={product.image} />
			</div>

			<div className="product-name limit-text-to-2-lines"> {product.name} </div>

			<div className="product-rating-container">
				<img className="product-rating-stars" data-testid="ratings-image"
					src={`/images/ratings/rating-${product.rating.stars * 10}.png`} />
				<div className="product-rating-count link-primary"> {product.rating.count} </div>
			</div>

			<div className="product-price"> ${product.priceCents / 100} </div>
			<div className="product-quantity-container"> <QuantityDropdown ref={buyQuantity} /> </div>

			<div className="product-spacer"></div>

			<div ref={addedToCartElem} className="added-to-cart">
				<img src="images/icons/checkmark.png" /> Added
			</div>

			<button className="add-to-cart-button button-primary" data-testid="add-to-cart-button" 
				onClick={async ()=>{
					await addProductToCartInBackend(product.id, buyQuantity.current.value);
					loadCart(); fetchPaymentSummary();
					
					addedToCartElem.current.classList.add("opacity-1");
					setTimeout(()=>{ addedToCartElem.current.classList.remove("opacity-1") }, 2000);
				}} > 
				Add to Cart 
			</button>
		</div>	
	);
}