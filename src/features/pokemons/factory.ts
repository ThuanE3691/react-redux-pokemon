import { PokemonDataResponse, PokemonState } from "./types";

export const initialDataResponse: PokemonDataResponse[] = [];

export const initialPokemonsState: PokemonState = {
	data: initialDataResponse,
	loading: false,
	error: null,
};
