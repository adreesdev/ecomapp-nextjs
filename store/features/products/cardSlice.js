import { createSlice } from "@reduxjs/toolkit";
import { Kids, Mens, Womens } from "./productsData";

const initialState = {
	mens: Mens,
	womens: Womens,
	kids: Kids,
};

const cardSlice = createSlice({
	name: "products",
	initialState,
});

export default cardSlice.reducer;
