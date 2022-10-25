import Image from "next/future/image";
import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import menShoe from "../assets/images/mens.png";
import womenShoe from "../assets/images/women.png";
import kidShoe from "../assets/images/kid.png";

// import path from "path";
// import fs from "fs/promises";

// export async function getStaticProps() {
// 	const filePath = path.join(process.cwd(), "assets", "navList.json");
// 	const jsonData = await fs.readFile(filePath);
// 	const data = JSON.parse(jsonData);
// 	return {
// 		props: {
// 			navItems: data.navItems,
// 		},
// 		revalidate: 10,
// 	};
// }

export default function Home() {
	return (
		<>
			<Container
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Typography variant="h2" py={4}>
					Welcome to the Shoes Store!
				</Typography>
				<Grid container spacing={2} py={4}>
					<Grid item xs={12} sm={12} md={4}>
						<Link href="/products/Mens">
							<Box
								sx={{
									position: "relative",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Image
									src={menShoe}
									alt="mens"
									style={{
										width: "100%",
										height: "auto",
									}}
									priority
								/>

								<Box
									sx={{
										position: "absolute",
										backgroundColor: "rgba(0,0,0,0.3)",
										width: "100%",
										height: "100%",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<Typography variant="h3" color="#fff">
										Men
									</Typography>
								</Box>
							</Box>
						</Link>
					</Grid>
					<Grid item xs={12} sm={12} md={4}>
						<Link href="/products/Womens">
							<Box
								sx={{
									position: "relative",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Image
									src={womenShoe}
									alt="womens"
									style={{
										width: "100%",
										height: "auto",
									}}
								/>

								<Box
									sx={{
										position: "absolute",
										backgroundColor: "rgba(0,0,0,0.3)",
										width: "100%",
										height: "100%",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<Typography variant="h3" color="#fff">
										Women
									</Typography>
								</Box>
							</Box>
						</Link>
					</Grid>
					<Grid item xs={12} sm={12} md={4}>
						<Link href="/products/Kids">
							<Box
								sx={{
									position: "relative",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Image
									src={kidShoe}
									alt="kids"
									style={{
										width: "100%",
										height: "auto",
									}}
								/>

								<Box
									sx={{
										position: "absolute",
										backgroundColor: "rgba(0,0,0,0.3)",
										width: "100%",
										height: "100%",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<Typography variant="h2" color="#fff">
										Kids
									</Typography>
								</Box>
							</Box>
						</Link>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}
