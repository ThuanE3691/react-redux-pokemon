import { useSelector, useDispatch } from "react-redux";
import { getPageInfo } from "../features/pokemonsPagination/selector";
import {
	triggerChangePage,
	triggerNextPage,
	triggerPrevPage,
} from "../features/pokemonsPagination/action";
import { AppDispatch } from "../store";
import { getLoadingStatus } from "../features/pokemons/selector";

function Pagination() {
	const pageInfo = useSelector(getPageInfo);
	const isLoading = useSelector(getLoadingStatus);
	const dispatch: AppDispatch = useDispatch();

	const onClickChangePage = (e: React.MouseEvent<HTMLButtonElement>) => {
		const target = e.target as HTMLButtonElement;
		if (target.name === "prev") {
			dispatch(triggerPrevPage());
		} else {
			dispatch(triggerNextPage());
		}
	};

	if (isLoading) return;

	return (
		<div>
			<div
				style={{
					display: "flex",
					gap: "0.5rem",
					alignItems: "center",
					marginTop: "0.5rem",
				}}
			>
				<button name="prev" onClick={onClickChangePage}>
					Prev
				</button>
				{pageInfo.page + 1} / {pageInfo.totalPage}
				<button name="next" onClick={onClickChangePage}>
					Next
				</button>
			</div>
			<div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem" }}>
				{Array.from({ length: 5 }, (_, p) => (
					<button
						key={p}
						onClick={() => dispatch(triggerChangePage(p + pageInfo.page))}
					>
						{p + pageInfo.page + 1}
					</button>
				))}
			</div>
		</div>
	);
}

export default Pagination;
