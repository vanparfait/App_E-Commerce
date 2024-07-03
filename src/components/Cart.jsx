import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartValues = useSelector((state) => state.cart);
  return <div className="fixed inset-0 bg-slate-700/75">cart</div>;
};

export default Cart;
