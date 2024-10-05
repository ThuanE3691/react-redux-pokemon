import { Dispatch } from "redux";
import {
	PokemonActionTypes,
	FETCH_POKEMONS_REQUEST,
	FETCH_POKEMONS_SUCCESS,
	FETCH_POKEMONS_FAILURE,
	PokemonsAPIResponse,
} from "./types";
import callApi from "../../client";
import { baseUrlPokemonsAPI } from "../../constants";
import { defaultPageQuery } from "../pokemonsPagination/factory";
import {
	PaginationActionType,
	SET_TOTAL_PAGE,
} from "../pokemonsPagination/types";

export const fetchPokemons = (query = defaultPageQuery) => {
	return async (
		dispatch: Dispatch<PokemonActionTypes | PaginationActionType>
	) => {
		dispatch({ type: FETCH_POKEMONS_REQUEST });

		const limit = query.itemPerPage;
		const offset = query.page * query.itemPerPage;

		try {
			const data: PokemonsAPIResponse = await callApi(
				`${baseUrlPokemonsAPI}?limit=${limit}&offset=${offset}`
			);

			dispatch({
				type: FETCH_POKEMONS_SUCCESS,
				payload: data.results,
			});

			const totalPage = Math.ceil(data.count / limit);

			dispatch({
				type: SET_TOTAL_PAGE,
				payload: totalPage,
			});
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (error) {
			dispatch({
				type: FETCH_POKEMONS_FAILURE,
				error: "Failed to fetch items",
			});
		}
	};
};
