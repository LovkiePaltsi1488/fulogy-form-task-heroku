import React from "react";
/* import PropTypes from "prop-types"; */
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
interface AppProps {
	Component: React.FC;
	pageProps?: {
		[key: string]: any;
	};
}
export default function MyApp(props: AppProps) {
	const { Component, pageProps } = props;

	React.useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentElement!.removeChild(jssStyles);
		}
	}, []);

	return (
		<React.Fragment>
			<Head>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
			</Head>
			<ThemeProvider theme={theme}>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
			<style jsx global>{`
				body {
					background-image: url(./images/wave.svg);
					background-repeat: no-repeat;
					background-size: 100%;
				}
				@media (max-width: 1000px) {
					body {
						background-image: url(./images/wave-mobile.svg);
					}
				}
			`}</style>
		</React.Fragment>
	);
}
