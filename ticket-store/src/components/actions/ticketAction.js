//Types
import { 
    SET_CURRENT_PAGE,
    SET_SHOPID,
    SET_NAME,
    SET_COLOR,
    SET_FEE,
    SET_DISCOUNT
} from '../types'
import { color } from 'styled-system'


//Actions
export const setCurrentPage = page => dispatch => {
    dispatch({
        type: SET_CURRENT_PAGE, 
        payload: page})
}

export const setShopID = shopId => dispatch => {
    dispatch({
        type: SET_SHOPID, 
        payload: shopId})
}

export const setColor = color => dispatch => {
    dispatch({
        type: SET_COLOR, 
        payload: color})
}

export const setName = name => dispatch => {
    dispatch({
        type: SET_NAME, 
        payload: name})
}

export const setFee = fee => dispatch => {
    dispatch({
        type: SET_FEE, 
        payload: fee})
}

export const setDiscount = discount => dispatch => {
    dispatch({
        type: SET_DISCOUNT, 
        payload: discount})
}

