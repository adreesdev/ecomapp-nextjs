import { createSlice } from "@reduxjs/toolkit";
import { Products } from "./productsData";

const initialState = {
	details: {},
};

const detailSlice = createSlice({
	name: "details",
	initialState,
	reducers: {
		setDetails: (state, action) => {
			state.details = Products.find(({ name }) => name === action.payload);
		},
	},
});
export const { setDetails } = detailSlice.actions;
export default detailSlice.reducer;
