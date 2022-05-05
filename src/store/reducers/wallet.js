import {
	HIDE_STACKING_CONFIRM_POPUP,
	SET_ACCEPTED_PAIR_TOKENS,
	SET_ASSET_LIST_FOR_DEPLOY,
	SET_CLIENT_DATA,
	SET_LIQUIDITY_LIST,
	SET_PAIRS_LIST,
	SET_SUBSCRIBE_DATA,
	SET_SUBSCRIBE_RECEIVE_TOKENS,
	SET_TOKEN_LIST,
	SET_TRANSACTIONS_LIST,
	SET_UPDATED_BALANCE,
	SET_WALLET,
	SHOW_STACKING_CONFIRM_POPUP,
} from "../actions/types";

const initialState = {
	wallet: {
		id: "",
		balance: 0,
	},
	clientData: {
		status: false,
		address: "",
		balance: 0,
	},
	tokenList: [],
	pairsList: [],
	liquidityList: [],
	transactionsList: [],
	subscribeData: {},
	stackingConfirmPopupIsVisible: false,
	transListReceiveTokens: [],
	acceptedPairTokens: [],
	updatedWallet: null,
	assetsFromGraphQL: [],
};

const walletReducer = (state = initialState, {type, payload}) => {
	switch (type) {
		case SET_ASSET_LIST_FOR_DEPLOY:
			return {
				...state,
				assetsFromGraphQL: payload,
			};
		case SET_UPDATED_BALANCE:
			return {
				...state,
				clientData: {...state.clientData, balance: payload},
				// updatedWallet: payload
			};
		case SET_ACCEPTED_PAIR_TOKENS:
			return {
				...state,
				acceptedPairTokens: payload,
			};
		case SET_SUBSCRIBE_RECEIVE_TOKENS:
			return {
				...state,
				transListReceiveTokens: payload,
			};

		case SHOW_STACKING_CONFIRM_POPUP:
			return {
				...state,
				stackingConfirmPopupIsVisible: true,
			};
		case HIDE_STACKING_CONFIRM_POPUP:
			return {
				...state,
				stackingConfirmPopupIsVisible: false,
			};
		case SET_WALLET:
			return {
				...state,
				wallet: payload,
			};
		case SET_CLIENT_DATA:
			return {
				...state,
				clientData: {
					status: payload.status,
					address: payload.dexclient,
					balance: payload.balance,
				},
			};
		case SET_TOKEN_LIST:
			return {
				...state,
				tokenList: payload,
			};
		case SET_PAIRS_LIST:
			return {
				...state,
				pairsList: payload,
			};
		case SET_LIQUIDITY_LIST:
			return {
				...state,
				liquidityList: payload,
			};
		case SET_TRANSACTIONS_LIST:
			return {
				...state,
				transactionsList: payload,
			};
		case SET_SUBSCRIBE_DATA:
			return {
				...state,
				subscribeData: payload,
			};
		default:
			return state;
	}
};

export default walletReducer;
