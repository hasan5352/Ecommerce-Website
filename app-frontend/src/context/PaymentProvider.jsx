import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PaymentContext = createContext(null);

export default function PaymentProvider({ children }) {
	const [paymentSummary, setPaymentSummary] = useState(null)
  
  async function fetchPaymentSummary() {
    const totalPay = await axios.get("/api/payment-summary");
    setPaymentSummary(totalPay.data);
    // console.log(totalPay.data);
  }

  useEffect(()=>{ if (!paymentSummary) fetchPaymentSummary(); }, []);

  if (!paymentSummary) return;
  return (
    <PaymentContext.Provider value={{
      paymentSummary: paymentSummary, fetchPaymentSummary: fetchPaymentSummary
    }}>
			{children}
    </PaymentContext.Provider>
  )
}
