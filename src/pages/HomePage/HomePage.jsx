import './HomePage.css';
import { Product } from './Product';
import { useState, useEffect } from 'react';

export function HomePage({ Header, loadCart }){
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
				{products.map(p => <Product loadCart={loadCart} product={p} key={p.id} /> )}
			</div>
		</>
	);
}