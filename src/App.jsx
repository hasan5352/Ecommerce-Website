import { Routes, Route } from 'react-router'
import { useState, useEffect } from 'react';
import './App.css'
import { HomePage } from './pages/HomePage/HomePage';
import { CheckoutPage } from './pages/CheckoutPage/CheckoutPage';
import { OrdersPage } from './pages/OrdersPage/OrdersPage';
import { TrackingPage } from './pages/TrackingPage/TrackingPage';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { Header } from './components/Header';

function App() {
  const [cart, setCart] = useState([]);
	const [products, setAllProducts] = useState([]);
	
  async function fetchCart() {
		let items = await fetch("/api/cart-items");
		items = await items.json();
    // console.log(items);
		setCart(items);
	}
  async function fetchProducts() {
    let prods = await fetch("/api/products");
    prods = await prods.json();
    // console.log(prods[0]);
    setAllProducts(prods);
  }

  useEffect(()=>{ fetchCart(); }, []);
  useEffect(()=>{ fetchProducts(); }, []);
  
  const HeaderElem = <Header cart={cart} />;

  return (
    <Routes>
      <Route index element={
        <HomePage Header={HeaderElem} products={products} />
      } />

      <Route path='checkout' element={
        <CheckoutPage cart={cart} products={products} />
      } />

      <Route path='orders' element={
        <OrdersPage Header={HeaderElem} />
      } />

      <Route path='tracking' element={
        <TrackingPage Header={HeaderElem} />
      } />

      <Route path='*' element={
        <ErrorPage Header={HeaderElem} />
      } />

    </Routes>
  )
}

export default App
