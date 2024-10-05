import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store";
import { useEffect } from "react";
import { fetchPokemons } from "../features/pokemons/action";
import { getPokemons, getLoadingStatus } from "../features/pokemons/selector";
import { getPageInfo } from "../features/pokemonsPagination/selector";

function ListPokemon() {
	const pokemons = useSelector(getPokemons);
	const isLoading = useSelector(getLoadingStatus);
	const pageInfo = useSelector(getPageInfo);

	const dispatch: AppDispatch = useDispatch();

	useEffect(() => {
		dispatch(
			fetchPokemons({
				page: pageInfo.page,
				itemPerPage: pageInfo.itemPerPage,
			})
		);
	}, [pageInfo.page]);

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
