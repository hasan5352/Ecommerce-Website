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
	
  async function fetchCart() {
		let items = await fetch("/api/cart-items?expand=product");
		items = await items.json();
    // console.log(items[0]);
		setCart(items);
	}
  useEffect(()=>{ fetchCart(); }, []);
  
  const HeaderElem = <Header cart={cart} />;

  return (
    <Routes>
      <Route index element={
        <HomePage Header={HeaderElem} />
      } />

      <Route path='checkout' element={
        <CheckoutPage cart={cart} />
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
