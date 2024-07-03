import React, { useState } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import shoppingCart from "../assets/shopping-cart.svg";

const FloatingCartModal = () => {
  const cartValues = useSelector((state) => state.cart);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(!showModal)}
        className="fixed py-2 px-4 top-5 right-5 bg-slate-100 rounded flex justify-center items-center"
      >
        <img className="w-6 h-6 mr-4" src={shoppingCart} alt="" />
        <span className="text-lg font-semibold">
          View your cart : {cartValues.cartItems.length}
        </span>
      </button>
      {showModal &&
        createPortal(
          <Cart onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
};

export default FloatingCartModal;
