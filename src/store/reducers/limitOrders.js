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
	SET_ORDERS_FROM_INPUT_VALUE,
	SET_ORDERS_TO_INPUT_VALUE,
	SET_ORDERS_FROM_TOKEN,
	SET_ORDERS_TO_TOKEN,
	SET_ORDERS_RATE,
	SET_ORDERS_PAIR_ID,
	SHOW_ORDERS_FROM_SELECT,
	HIDE_ORDERS_FROM_SELECT,
	SHOW_ORDERS_TO_SELECT,
	HIDE_ORDERS_TO_SELECT,
	SHOW_ORDERS_CONFIRM_POPUP,
	HIDE_ORDERS_CONFIRM_POPUP,
	SET_ORDER_LIST,
	SET_ORDERS_ASYNC_IS_WAITING,
	SET_ORDER_LIST_FETCHED,
	SET_ORDER_LIST_LOADING,
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
	ordersFromSelectIsVisible: false,
	ordersToSelectIsVisible: false,
	ordersAsyncIsWaiting: false,
	ordersConfirmPopupVisible: false,
	revertValue: 0,
	orderList: [],
	orderListLoading: false,
	orderListFetched: false,
};

const limitOrders = (state = initialState, {type, payload}) => {
	switch (type) {
		case SET_ORDERS_FROM_INPUT_VALUE:
			return {
				...state,
				fromInputValue: payload,
			};
		case SET_ORDERS_TO_INPUT_VALUE:
			return {
				...state,
				toInputValue: payload,
			};
		case SET_ORDERS_FROM_TOKEN:
			return {
				...state,
				fromToken: payload,
			};
		case SET_ORDERS_TO_TOKEN:
			return {
				...state,
				toToken: payload,
			};
		case SET_ORDERS_RATE:
			return {
				...state,
				rate: payload,
			};
		case SET_ORDERS_PAIR_ID:
			return {
				...state,
				pairId: payload,
			};
		case SHOW_ORDERS_FROM_SELECT:
			return {
				...state,
				ordersFromSelectIsVisible: true,
			};
		case HIDE_ORDERS_FROM_SELECT:
			return {
				...state,
				ordersFromSelectIsVisible: false,
			};
		case SHOW_ORDERS_TO_SELECT:
			return {
				...state,
				ordersToSelectIsVisible: true,
			};
		case HIDE_ORDERS_TO_SELECT:
			return {
				...state,
				ordersToSelectIsVisible: false,
			};
		case SHOW_ORDERS_CONFIRM_POPUP:
			return {
				...state,
				ordersConfirmPopupVisible: true,
			};
		case HIDE_ORDERS_CONFIRM_POPUP:
			return {
				...state,
				ordersConfirmPopupVisible: false,
			};
		case SET_ORDERS_ASYNC_IS_WAITING:
			return {
				...state,
				ordersAsyncIsWaiting: payload,
			};
		case SET_ORDER_LIST:
			return {
				...state,
				orderList: payload,
			};
		case SET_ORDER_LIST_LOADING:
			return {
				...state,
				orderListLoading: payload,
			};
		case SET_ORDER_LIST_FETCHED:
			return {
				...state,
				orderListFetched: payload,
			};
		default:
			return state;
	}
};

export default limitOrders;
