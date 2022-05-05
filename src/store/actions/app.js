import {
	CHANGE_THEME,
	CHANGE_TIP_DURATION,
	CHANGE_TIP_SEVERITY,
	CHANGE_TIP_TEXT,
	CLOSE_CONNECTING,
	CONNECT_WALLET,
	HIDE_POPUP,
	HIDE_TIP,
	SET_CUR_EXT,
	SET_EXTENSIONS_LIST,
	SET_TIPS,
	SET_WALLET_IS_CONNECTED,
	SHOW_POPUP,
	SHOW_TIP,
} from "./types";

export function showTip() {
	return {type: SHOW_TIP};
}

export function setTips(payload) {
	return {type: SET_TIPS, payload};
}

export function changeTipSeverity(payload) {
	return {type: CHANGE_TIP_SEVERITY, payload};
}

export function changeTipDuration(payload) {
	return {type: CHANGE_TIP_DURATION, payload};
}

export function hideTip() {
	return {type: HIDE_TIP};
}

export function changeTipText(payload) {
	return {type: CHANGE_TIP_TEXT, payload};
}

export function changeTheme(payload) {
	document.querySelector("html").setAttribute("data-theme", payload);
	localStorage.setItem("appTheme", payload);
	return {type: CHANGE_THEME, payload};
}

export function setExtensionsList(payload) {
	return {type: SET_EXTENSIONS_LIST, payload};
}

export function setCurExt(payload) {
	localStorage.setItem("extName", payload._extLib ? payload._extLib.name : "");
	// console.log("payload._extLib",payload._extLib)
	return {type: SET_CUR_EXT, payload};
}

export function connectWallet() {
	return {type: CONNECT_WALLET};
}

export function closeConnecting() {
	return {type: CLOSE_CONNECTING};
}

export function setWalletIsConnected(payload) {
	return {type: SET_WALLET_IS_CONNECTED, payload};
}

export function showPopup(payload) {
	return {type: SHOW_POPUP, payload};
}

export function hidePopup() {
	return {type: HIDE_POPUP};
}
