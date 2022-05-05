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
} from "./types";

export function setPoolFromInputValue(payload) {
	return {type: SET_POOL_FROM_INPUT_VALUE, payload};
}

export function setPoolToInputValue(payload) {
	return {type: SET_POOL_TO_INPUT_VALUE, payload};
}

export function setPoolFromToken(payload) {
	return {type: SET_POOL_FROM_TOKEN, payload};
}

export function setPoolToToken(payload) {
	return {type: SET_POOL_TO_TOKEN, payload};
}

export function setPoolRate(payload) {
	return {type: SET_POOL_RATE, payload};
}

export function setPoolPairId(payload) {
	return {type: SET_POOL_PAIR_ID, payload};
}

export function showPoolFromSelect() {
	return {type: SHOW_POOL_FROM_SELECT};
}

export function hidePoolFromSelect() {
	return {type: HIDE_POOL_FROM_SELECT};
}

export function showPoolToSelect() {
	return {type: SHOW_POOL_TO_SELECT};
}

export function hidePoolToSelect() {
	return {type: HIDE_POOL_TO_SELECT};
}

export function setPoolAsyncIsWaiting(payload) {
	return {type: SET_POOL_ASYNC_IS_WAITING, payload};
}
