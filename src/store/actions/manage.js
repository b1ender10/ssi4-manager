import {
	SET_MANAGE_ASYNC_IS_WAITING,
	SET_MANAGE_BALANCE,
	SET_MANAGE_FROM_TOKEN,
	SET_MANAGE_PAIR_ID,
	SET_MANAGE_RATE_AB,
	SET_MANAGE_RATE_BA,
	SET_MANAGE_TO_TOKEN,
} from "./types";

export function setManageFromToken(payload) {
	return {type: SET_MANAGE_FROM_TOKEN, payload};
}

export function setManageToToken(payload) {
	return {type: SET_MANAGE_TO_TOKEN, payload};
}

export function setManageRateAB(payload) {
	return {type: SET_MANAGE_RATE_AB, payload};
}

export function setManageRateBA(payload) {
	return {type: SET_MANAGE_RATE_BA, payload};
}

export function setManagePairId(payload) {
	return {type: SET_MANAGE_PAIR_ID, payload};
}

export function setManageBalance(payload) {
	return {type: SET_MANAGE_BALANCE, payload};
}

export function setManageAsyncIsWaiting(payload) {
	return {type: SET_MANAGE_ASYNC_IS_WAITING, payload};
}
