import './HomePage.css';
import Product from './Product';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';

export default function HomePage({ Header }){
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
		console.log(prods.data.length);
		setAllProducts(prods.data);
		// if (prods.data.length) localStorage.setItem("products"+q, JSON.stringify(prods.data));
	}
	useEffect(()=>{ fetchProducts(); }, [q]);

	if (!products) return;
	return (
		<>
			{Header}
			{products.length == 0 && <h1>No matching products to display!</h1>}
			<div className="products-grid home-page">
				
				{products.map(p => <Product product={p} key={p.id} /> )}
			</div>
		</>
	);
}