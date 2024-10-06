import { useSelector } from "react-redux";
import { useEffect } from "react";
import {
	fetchPokemons,
	getLoadingStatus,
	getPokemons,
} from "../features/pokemons";
import { getPageInfo } from "../features/pokemonsPagination/selector";
import { useAppDispatch } from "../client";

function ListPokemon() {
	const pokemons = useSelector(getPokemons);
	const pageInfo = useSelector(getPageInfo);
	const isLoading = useSelector(getLoadingStatus);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(
			fetchPokemons({
				page: pageInfo.page,
				itemPerPage: pageInfo.itemPerPage,
			})
		);
	}, [dispatch, pageInfo.itemPerPage, pageInfo.page]);

	if (isLoading) return <div>Loading Data...</div>;

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "start",
			}}
		>
			{pokemons?.map((p) => (
				<div key={p.name}>{p.name}</div>
			))}
		</div>
	);
}

export default ListPokemon;
