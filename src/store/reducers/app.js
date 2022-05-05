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
} from "../actions/types";

const initialState = {
	appTheme: null,
	extensionsList: [],
	extensionIsSelected: false,
	curExt: {},
	// tipOpened: false,
	// tipSeverity: "success",
	// tipDuration: 6000,
	// tipMessage: "I am here blyat",
	walletIsConnected: false,
	connectingWallet: false,
	accountIsVisible: false,
	popup: {isVisible: false, type: "", message: "", link: ""},
	tips: null,
};

const appReducer = (state = initialState, {type, payload}) => {
	switch (type) {
		case SET_TIPS:
			return {
				...state,
				tips: payload,
			};
		case SHOW_TIP:
			return {
				...state,
				tipOpened: true,
			};
		case HIDE_TIP:
			return {
				...state,
				tipOpened: false,
			};
		case CHANGE_TIP_TEXT:
			return {
				...state,
				tipMessage: payload,
			};
		case CHANGE_TIP_DURATION:
			return {
				...state,
				tipDuration: Number(payload) || 6000,
			};
		case CHANGE_TIP_SEVERITY:
			return {
				...state,
				tipSeverity: payload,
			};
		case CHANGE_THEME:
			return {
				...state,
				appTheme: payload,
			};
		case SET_EXTENSIONS_LIST:
			return {
				...state,
				extensionsList: payload,
			};
		case SET_CUR_EXT:
			return {
				...state,
				curExt: payload,
				extensionIsSelected: !!payload._extLib,
			};
		case CONNECT_WALLET:
			return {
				...state,
				connectingWallet: true,
			};
		case CLOSE_CONNECTING:
			return {
				...state,
				connectingWallet: false,
			};
		case SET_WALLET_IS_CONNECTED:
			return {
				...state,
				walletIsConnected: payload,
			};
		case SHOW_POPUP:
			return {
				...state,
				popup: {
					isVisible: true,
					type: payload.type,
					message: payload.message,
					link: payload.link,
				},
			};
		case HIDE_POPUP:
			return {
				...state,
				popup: {isVisible: false, type: "", message: "", link: ""},
			};
		default:
			return state;
	}
};

export default appReducer;
