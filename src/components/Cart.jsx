import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = ({ onClose }) => {
  const cartValues = useSelector((state) => state.cart);
  console.log(cartValues);
  const dispatch = useDispatch();
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-slate-700/75 flex justify-center items-center"
    >
      <div
        className="z-20 relative bg-slate-300 text-slate-900 min-w-[400px] md:min-w-[700px] px-10 pt-10 pb-6 rounded border border-slate-600 mb-[10vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 w-7 h-7 bg-red-600 text-slate-100 rounded flex justify-center items-center"
        >
          X
        </button>
        <ul>
          {cartValues.cartItems.length > 0 ? (
            cartValues.cartItems.map((item) => (
              <li key={item.id} className="flex items-center mb-4">
                <img
                  src={`/images/${item.img}.png`}
                  alt={item.title}
                  className="w-16 h-16 rounded"
                />
                <p className="mr-auto ml-2 text-lg font-semibold">
                  {item.title}
                </p>
                <select className="w-20 p-2 rounded mr-4" name="quantity">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
                <p className="bg-slate-900 text-slate-200 px-2 inline-flex items-center justify-center rounded p-2">
                  Remove from cart
                </p>
              </li>
            ))
          ) : (
            <li className="mb-4">Add some items to your cart...</li>
          )}
        </ul>
        <p className="text-xl">
          Your total :<span className="font-semibold">$</span>
        </p>
        <button className="block mx-auto bg-slate-800 text-slate-200 rounded px-4 py-2 mt-7">
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
