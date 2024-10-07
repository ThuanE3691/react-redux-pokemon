import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import PokeList from "./extensions/Pokemon/containers/PokeListPage/PokeListPage";
import PokeDetail from "./extensions/Pokemon/containers/PokeDetailPage/PokeDetailPage";
import { AnimatePresence } from "framer-motion";

function App() {
	const location = useLocation();
	return (
		<AnimatePresence mode="wait" initial={false}>
			<Routes location={location}>
				<Route path="/" element={<PokeList />} key={location.key}></Route>
				<Route
					path="/pokemon/:id"
					element={<PokeDetail />}
					key={location.key}
				></Route>
			</Routes>
		</AnimatePresence>
	);
}

export default App;
