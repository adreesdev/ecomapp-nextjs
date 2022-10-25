import React, { useEffect } from "react";
import CartCard from "../../components/cartCard";
import { Container, Typography, Button, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
	calculateTotals,
	clearCart,
} from "../../store/features/cart/cartSlice.js";

const Cart = () => {
	const dispatch = useDispatch();

	const { cart, totalItems, totalPrice } = useSelector((state) => state.cart);

	useEffect(() => {
		dispatch(calculateTotals());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [cart]);
	return (
		<>
			{cart.length === 0 ? (
				<Container maxWidth="md">
					<Typography variant="h4" textAlign="center" py={4}>
						Your cart is empty
					</Typography>
				</Container>
			) : (
				<Container
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Typography variant="h2" py={4}>
						Cart
					</Typography>
					{cart.map((item, i) => (
						<CartCard key={i} item={item} />
					))}
					<Container maxWidth="md">
						<Box
							pt={4}
							sx={{
								width: "100%",
								display: "flex",
								justifyContent: "space-between",
							}}
						>
							<Typography variant="h6">Total Items: {totalItems}</Typography>
							<Button variant="contained" onClick={() => dispatch(clearCart())}>
								Clear Cart
							</Button>
							<Typography variant="h6">Total Price: ${totalPrice}</Typography>
						</Box>
					</Container>
				</Container>
			)}
		</>
	);
};

export default Cart;
