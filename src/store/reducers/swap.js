import {
	SET_SWAP_FROM_INPUT_VALUE_CHANGE,
	SET_SWAP_FROM_INPUT_VALUE,
	SET_SWAP_TO_INPUT_VALUE,
	SET_SWAP_FROM_TOKEN,
	SET_SWAP_TO_TOKEN,
	SET_SWAP_PAIR_ID,
	SHOW_SWAP_FROM_SELECT,
	HIDE_SWAP_FROM_SELECT,
	SHOW_SWAP_TO_SELECT,
	HIDE_SWAP_TO_SELECT,
	SET_SWAP_ASYNC_IS_WAITING,
	SET_SWAP_RATE,
	SET_SLIPPAGE,
} from "../actions/types";

const initialState = {
	fromInputValue: 0,
	toInputValue: 0,
	fromToken: {
		walletAddress: "",
		symbol: "",
		balance: 0,
	},
	toToken: {
		walletAddress: "",
		symbol: "",
		balance: 0,
	},
	rate: 0,
	pairId: "",
	swapFromSelectIsVisible: false,
	swapToSelectIsVisible: false,
	swapAsyncIsWaiting: false,
	revertValue: 0,
	slippageValue: null,
};

const swapReducer = (state = initialState, {type, payload}) => {
	switch (type) {
		case SET_SLIPPAGE:
			return {
				...state,
				slippageValue: payload,
			};
		case SET_SWAP_FROM_INPUT_VALUE:
			return {
				...state,
				fromInputValue: payload,
			};
		case SET_SWAP_FROM_INPUT_VALUE_CHANGE:
			return {
				...state,
				revertValue: payload,
			};
		case SET_SWAP_TO_INPUT_VALUE:
			return {
				...state,
				toInputValue: payload,
			};
		case SET_SWAP_FROM_TOKEN:
			return {
				...state,
				fromToken: payload,
			};
		case SET_SWAP_TO_TOKEN:
			return {
				...state,
				toToken: payload,
			};
		case SET_SWAP_RATE:
			return {
				...state,
				rate: payload,
			};
		case SET_SWAP_PAIR_ID:
			return {
				...state,
				pairId: payload,
			};
		case SHOW_SWAP_FROM_SELECT:
			return {
				...state,
				swapFromSelectIsVisible: true,
			};
		case HIDE_SWAP_FROM_SELECT:
			return {
				...state,
				swapFromSelectIsVisible: false,
			};
		case SHOW_SWAP_TO_SELECT:
			return {
				...state,
				swapToSelectIsVisible: true,
			};
		case HIDE_SWAP_TO_SELECT:
			return {
				...state,
				swapToSelectIsVisible: false,
			};
		case SET_SWAP_ASYNC_IS_WAITING:
			return {
				...state,
				swapAsyncIsWaiting: payload,
			};
		default:
			return state;
	}
};

export default swapReducer;
