import './HomePage.css';
import { Product } from './Product';
import { useState, useEffect } from 'react';

export function HomePage({ Header }){
	const [products, setAllProducts] = useState([]);
	
	async function fetchProducts() {
		let prods = await fetch("/api/products");
		prods = await prods.json();
		// console.log(prods[0]);
		setAllProducts(prods);
	}
	useEffect(()=>{ fetchProducts(); }, []);

	return (
		<>
			{Header}

			<div className="products-grid home-page">

				{products.map((p) => (
					<Product productImg={p.image}
						title={p.name}
						ratingImg={`images/ratings/rating-${p.rating.stars * 10}.png`}
						reviews={p.rating.count} price={p.priceCents / 100} key={p.id}
					/>
				))}
			
			</div>
		</>
	);
}