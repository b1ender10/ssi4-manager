import {
	ENTER_ENCRYPTED_SEED_PHRASE,
	ENTER_SEED_PHRASE_EMPTY_STORAGE,
	ENTER_SEED_PHRASE_REGISTER_HIDE,
	ENTER_SEED_PHRASE_REGISTER_SHOW,
	ENTER_SEED_PHRASE_SAVE_TO_LOCAL_STORAGE,
	ENTER_SEED_PHRASE_SIDE,
	ENTER_SEED_PHRASE_UNLOCK_HIDE,
	ENTER_SEED_PHRASE_UNLOCK_SHOW,
	ENTER_SEED_PHRASE_WORD_EIGHT,
	ENTER_SEED_PHRASE_WORD_ELEVEN,
	ENTER_SEED_PHRASE_WORD_FIVE,
	ENTER_SEED_PHRASE_WORD_FOUR,
	ENTER_SEED_PHRASE_WORD_NINE,
	ENTER_SEED_PHRASE_WORD_ONE,
	ENTER_SEED_PHRASE_WORD_SEVEN,
	ENTER_SEED_PHRASE_WORD_SIX,
	ENTER_SEED_PHRASE_WORD_TEN,
	ENTER_SEED_PHRASE_WORD_THREE,
	ENTER_SEED_PHRASE_WORD_TWELVE,
	ENTER_SEED_PHRASE_WORD_TWO,
	HIDE_REVEAL_SEED_PHRASE,
	SET_AMOUNT_FOR_STACkING,
	SET_PASSWORD,
	SET_PERIOD_FOR_STACkING,
	SET_TIP,
	SHOW_ENTER_SEED_PHRASE,
	SHOW_REVEAL_SEED_PHRASE,
} from "../actions/types";

const initialState = {
	enterSeedPhraseIsVisible: false,
	side: "register",
	wordOne: null, //"",
	wordTwo: null, //"",
	wordThree: null, //"",
	wordFour: null, //"",
	wordFive: null, //"",
	wordSix: null, //"",
	wordSeven: null, //"",
	wordEight: null, //"",
	wordNine: null, //"",
	wordTen: null, //"",
	wordEleven: null, //"",
	wordTwelve: null, //"",
	encryptedSeedPhrase: "",
	decryptedSeedPhrase: "",
	emptyStorage: true,
	validSeedPhrase: 0,
	seedPhrasePassword: "",
	enterSeedPhraseUnlockIsVisible: false,
	revealSeedPhraseIsVisible: false,
	revealSeedPhraseText: "",
	tips: [],
};

const enterSeedPhrase = (state = initialState, {type, payload}) => {
	switch (type) {
		case SET_TIP:
			return {
				...state,
				tips: payload,
			};
		case SHOW_REVEAL_SEED_PHRASE:
			return {
				...state,
				revealSeedPhraseIsVisible: true,
				revealSeedPhraseText: payload,
			};
		case HIDE_REVEAL_SEED_PHRASE:
			return {
				...state,
				revealSeedPhraseIsVisible: false,
			};
		case SET_PASSWORD:
			return {
				...state,
				seedPhrasePassword: payload,
			};
		case SHOW_ENTER_SEED_PHRASE:
			return {
				...state,
				enterSeedPhraseIsVisible: payload,
				side: "login",
			};
		// case HIDE_ENTER_SEED_PHRASE:
		//   return {
		//     ...state,
		//     enterSeedPhraseIsVisible: false,
		//     side: "login"
		//   }
		case ENTER_SEED_PHRASE_SIDE:
			return {
				...state,
				side: payload,
			};
		case ENTER_SEED_PHRASE_WORD_ONE:
			return {
				...state,
				wordOne: payload,
			};
		case ENTER_SEED_PHRASE_WORD_TWO:
			return {
				...state,
				wordTwo: payload,
			};
		case ENTER_ENCRYPTED_SEED_PHRASE:
			return {
				...state,
				encryptedSeedPhrase: payload,
			};
		case ENTER_SEED_PHRASE_WORD_THREE:
			return {
				...state,
				wordThree: payload,
			};
		case ENTER_SEED_PHRASE_WORD_FOUR:
			return {
				...state,
				wordFour: payload,
			};
		case ENTER_SEED_PHRASE_WORD_FIVE:
			return {
				...state,
				wordFive: payload,
			};
		case ENTER_SEED_PHRASE_WORD_SIX:
			return {
				...state,
				wordSix: payload,
			};
		case ENTER_SEED_PHRASE_WORD_SEVEN:
			return {
				...state,
				wordSeven: payload,
			};
		case ENTER_SEED_PHRASE_WORD_EIGHT:
			return {
				...state,
				wordEight: payload,
			};
		case ENTER_SEED_PHRASE_WORD_NINE:
			return {
				...state,
				wordNine: payload,
			};
		case ENTER_SEED_PHRASE_WORD_TEN:
			return {
				...state,
				wordTen: payload,
			};
		case ENTER_SEED_PHRASE_WORD_ELEVEN:
			return {
				...state,
				wordEleven: payload,
			};
		case ENTER_SEED_PHRASE_WORD_TWELVE:
			return {
				...state,
				wordTwelve: payload,
			};
		case ENTER_SEED_PHRASE_UNLOCK_SHOW:
			return {
				...state,
				enterSeedPhraseUnlockIsVisible: true,
			};
		case ENTER_SEED_PHRASE_UNLOCK_HIDE:
			return {
				...state,
				enterSeedPhraseUnlockIsVisible: false,
			};
		case ENTER_SEED_PHRASE_REGISTER_SHOW:
			return {
				...state,
				enterSeedPhraseIsVisible: true,
				side: "register",
			};
		case ENTER_SEED_PHRASE_REGISTER_HIDE:
			return {
				...state,
				enterSeedPhraseIsVisible: false,
				side: "register",
			};
		case ENTER_SEED_PHRASE_SAVE_TO_LOCAL_STORAGE:
			return {
				...state,
				encryptedSeedPhrase: payload,
				emptyStorage: false,
			};
		case ENTER_SEED_PHRASE_EMPTY_STORAGE:
			return {
				...state,
				emptyStorage: payload,
			};
		default:
			return state;
	}
};

export default enterSeedPhrase;
