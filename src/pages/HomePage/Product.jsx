import './HomePage.css';
import { useRef } from 'react';
import { QuantityDropdown } from '../../components/QuantityDropdown';

export function Product({ product, addProductToCart }) {
	const buyQuantity = useRef(null);
	
	return (
		<div className="product-container">
			<div className="product-image-container">
				<img className="product-image" src={product.image} />
			</div>

			<div className="product-name limit-text-to-2-lines"> {product.name} </div>

			<div className="product-rating-container">
				<img className="product-rating-stars" src={`/images/ratings/rating-${product.rating.stars * 10}.png`} />
				<div className="product-rating-count link-primary"> {product.rating.count} </div>
			</div>

			<div className="product-price"> ${product.priceCents / 100} </div>

			<div className="product-quantity-container">
				<QuantityDropdown ref={buyQuantity} />
			</div>

			<div className="product-spacer"></div>

			<div className="added-to-cart">
				<img src="images/icons/checkmark.png" /> Added
			</div>

			<button className="add-to-cart-button button-primary" 
				onClick={()=>{addProductToCart(product.id, buyQuantity.current.value)}} > 
				Add to Cart 
			</button>
		</div>	
	);
}