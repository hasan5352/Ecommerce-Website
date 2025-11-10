import './HomePage.css';
import { Product } from './Product';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

import axios from 'axios';

export function HomePage({ Header, addProductToCart }){
	const location = useLocation();
	let q = (location.search)? location.search : "?all";
	const savedProducts = localStorage.getItem("products"+q);
	const [products, setAllProducts] = useState(null);

	async function fetchProducts() {
		if (savedProducts) {
			setAllProducts(JSON.parse(savedProducts));
			return;
		}
		let prods = await axios.get(`/api/products/${q}`);
		setAllProducts(prods.data);
		localStorage.setItem("products"+q, JSON.stringify(prods.data));
	}
	useEffect(()=>{ fetchProducts(); }, [q]);

	if (!products) return;
	return (
		<>
			{Header}

			<div className="products-grid home-page">
				{products.map(p => <Product addProductToCart={addProductToCart} product={p} key={p.id} /> )}
			</div>
		</>
	);
}