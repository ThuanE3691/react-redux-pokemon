import { initialPageInfo } from "./factory";
import {
	NEXT_PAGE_ACTION,
	PaginationActionType,
	PokemonPageInfo,
	PREV_PAGE_ACTION,
	SET_CURRENT_PAGE,
	SET_TOTAL_PAGE,
} from "./types";

export default function paginationReducer(
	state = initialPageInfo,
	action: PaginationActionType
): PokemonPageInfo {
	switch (action.type) {
		case PREV_PAGE_ACTION: {
			if (state.page === 0) return state;
			return { ...state, page: state.page - 1 };
		}
		case NEXT_PAGE_ACTION: {
			if (state.page === state.totalPage) return state;
			return { ...state, page: state.page + 1 };
		}
		case SET_TOTAL_PAGE:
			return { ...state, totalPage: action.payload };
		case SET_CURRENT_PAGE:
			return { ...state, page: action.payload };
		default:
			return state;
	}
}
