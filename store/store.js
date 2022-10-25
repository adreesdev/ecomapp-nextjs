import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import cartSlice from "../store/features/cart/cartSlice";
import cardSlice from "../store/features/products/cardSlice";
import detailSlice from "../store/features/products/detailSlice";

export const store = () =>
	configureStore({
		reducer: {
			products: cardSlice,
			details: detailSlice,
			cart: cartSlice,
		},
	});

export const wrapper = createWrapper(store);
