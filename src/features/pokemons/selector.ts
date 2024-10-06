import { RootState } from "../../core/store";

export const getLoadingStatus = (state: RootState) => state.pokemons.loading;
export const getPokemons = (state: RootState) => state.pokemons.data;
