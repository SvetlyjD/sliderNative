import { actionLinks } from "./actionType"
import { initialState } from "./initialState"



export function reducer(state = initialState, action) {

    switch (action.type) {
        case actionLinks:
            return { ...state, link: action.payload }
        default: return state
    }

}