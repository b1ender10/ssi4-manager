import {
	HIDE_CLIENT_WALLETS_FROM_SELECT,
	SHOW_CLIENT_WALLETS_FROM_SELECT,
} from "./types";

export function showClientWalletsFromSelect() {
	return {type: SHOW_CLIENT_WALLETS_FROM_SELECT};
}

export function hideClientWalletsFromSelect() {
	return {type: HIDE_CLIENT_WALLETS_FROM_SELECT};
}
