import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsList } from "../features/products";

const ProductsList = () => {
  const productsValues = useSelector((state) => state.products);
  console.log(productsValues);
  const dispatch = useDispatch();

  if (!productsValues.items) dispatch(getProductsList());
  console.log(productsValues);
  return (
    <div className="px-6">
      <h1 className="text-slate-100 text-2xl mb-6">Here are our products</h1>
      <ul className="grid min-[500px]:grid-cols-2 md:grid-cols-3 gap-4">
        {productsValues.items &&
          productsValues.items.map((item) => (
            <li className="p-4 bg-slate-200 rounded" key={item.id}>
              <img
                src={`/images/${item.img}.png`}
                className="mb-4"
                alt={item.title}
              />
              <div className="flex justify-between items-center mb-6">
                <p className="text-slate-700 text-lg">{item.title} </p>
                <p className="text-slate-900 font-bold">{item.price} </p>
              </div>
              <button
                className={`${
                  item.picked ? "bg-green-700" : "bg-slate-600"
                } w-full text-slate-100 px-2 inline-flex items-center justify-center rounded p-2 mr-2`}
              >
                {item.picked ? "Item picked" : "Add to cart"}{" "}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ProductsList;
