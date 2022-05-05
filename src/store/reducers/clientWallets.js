import {
	HIDE_CLIENT_WALLETS_FROM_SELECT,
	SHOW_CLIENT_WALLETS_FROM_SELECT,
} from "../actions/types";

const initialState = {
	clientWalletsFromSelectIsVisible: false,
};

const swapReducer = (state = initialState, {type}) => {
	switch (type) {
		case SHOW_CLIENT_WALLETS_FROM_SELECT:
			return {
				...state,
				clientWalletsFromSelectIsVisible: true,
			};
		case HIDE_CLIENT_WALLETS_FROM_SELECT:
			return {
				...state,
				clientWalletsFromSelectIsVisible: false,
			};
		default:
			return state;
	}
};

export default swapReducer;
