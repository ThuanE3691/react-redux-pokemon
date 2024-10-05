import { Dispatch } from "redux";
import {
	NEXT_PAGE_ACTION,
	PaginationActionType,
	PREV_PAGE_ACTION,
	SET_CURRENT_PAGE,
} from "./types";

export const triggerPrevPage = () => {
	return (dispatch: Dispatch<PaginationActionType>) => {
		dispatch({ type: PREV_PAGE_ACTION });
	};
};

export const triggerNextPage = () => {
	return (dispatch: Dispatch<PaginationActionType>) => {
		dispatch({ type: NEXT_PAGE_ACTION });
	};
};

export const triggerChangePage = (page: number) => {
	return (dispatch: Dispatch<PaginationActionType>) => {
		dispatch({ type: SET_CURRENT_PAGE, payload: page });
	};
};
