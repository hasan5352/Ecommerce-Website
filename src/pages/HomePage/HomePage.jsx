import './HomePage.css';
import { Product } from './Product';
import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router';

import axios from 'axios';

export function HomePage({ Header, addProductToCart }){
	const [products, setAllProducts] = useState([]);
	const location = useLocation();
	let q = (location.search)? location.search : "";
	
	async function fetchProducts() {
		let prods = await axios.get(`/api/products/${q}`);
		// console.log(prods[0]);
		setAllProducts(prods.data);
	}
	useEffect(()=>{ fetchProducts(); }, [q]);

	return (
		<>
			{Header}

			<div className="products-grid home-page">
				{products.map(p => <Product addProductToCart={addProductToCart} product={p} key={p.id} /> )}
			</div>
		</>
	);
}