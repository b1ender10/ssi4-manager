import {
	HIDE_POOL_FROM_SELECT,
	HIDE_POOL_TO_SELECT,
	SET_POOL_ASYNC_IS_WAITING,
	SET_POOL_FROM_INPUT_VALUE,
	SET_POOL_FROM_TOKEN,
	SET_POOL_PAIR_ID,
	SET_POOL_RATE,
	SET_POOL_TO_INPUT_VALUE,
	SET_POOL_TO_TOKEN,
	SHOW_POOL_FROM_SELECT,
	SHOW_POOL_TO_SELECT,
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
	poolFromSelectIsVisible: false,
	poolToSelectIsVisible: false,
	poolAsyncIsWaiting: false,
};

const poolReducer = (state = initialState, {type, payload}) => {
	switch (type) {
		case SET_POOL_FROM_INPUT_VALUE:
			return {
				...state,
				fromInputValue: payload,
			};
		case SET_POOL_TO_INPUT_VALUE:
			return {
				...state,
				toInputValue: payload,
			};
		case SET_POOL_FROM_TOKEN:
			return {
				...state,
				fromToken: payload,
			};
		case SET_POOL_TO_TOKEN:
			return {
				...state,
				toToken: payload,
			};
		case SET_POOL_RATE:
			return {
				...state,
				rate: payload,
			};
		case SET_POOL_PAIR_ID:
			return {
				...state,
				pairId: payload,
			};
		case SHOW_POOL_FROM_SELECT:
			return {
				...state,
				poolFromSelectIsVisible: true,
			};
		case HIDE_POOL_FROM_SELECT:
			return {
				...state,
				poolFromSelectIsVisible: false,
			};
		case SHOW_POOL_TO_SELECT:
			return {
				...state,
				poolToSelectIsVisible: true,
			};
		case HIDE_POOL_TO_SELECT:
			return {
				...state,
				poolToSelectIsVisible: false,
			};
		case SET_POOL_ASYNC_IS_WAITING:
			return {
				...state,
				poolAsyncIsWaiting: payload,
			};
		default:
			return state;
	}
};

export default poolReducer;
