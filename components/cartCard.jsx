import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import {
	decrease,
	increase,
	removeItem,
} from "../store/features/cart/cartSlice.js";
import Image from "next/future/image";

const CartCard = ({ item }) => {
	const dispatch = useDispatch();
	let name = item.name;
	return (
		<>
			<Grid container>
				<Grid item sm={4}>
					<Box>
						<Image
							src={item.images[1]}
							alt="cart item"
							width={200}
							height={200}
						/>
					</Box>
				</Grid>
				<Grid item sm={8}>
					<Box>
						<Typography variant="h4">{item.name}</Typography>
						<Typography variant="h6">Price: {item.price}</Typography>
						<Typography variant="h6">
							<Button
								onClick={
									item.quantity === 1
										? () => {
												dispatch(removeItem(name));
										  }
										: () => {
												dispatch(decrease({ name }));
										  }
								}
							>
								<RemoveIcon />
							</Button>

							{item.quantity}
							<Button
								onClick={() => {
									dispatch(increase({ name }));
								}}
							>
								<AddIcon />
							</Button>
						</Typography>
						<Button
							variant="contained"
							color="error"
							onClick={() => {
								dispatch(removeItem(name));
							}}
						>
							Remove
						</Button>
					</Box>
				</Grid>
			</Grid>
		</>
	);
};

export default CartCard;
