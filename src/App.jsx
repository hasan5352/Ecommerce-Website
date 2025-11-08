import { Routes, Route } from 'react-router'
import { useState, useEffect } from 'react';
import './App.css'
import { HomePage } from './pages/HomePage/HomePage';
import { CheckoutPage } from './pages/CheckoutPage/CheckoutPage';
import { OrdersPage } from './pages/OrdersPage/OrdersPage';
import { TrackingPage } from './pages/TrackingPage/TrackingPage';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { Header } from './components/Header';
import axios from 'axios';

function App() {
  const [cart, setCart] = useState([]);
	
  async function fetchCart() {
		let items = await axios.get("/api/cart-items?expand=product");
    // console.log(items.data);
		setCart(items.data);
	}
  useEffect(()=>{ fetchCart(); }, []);
  
  const HeaderElem = <Header cart={cart} />;

  return (
    <Routes>
      <Route index element={
        <HomePage Header={HeaderElem} loadCart={fetchCart} />
      } />

      <Route path='checkout' element={
        <CheckoutPage cart={cart} loadCart={fetchCart} />
      } />

      <Route path='orders' element={
        <OrdersPage Header={HeaderElem} />
      } />

      <Route path='/tracking/:orderId/:productId' element={
        <TrackingPage Header={HeaderElem} />
      } />

      <Route path='*' element={
        <ErrorPage Header={HeaderElem} />
      } />

    </Routes>
  )
}

export default App
