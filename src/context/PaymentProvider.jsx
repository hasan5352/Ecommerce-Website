import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PaymentContext = createContext(null);

export default function PaymentProvider({ children }) {
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
