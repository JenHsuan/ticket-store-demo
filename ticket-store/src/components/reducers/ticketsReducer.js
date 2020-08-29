//Types
import { 
    SET_CURRENT_PAGE,
    SET_SHOPID,
    SET_NAME,
    SET_COLOR,
    SET_FEE,
    SET_DISCOUNT
} from '../types'

//States
import {
    initialState,
} from '../states/states'

//Reducer
const ticketsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload < 3 ? action.payload : state.currentPage
            }
        case SET_SHOPID:
            return {
                ...state,
                shopId: action.payload
            }
        case SET_COLOR:
            return {
                ...state,
                color: action.payload 
            }
        case SET_NAME:
            return {
                ...state,
                name: action.payload
            }
        case SET_FEE:
            return {
                ...state,
                fee: action.payload 
            }
        case SET_DISCOUNT:
            return {
                ...state,
                discount: action.payload
            }
        default:
            return state; 
    }
}

export default ticketsReducer;