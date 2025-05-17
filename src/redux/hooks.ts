import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { Action, Dispatch } from "redux";

export const useAppDispatch = useDispatch<Dispatch<Action>>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
