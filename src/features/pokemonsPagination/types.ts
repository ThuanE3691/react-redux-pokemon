import { Action } from "redux";

export interface PokemonPageBase {
	page: number;
	itemPerPage: number;
}

export type PokemonPageQuery = PokemonPageBase & {};

export type PokemonPageInfo = PokemonPageBase & {
	totalPage: number;
};

export const PREV_PAGE_ACTION = "PREV_PAGE_ACTION";
export const NEXT_PAGE_ACTION = "NEXT_PAGE_ACTION";
export const SET_TOTAL_PAGE = "SET_PAGE_INFO";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

type PrevPageAction = Action<typeof PREV_PAGE_ACTION> & {};
type NextPageAction = Action<typeof NEXT_PAGE_ACTION> & {};
type SetTotalPage = Action<typeof SET_TOTAL_PAGE> & {
	payload: number;
};
type SetCurrentPage = Action<typeof SET_CURRENT_PAGE> & {
	payload: number;
};

export type PaginationActionType =
	| PrevPageAction
	| NextPageAction
	| SetTotalPage
	| SetCurrentPage;
