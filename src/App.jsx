import { Routes, Route } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage/HomePage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import OrdersPage from './pages/OrdersPage/OrdersPage';
import TrackingPage from './pages/TrackingPage/TrackingPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Header from './components/Header';
import PaymentProvider from './context/PaymentProvider';
import CartProvider from './context/CartProvider';

function App() {
  return (
    <Routes>
      <Route index element={
        <CartProvider>
          <PaymentProvider> <HomePage Header={<Header />} /> </PaymentProvider>
        </CartProvider>
      } />

      <Route path='checkout' element={
        <CartProvider>
          <PaymentProvider> <CheckoutPage /> </PaymentProvider>
        </CartProvider>
      } />

      <Route path='orders' element={
        <CartProvider>
          <PaymentProvider> <OrdersPage Header={<Header />} /> </PaymentProvider>
        </CartProvider>
      } />

      <Route path='/tracking/:orderId/:productId' element={
        <CartProvider> <TrackingPage Header={<Header />} /> </CartProvider>
      } />

      <Route path='*' element={
        <CartProvider> <ErrorPage Header={<Header />} /> </CartProvider>
      } />

    </Routes>
  )
}

export default App
