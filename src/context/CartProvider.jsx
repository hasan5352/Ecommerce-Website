import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CartContext = createContext(null);

export default function CartProvider({ children }) {
  const [cart, setCart] = useState(()=>{
    const saved = localStorage.getItem("cart");
    return saved? JSON.parse(saved) : null;
  });
  async function loadCart() {
    let items = await axios.get("/api/cart-items?expand=product");
    setCart(items.data);
    localStorage.setItem("cart", JSON.stringify(items.data));
    // console.log(items.data);
  }
  useEffect(()=>{ if (!cart) loadCart(); }, []);

  async function addProductToCartInBackend(productId, quantity){
    await axios.post("/api/cart-items", { productId: productId, quantity: Number(quantity) });
  }

  if (!cart) return;
  return (
    <CartContext.Provider value={{
      cart: cart, addProductToCartInBackend: addProductToCartInBackend,
      loadCart: loadCart
    }}>
      {children}
    </CartContext.Provider>
  )
}
