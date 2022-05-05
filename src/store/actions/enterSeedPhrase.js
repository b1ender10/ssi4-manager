import {
	SHOW_ENTER_SEED_PHRASE,
	ENTER_SEED_PHRASE_SIDE,
	ENTER_SEED_PHRASE_WORD_ONE,
	ENTER_SEED_PHRASE_WORD_TWO,
	ENTER_SEED_PHRASE_WORD_THREE,
	ENTER_SEED_PHRASE_WORD_FIVE,
	ENTER_SEED_PHRASE_WORD_SIX,
	ENTER_SEED_PHRASE_WORD_SEVEN,
	ENTER_SEED_PHRASE_WORD_EIGHT,
	ENTER_SEED_PHRASE_WORD_NINE,
	ENTER_SEED_PHRASE_WORD_TEN,
	ENTER_SEED_PHRASE_WORD_ELEVEN,
	ENTER_SEED_PHRASE_WORD_TWELVE,
	ENTER_SEED_PHRASE_WORD_FOUR,
	ENTER_SEED_PHRASE_UNLOCK_SHOW,
	ENTER_SEED_PHRASE_UNLOCK_HIDE,
	SET_PASSWORD,
	ENTER_SEED_PHRASE_SAVE_TO_LOCAL_STORAGE,
	ENTER_SEED_PHRASE_REGISTER_SHOW,
	ENTER_SEED_PHRASE_REGISTER_HIDE,
	ENTER_SEED_PHRASE_EMPTY_STORAGE,
	ENTER_ENCRYPTED_SEED_PHRASE,
	HIDE_REVEAL_SEED_PHRASE,
	SHOW_REVEAL_SEED_PHRASE,
	SET_TIP,
} from "./types";

export function setTip(payload) {
	return {type: SET_TIP, payload};
}

export function showRevealSeedPhrase(payload) {
	return {type: SHOW_REVEAL_SEED_PHRASE, payload};
}

export function hideRevealSeedPhrase() {
	return {type: HIDE_REVEAL_SEED_PHRASE};
}

export function showEnterSeedPhrase(payload) {
	return {type: SHOW_ENTER_SEED_PHRASE, payload};
}

export function setSeedPassword(payload) {
	return {type: SET_PASSWORD, payload};
}

// export function hideEnterSeedPhrase() {
//     return { type: HIDE_ENTER_SEED_PHRASE }
// }

export function wordOneEnterSeedPhrase(payload) {
	return {type: ENTER_SEED_PHRASE_WORD_ONE, payload};
}

export function setNewSide(payload) {
	return {type: ENTER_SEED_PHRASE_SIDE, payload};
}

export function setEncryptedSeedPhrase(payload) {
	return {type: ENTER_ENCRYPTED_SEED_PHRASE, payload};
}

export function wordTwoEnterSeedPhrase(payload) {
	return {type: ENTER_SEED_PHRASE_WORD_TWO, payload};
}

export function wordThreeEnterSeedPhrase(payload) {
	return {type: ENTER_SEED_PHRASE_WORD_THREE, payload};
}

export function wordFourEnterSeedPhrase(payload) {
	return {type: ENTER_SEED_PHRASE_WORD_FOUR, payload};
}

export function wordFiveEnterSeedPhrase(payload) {
	return {type: ENTER_SEED_PHRASE_WORD_FIVE, payload};
}

export function wordSixEnterSeedPhrase(payload) {
	return {type: ENTER_SEED_PHRASE_WORD_SIX, payload};
}

export function wordSevenEnterSeedPhrase(payload) {
	return {type: ENTER_SEED_PHRASE_WORD_SEVEN, payload};
}

export function wordEightEnterSeedPhrase(payload) {
	return {type: ENTER_SEED_PHRASE_WORD_EIGHT, payload};
}

export function wordNineEnterSeedPhrase(payload) {
	return {type: ENTER_SEED_PHRASE_WORD_NINE, payload};
}

export function wordTenEnterSeedPhrase(payload) {
	return {type: ENTER_SEED_PHRASE_WORD_TEN, payload};
}

export function wordElevenEnterSeedPhrase(payload) {
	return {type: ENTER_SEED_PHRASE_WORD_ELEVEN, payload};
}

export function wordTwelveEnterSeedPhrase(payload) {
	return {type: ENTER_SEED_PHRASE_WORD_TWELVE, payload};
}

export function showEnterSeedPhraseRegister() {
	return {type: ENTER_SEED_PHRASE_REGISTER_SHOW};
}

export function hideEnterSeedPhraseRegister() {
	return {type: ENTER_SEED_PHRASE_REGISTER_HIDE};
}

export function showEnterSeedPhraseUnlock() {
	return {type: ENTER_SEED_PHRASE_UNLOCK_SHOW};
}

export function hideEnterSeedPhraseUnlock() {
	return {type: ENTER_SEED_PHRASE_UNLOCK_HIDE};
}

export function enterSeedPhraseSaveToLocalStorage(payload) {
	localStorage.setItem("esp", payload);
	return {type: ENTER_SEED_PHRASE_SAVE_TO_LOCAL_STORAGE, payload};
}

export function enterSeedPhraseEmptyStorage(payload) {
	return {type: ENTER_SEED_PHRASE_EMPTY_STORAGE, payload};
}
