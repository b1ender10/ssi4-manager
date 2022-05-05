import {
	SET_AMOUNT_FOR_STACkING,
	SET_PERIOD_FOR_STACkING,
	SET_APY_FOR_STACKING,
	SET_SHOW_STAKING_WAITING_POPUP,
} from "./types";

export function setStackingAmount(payload) {
	return {type: SET_AMOUNT_FOR_STACkING, payload};
}
export function setStackingPeriod(payload) {
	return {type: SET_PERIOD_FOR_STACkING, payload};
}
export function setAPYforStaking(payload) {
	return {type: SET_APY_FOR_STACKING, payload};
}
export function setShowStakingWaitingPopup(payload) {
	return {type: SET_SHOW_STAKING_WAITING_POPUP, payload};
}
