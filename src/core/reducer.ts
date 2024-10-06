import { combineReducers } from "redux";
import pokemonsReducer from "../features/pokemons/reducer";
import paginationReducer from "../features/pokemonsPagination/reducer";

const rootReducer = combineReducers({
	pokemons: pokemonsReducer,
	pageInfo: paginationReducer,
});

export default rootReducer;
