import { useEffect } from "react";
import PokeItem from "./components/PokeItem";
import { useSelector, useAppDispatch } from "../../../../lib/store";
import Pagination from "./components/Pagination";
import {
	fetchPokemons,
	getLoadingStatus,
	getPokemons,
} from "./PokeListPage.duck";
import { getPageInfo } from "./components/Pagination.duck";
import style from "./PokemonList.module.css";
import { AnimatePresence, motion } from "framer-motion";

const PokeList = () => {
	const pokemons = useSelector(getPokemons);
	const pageInfo = useSelector(getPageInfo);
	const isLoading = useSelector(getLoadingStatus);

	const dispatch = useAppDispatch();
	// Create the first range
	let range1 = Array.from({ length: 1025 }, (_, i) => i + 1); // 1 to 1025

	// Create the second range
	let range2 = Array.from({ length: 277 }, (_, i) => i + 10001); // 10001 to 10277

	// Combine both ranges into a single array
	let combinedArray = range1.concat(range2);

	useEffect(() => {
		dispatch(
			fetchPokemons({
				page: pageInfo.page,
				itemPerPage: pageInfo.itemPerPage,
			})
		);
	}, [dispatch, pageInfo.itemPerPage, pageInfo.page]);

	return (
		<div className={style.container}>
			<h1>Pokemon List</h1>
			<AnimatePresence>
				{isLoading ? (
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{
							duration: 0.3,
						}}
					>
						Loading...
					</motion.p>
				) : (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{
							duration: 0.3,
						}}
					>
						{pokemons.length > 0 && (
							<div className={style.pokemon_list}>
								{pokemons.map((pokemon, index) => {
									return <PokeItem key={index} pokemon={pokemon} />;
								})}
							</div>
						)}
						<Pagination />
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default PokeList;
