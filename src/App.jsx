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
  const [cart, setCart] = useState(()=>{
    const saved = localStorage.getItem("cart");
    return saved? JSON.parse(saved) : null;
  });
  const [paymentSummary, setPaymentSummary] = useState(()=>{
      const saved = JSON.parse(localStorage.getItem("totalPay"));
      return saved? saved : null;
  });

  async function fetchPaymentSummary() {
    const totalPay = await axios.get("/api/payment-summary");
    setPaymentSummary(totalPay.data);
    localStorage.setItem("totalPay", JSON.stringify(totalPay.data));
    // console.log(totalPay.data);
  }
  async function fetchCart() {
    let items = await axios.get("/api/cart-items?expand=product");
    setCart(items.data);
    localStorage.setItem("cart", JSON.stringify(items.data));
    // console.log(items.data);
  }
  
  useEffect(()=>{ if (!cart) fetchCart(); }, []);
  useEffect(()=>{ if (!paymentSummary) fetchPaymentSummary(); }, []);
    
  async function addProductToCart(id, quantity){
		await axios.post("/api/cart-items", { productId: id, quantity: Number(quantity) });
		await fetchCart();
    await fetchPaymentSummary();
	}

  const HeaderElem = <Header cart={cart} />;

  if (!cart) return;
  return (
    <Routes>
      <Route index element={
        <HomePage Header={HeaderElem} addProductToCart={addProductToCart} />
      } />

      <Route path='checkout' element={
        <CheckoutPage cart={cart} loadCart={fetchCart} 
          fetchPaymentSummary={fetchPaymentSummary} paymentSummary={paymentSummary} />
      } />

      <Route path='orders' element={
        <OrdersPage Header={HeaderElem} addProductToCart={addProductToCart} />
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
