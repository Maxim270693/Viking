
const IS_MODAL = "IS-MODAL";


const initialState = {
    basket: [],
    isModal: false
}

export const reducer = (state=initialState, action:ActionType) => {
    switch (action.type) {
        case IS_MODAL:
            return {...state, isModal: action.value}
        default:
            return state
    }
}

export const isModalAC = (value: boolean) => ({type: IS_MODAL, value} as const)


export type isModalActionType = ReturnType<typeof isModalAC>
export type ActionType = isModalActionType

