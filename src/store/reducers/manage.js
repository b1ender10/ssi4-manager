import {
	SET_MANAGE_ASYNC_IS_WAITING,
	SET_MANAGE_BALANCE,
	SET_MANAGE_FROM_TOKEN,
	SET_MANAGE_PAIR_ID,
	SET_MANAGE_RATE_AB,
	SET_MANAGE_RATE_BA,
	SET_MANAGE_TO_TOKEN,
} from "../actions/types";

const initialState = {
	fromToken: {
		symbol: "",
		reserve: "",
	},
	toToken: {
		symbol: "",
		reserve: "",
	},
	rateAB: 0,
	rateBA: 0,
	pairId: "",
	balance: 0,
	manageAsyncIsWaiting: false,
};

const manageReducer = (state = initialState, {type, payload}) => {
	switch (type) {
		case SET_MANAGE_FROM_TOKEN:
			return {
				...state,
				fromToken: payload,
			};
		case SET_MANAGE_TO_TOKEN:
			return {
				...state,
				toToken: payload,
			};
		case SET_MANAGE_RATE_AB:
			return {
				...state,
				rateAB: payload,
			};
		case SET_MANAGE_RATE_BA:
			return {
				...state,
				rateBA: payload,
			};
		case SET_MANAGE_PAIR_ID:
			return {
				...state,
				pairId: payload,
			};
		case SET_MANAGE_BALANCE:
			return {
				...state,
				balance: payload,
			};
		case SET_MANAGE_ASYNC_IS_WAITING:
			return {
				...state,
				manageAsyncIsWaiting: payload,
			};
		default:
			return state;
	}
};

export default manageReducer;
