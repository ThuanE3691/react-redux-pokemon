import { PokemonPageInfo, PokemonPageQuery } from "./types";

export const defaultPageQuery: PokemonPageQuery = {
	page: 0,
	itemPerPage: 20,
};

export const initialPageInfo: PokemonPageInfo = {
	page: 0,
	itemPerPage: 20,
	totalPage: 0,
};
