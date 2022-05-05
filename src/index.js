import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "./store/reducers";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {SnackbarProvider} from "notistack";
import {StyledEngineProvider} from "@mui/material/styles";

import "./index.scss";
import "bootstrap";
import App from "./App";

import {QueryClient, QueryClientProvider} from "react-query";

export const store = createStore(rootReducer, composeWithDevTools());

const queryClient = new QueryClient();

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<StyledEngineProvider injectFirst>
				<SnackbarProvider
					maxSnack={3}
					autoHideDuration={10000}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "right",
					}}
				>
					{/* <React.StrictMode> */}
					<QueryClientProvider client={queryClient}>
						<App />
					</QueryClientProvider>
					{/* </React.StrictMode> */}
				</SnackbarProvider>
			</StyledEngineProvider>
		</BrowserRouter>
	</Provider>,
	document.getElementById("root"),
);
