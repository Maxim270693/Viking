import {combineReducers, createStore} from "redux";
import {priceReducer} from "./reducer";

const RootReducer = combineReducers({
    price: priceReducer
})

export const store = createStore(RootReducer)
export type RootStoreType =ReturnType<typeof RootReducer>