import {
	SET_INPUT_NFT_DISABLED,
	SET_NFT_ASSETS,
	SET_RECEIVE_TOKEN,
	SET_RECEIVE_TOKEN_SETTED,
	SET_SEND_ADDRESS,
	SET_SEND_AMOUNT,
	SET_SEND_TOKEN,
	SET_SHOW_ASSETS_FOR_SEND,
	SET_SHOW_WAITING_SEND_ASSET_POPUP,
	SET_TOKEN_SETTED,
} from "../actions/types";
import wETH from "../../images/tokens/wETH.svg";
import TON from "../../images/tokens/TON.svg";
import wBTC from "../../images/tokens/wBTC.svg";

const assetstestArray = [
	{
		tokenName: "Ethereum",
		balance: "1002",
		tokenSymbol: "ETH",
		icon: wETH,
		address:
			"0:4594ac781bdcdee350c9c8c25dfaf08d067b1214fa86c687f4deca048a76551f",
	},
	{
		tokenName: "TON Crystal",
		balance: "1052",
		tokenSymbol: "TON",
		icon: TON,
		address:
			"0:4594ac781bdcdee350c9c8c25dfaf08d067b1214fa86c687f4deca048a76551f",
	},
	{
		tokenName: "Bitcoin",
		balance: "102",
		tokenSymbol: "BTC",
		icon: wBTC,
		address:
			"0:4594ac781bdcdee350c9c8c25dfaf08d067b1214fa86c687f4deca048a76551f",
	},
];

const initialState = {
	amountToSend: "",
	addressToSend: "",
	currentTokenForSend: assetstestArray[0],
	showAssetsForSend: false,
	tokenSetted: false,
	currentTokenForReceive: assetstestArray[0],
	tokenForReceiveSetted: false,
	assetstestArray: assetstestArray,
	NFTassets: [],
	inputNFTdisabled: null,
	showWaitingSendAssetPopup: false,
};

const walletSeedReducer = (state = initialState, {type, payload}) => {
	console.log("payloadererer", payload);
	switch (type) {
		case SET_SHOW_WAITING_SEND_ASSET_POPUP:
			return {
				...state,
				showWaitingSendAssetPopup: payload,
			};
		case SET_NFT_ASSETS:
			return {
				...state,
				NFTassets: payload,
			};
		case SET_INPUT_NFT_DISABLED:
			return {
				...state,
				inputNFTdisabled: payload,
			};
		case SET_SEND_AMOUNT:
			return {
				...state,
				amountToSend: payload,
			};
		case SET_RECEIVE_TOKEN_SETTED:
			return {
				...state,
				tokenForReceiveSetted: payload,
			};
		case SET_RECEIVE_TOKEN:
			return {
				...state,
				currentTokenForReceive: payload,
			};
		case SET_SEND_ADDRESS:
			return {
				...state,
				addressToSend: payload,
			};
		case SET_SEND_TOKEN:
			return {
				...state,
				currentTokenForSend: payload,
			};
		case SET_TOKEN_SETTED:
			return {
				...state,
				tokenSetted: payload,
			};
		case SET_SHOW_ASSETS_FOR_SEND:
			return {
				...state,
				showAssetsForSend: payload,
			};

		default:
			return state;
	}
};

export default walletSeedReducer;
