
const IS_MODAL = "IS-MODAL";
const ADD_PRICE = "ADD-PRICE";

export type PriceType = {
    id: number
    title: string
}

type initialStateType = {
    basket: Array<string>
    price: Array<PriceType>
    isModal: boolean
}

const initialState = {
    basket: [],
    price: [],
    isModal: false,
}


export const priceReducer = (state:initialStateType = initialState, action:ActionType): initialStateType => {
    switch (action.type) {
        case IS_MODAL:
            return {...state, isModal: action.value}
        case ADD_PRICE:
            return {...state, price: [...state.price, action.payload]}
        default:
            return state
    }
}

export const isModalAC = (value: boolean) => ({type: IS_MODAL, value} as const)
export const priceAC = (payload: PriceType) => ({type:ADD_PRICE, payload} as const)


export type isModalActionType = ReturnType<typeof isModalAC>
export type priceActionType = ReturnType<typeof priceAC>
export type ActionType = isModalActionType | priceActionType

