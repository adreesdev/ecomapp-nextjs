const items = require("../../../assets/data.json");
const items2 = Object.entries(items);
const items3 = Object.entries(items2).map(([key, value]) => {
	return {
		id: key,
		...value,
	};
});

export const Mens = Object.entries(items3[0][1]).map((e) => e[1]);
export const Womens = Object.entries(items3[1][1]).map((e) => e[1]);
export const Kids = Object.entries(items3[2][1]).map((e) => e[1]);
export const Products = [...Mens, ...Womens, ...Kids];
