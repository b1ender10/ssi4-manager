import {
	SHOW_ORDERS_FROM_SELECT,
	HIDE_ORDERS_FROM_SELECT,
	SHOW_ORDERS_TO_SELECT,
	HIDE_ORDERS_TO_SELECT,
	SET_ORDERS_FROM_INPUT_VALUE,
	SET_ORDERS_TO_INPUT_VALUE,
	SET_ORDERS_FROM_TOKEN,
	SET_ORDERS_TO_TOKEN,
	SET_ORDERS_RATE,
	SET_ORDERS_PAIR_ID,
	HIDE_ORDERS_CONFIRM_POPUP,
	SHOW_ORDERS_CONFIRM_POPUP,
	SET_ORDER_LIST,
	SET_ORDERS_ASYNC_IS_WAITING,
	SET_ORDER_LIST_LOADING,
	SET_ORDER_LIST_FETCHED,
} from "./types";

export function setOrdersFromInputValue(payload) {
	return {type: SET_ORDERS_FROM_INPUT_VALUE, payload};
}
// export function setOrdersFromInputValueChange(payload) {
//     return {type: SET_ORDERS_FROM_INPUT_VALUE_CHANGE, payload}
// }

export function setOrdersToInputValue(payload) {
	return {type: SET_ORDERS_TO_INPUT_VALUE, payload};
}

export function setOrdersFromToken(payload) {
	return {type: SET_ORDERS_FROM_TOKEN, payload};
}

export function setOrdersToToken(payload) {
	return {type: SET_ORDERS_TO_TOKEN, payload};
}

export function setOrdersPairId(payload) {
	return {type: SET_ORDERS_PAIR_ID, payload};
}
export function setOrdersRate(payload) {
	return {type: SET_ORDERS_RATE, payload};
}

export function showOrdersFromSelect() {
	return {type: SHOW_ORDERS_FROM_SELECT};
}

export function hideOrdersFromSelect() {
	return {type: HIDE_ORDERS_FROM_SELECT};
}

export function showOrdersToSelect() {
	return {type: SHOW_ORDERS_TO_SELECT};
}

export function hideOrdersToSelect() {
	return {type: HIDE_ORDERS_TO_SELECT};
}

export function showOrdersConfirmPopup() {
	return {type: SHOW_ORDERS_CONFIRM_POPUP};
}

export function hideOrdersConfirmPopup() {
	return {type: HIDE_ORDERS_CONFIRM_POPUP};
}

export function setOrdersAsyncIsWaiting(payload) {
	return {type: SET_ORDERS_ASYNC_IS_WAITING, payload};
}

export function setOrderList(payload) {
	return {type: SET_ORDER_LIST, payload};
}

export function setOrderListLoading(payload) {
	return {type: SET_ORDER_LIST_LOADING, payload};
}

export function setOrderListFetched(payload) {
	return {type: SET_ORDER_LIST_FETCHED, payload};
}
