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
} from "./types";

export function setSwapFromInputValue(payload) {
	return {type: SET_SWAP_FROM_INPUT_VALUE, payload};
}
export function setSlippageValue(payload) {
	return {type: SET_SLIPPAGE, payload};
}
export function setSwapFromInputValueChange(payload) {
	return {type: SET_SWAP_FROM_INPUT_VALUE_CHANGE, payload};
}

export function setSwapToInputValue(payload) {
	return {type: SET_SWAP_TO_INPUT_VALUE, payload};
}

export function setSwapFromToken(payload) {
	return {type: SET_SWAP_FROM_TOKEN, payload};
}

export function setSwapToToken(payload) {
	return {type: SET_SWAP_TO_TOKEN, payload};
}

export function setSwapRate(payload) {
	return {type: SET_SWAP_RATE, payload};
}

export function setSwapPairId(payload) {
	return {type: SET_SWAP_PAIR_ID, payload};
}

export function showSwapFromSelect() {
	return {type: SHOW_SWAP_FROM_SELECT};
}

export function hideSwapFromSelect() {
	return {type: HIDE_SWAP_FROM_SELECT};
}

export function showSwapToSelect() {
	return {type: SHOW_SWAP_TO_SELECT};
}

export function hideSwapToSelect() {
	return {type: HIDE_SWAP_TO_SELECT};
}

export function setSwapAsyncIsWaiting(payload) {
	return {type: SET_SWAP_ASYNC_IS_WAITING, payload};
}
