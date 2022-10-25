import "../styles/globals.css";
import { Provider } from "react-redux";
import { wrapper } from "../store/store";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../utility/createEmotionCache";
import lightTheme from "../styles/theme/lightTheme";
const clientSideEmotionCache = createEmotionCache();
import DrawerAppBar from "../components/Header";

function MyApp({ Component, navItems, ...rest }) {
	const {
		emotionCache = clientSideEmotionCache,
		props,
		store,
	} = wrapper.useWrappedStore(rest);
	return (
		<Provider store={store}>
			<CacheProvider value={emotionCache}>
				<ThemeProvider theme={lightTheme}>
					<CssBaseline />
					<DrawerAppBar />
					<Component {...props.pageProps} />
				</ThemeProvider>
			</CacheProvider>
		</Provider>
	);
}

export default MyApp;
