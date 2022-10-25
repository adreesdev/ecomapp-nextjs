import { Grid, Container, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";

const Mens = () => {
	const { mens } = useSelector((state) => state.products);

	return (
		<>
			<Container
				sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
			>
				<Typography variant="h2" py={4}>
					Mens Shoes
				</Typography>
				<Grid container spacing={2}>
					{mens.map((item, index) => (
						<ProductCard key={index} item={item} />
					))}
				</Grid>
			</Container>
		</>
	);
};

export default Mens;
