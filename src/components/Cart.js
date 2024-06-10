import React from "react";
import { useSelector, useDispatch } from "react-redux";
import RestaurantCategoryList from "./RestaurantCategoryList";
import { clearItem } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const handleClearCart = () => {
    dispatch(clearItem());
  };
  return (
    <div className="text-center m-4 p-4 ">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-md"
          onClick={() => handleClearCart()}
          disabled={cartItems?.length === 0}
        >
          Clear Cart
        </button>
        {cartItems?.length === 0 ? <h3>Add items to cart</h3> : null}
        <RestaurantCategoryList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
