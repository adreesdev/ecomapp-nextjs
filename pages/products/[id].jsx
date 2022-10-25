import { useDispatch, useSelector } from "react-redux";
import { setDetails } from "../../store/features/products/detailSlice.js";
import {
	Button,
	Container,
	Grid,
	Typography,
	Box,
	Backdrop,
} from "@mui/material";
import { Grid as Spingrid } from "react-loader-spinner";
import { addtoCart } from "../../store/features/cart/cartSlice.js";
import { useRouter } from "next/router.js";
import Image from "next/future/image";

var $ = require("jquery");
if (typeof window !== "undefined") {
	// Client-side-only code
	window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
	ssr: false,
});

const ProductDetails = () => {
	const router = useRouter();
	const { id } = router.query;
	const dispatch = useDispatch();
	dispatch(setDetails(id));

	const { details } = useSelector((state) => state.details);

	const addtocart = () => {
		let cartItem = { ...details, quantity: 1 };
		dispatch(addtoCart({ cartItem }));
	};
	return (
		<>
			{details ? (
				<Container>
					<Box width="100%" py={3}>
						<Typography variant="h2">Product Details</Typography>
						<Grid container py={5} spacing={2}>
							<Grid item xs={12} sm={12} md={6}>
								<Box
									sx={{
										width: "100%",
										maxWidth: "500px",
									}}
								>
									<OwlCarousel items={1}>
										{details.images.map((src, i) => (
											<div className="item" key={i}>
												<Image
													src={src}
													width={500}
													height={400}
													alt=""
													style={{
														width: "100%",
														height: "auto",
													}}
												/>
											</div>
										))}
									</OwlCarousel>
								</Box>
							</Grid>
							<Grid item xs={12} sm={12} md={6}>
								<Typography variant="h3">{details.name}</Typography>
								<Typography variant="h6">{details.category}</Typography>
								<Typography variant="h5" py={3}>
									Price: {details.price}
								</Typography>
								<Button
									size="lg"
									variant="contained"
									color="warning"
									onClick={addtocart}
								>
									Add to Cart
								</Button>
							</Grid>
						</Grid>
						<Typography variant="h3">Description</Typography>
						<Typography variant="p">{details.description}</Typography>
					</Box>
				</Container>
			) : (
				<Backdrop
					sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
					open={true}
				>
					<Spingrid
						height="80"
						width="80"
						color="#fff"
						ariaLabel="grid-loading"
						radius="12.5"
						wrapperStyle={{}}
						wrapperClass=""
						visible={true}
					/>
				</Backdrop>
			)}
		</>
	);
};

export default ProductDetails;
