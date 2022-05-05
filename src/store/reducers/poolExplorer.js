import {HIDE_POOL_EXPLORER, SHOW_POOL_EXPLORER} from "../actions/types";

const initialState = {
	poolExplorerIsVisible: false,
};

const swapReducer = (state = initialState, {type}) => {
	switch (type) {
		case SHOW_POOL_EXPLORER:
			return {
				...state,
				poolExplorerIsVisible: true,
			};
		case HIDE_POOL_EXPLORER:
			return {
				...state,
				poolExplorerIsVisible: false,
			};
		default:
			return state;
	}
};

export default swapReducer;
