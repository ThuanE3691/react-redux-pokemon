import { useDispatch } from "react-redux";
import { AppDispatch } from "../core/store";

export function useAppDispatch(): AppDispatch {
	const dispatch: AppDispatch = useDispatch();
	return dispatch;
}
