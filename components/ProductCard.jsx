import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
	Grid,
	Box,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { addtoCart } from "../store/features/cart/cartSlice.js";
import { useRouter } from "next/router";

const ProductCard = ({ item }) => {
	const dispatch = useDispatch();
	const router = useRouter();
	const routeChange = () => {
		let path = `/products/${item.name}`;
		router.push(path);
	};

	const addtocart = () => {
		let cartItem = { ...item, quantity: 1 };
		dispatch(addtoCart({ cartItem }));
	};

	return (
		<>
			<Grid
				item
				xs={12}
				sm={6}
				md={4}
				sx={{ display: "flex", justifyContent: "center" }}
			>
				<Card
					sx={{
						maxWidth: 350,
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
					}}
				>
					<Box>
						<CardMedia
							component="img"
							height="200"
							image={item.images[0]}
							alt="thumbnail"
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								{item.name}
							</Typography>
							<Typography variant="body2" color="text.secondary">
								{item.description.substr(0, 120) + "..."}
							</Typography>
						</CardContent>
					</Box>

					<CardActions>
						<Button size="small" onClick={routeChange}>
							Details
						</Button>
						<Button size="small" onClick={addtocart}>
							Add to Cart
						</Button>
					</CardActions>
				</Card>
			</Grid>
		</>
	);
};

export default ProductCard;
