import { baseUrlPokemonsAPI } from "../../client/constants";
import { initialPokemonsState } from "./factory";
import {
	FETCH_POKEMONS_REQUEST,
	FETCH_POKEMONS_SUCCESS,
	FETCH_POKEMONS_FAILURE,
	PokemonActionTypes,
	PokemonDataResponse,
	PokemonState,
} from "./types";

const processData = (results: PokemonDataResponse[]): PokemonDataResponse[] => {
	return results.map((r) => {
		const id = parseInt(r.url.replace(baseUrlPokemonsAPI, ""));
		return { ...r, id } as PokemonDataResponse;
	});
};

export default function pokemonsReducer(
	state = initialPokemonsState,
	action: PokemonActionTypes
): PokemonState {
	switch (action.type) {
		case FETCH_POKEMONS_REQUEST:
			return { ...state, loading: true, error: null };
		case FETCH_POKEMONS_SUCCESS: {
			const data = processData(action.payload);
			return {
				...state,
				loading: false,
				data,
			};
		}
		case FETCH_POKEMONS_FAILURE:
			return { ...state, loading: false, error: action.error };
		default:
			return state;
	}
}
