import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cart: [],
	totalItems: 0,
	totalPrice: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addtoCart: (state, action) => {
			const { cartItem } = action.payload;
			const cart = state.cart;
			const index = cart.findIndex((i) => i.name === cartItem.name);
			console.log(index);
			if (index === -1) {
				state.cart.push(cartItem);
			} else {
				cart[index].quantity += 1;
			}
		},
		clearCart: (state) => {
			state.cart = [];
		},
		removeItem: (state, action) => {
			const name = action.payload;
			state.cart = state.cart.filter((item) => item.name !== name);
		},
		increase: (state, { payload }) => {
			const cartItem = state.cart.find((item) => item.name === payload.name);
			cartItem.quantity = cartItem.quantity + 1;
		},
		decrease: (state, { payload }) => {
			const cartItem = state.cart.find((item) => item.name === payload.name);
			cartItem.quantity = cartItem.quantity - 1;
		},
		calculateTotals: (state) => {
			let totalItems = 0;
			let totalPrice = 0;
			state.cart.forEach((item) => {
				let price = item.price.replace(/[^\d.-]/g, "");
				price = parseFloat(price);
				totalItems += item.quantity;
				totalPrice += item.quantity * price;
			});
			state.totalItems = totalItems;
			state.totalPrice = totalPrice;
		},
	},
});
export const {
	addtoCart,
	removeItem,
	increase,
	decrease,
	calculateTotals,
	clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
