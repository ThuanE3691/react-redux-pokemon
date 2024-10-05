import { Action } from "redux";

export const FETCH_POKEMONS_REQUEST = "FETCH_POKEMONS_REQUEST";
export const FETCH_POKEMONS_SUCCESS = "FETCH_POKEMONS_SUCCESS";
export const FETCH_POKEMONS_FAILURE = "FETCH_POKEMONS_FAILURE";

export interface PokemonDataResponse {
	name: string;
	url: string;
	id: number;
}

export interface PokemonsAPIResponse {
	count: number;
	next: string;
	previous: null;
	results: PokemonDataResponse[];
}

export interface Pokemon {
	id: number;
	name: string;
	description: string;
	abilities: string[];
	types: string[];
	stats: string[];
}

export interface PokemonState {
	data: PokemonDataResponse[];
	loading: boolean;
	error: string | null;
}

// Action interfaces
type FetchPokemonsRequestAction = Action<typeof FETCH_POKEMONS_REQUEST> & {};

type FetchPokemonsSuccessAction = Action<typeof FETCH_POKEMONS_SUCCESS> & {
	payload: PokemonDataResponse[];
};

type FetchPokemonsFailureAction = Action<typeof FETCH_POKEMONS_FAILURE> & {
	error: string;
};

export type PokemonActionTypes =
	| FetchPokemonsRequestAction
	| FetchPokemonsSuccessAction
	| FetchPokemonsFailureAction;
