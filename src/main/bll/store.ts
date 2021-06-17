import {combineReducers, createStore} from "redux";
import {reducer} from "./reducer";

const RootReducer = combineReducers({
    reducer: reducer
})

export const store = createStore(RootReducer)
export type RootStoreType =ReturnType<typeof RootReducer>