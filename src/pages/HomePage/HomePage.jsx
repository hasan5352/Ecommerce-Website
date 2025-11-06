import { useState, useEffect, use } from 'react';
import './HomePage.css';
import { Header } from '../../components/Header';
import { Product } from './Product';
import { products } from '../../../data/products';

export function HomePage(){
	const [allProducts, setAllProducts] = useState([]);

	async function fetchProducts() {
		let prods = await fetch("http://localhost:3000/api/products");
		prods = await prods.json();
		setAllProducts(prods);
	}
	useEffect(()=>{ fetchProducts(); }, []);
	
	return (
		<>
			<Header />

			<div className="products-grid home-page">

				{allProducts.map((p) => (
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