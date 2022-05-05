import {HIDE_POOL_EXPLORER, SHOW_POOL_EXPLORER} from "./types";

export function showPoolExplorer() {
	return {type: SHOW_POOL_EXPLORER};
}

export function hidePoolExplorer() {
	return {type: HIDE_POOL_EXPLORER};
}
