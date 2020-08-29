import axios from 'axios';

//Types
import { 
    SET_CURRENT_PAGE,
    SET_SHOPID,
    GET_SHOPS,
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

export const getShops = () => async dispatch => {
    //Use fake data if no APIs
    dispatch({
        type: GET_SHOPS, 
        payload: [
              { "id": 0, 
                "title": "實體店"},
              { "id": 1, 
                "title": "網路店"},
              { "id": 2, 
                "title": "路邊攤"}
            ]
        })
    /*
    try {
        res = await axios.get('localhost:8000/shops');
        await dispatch({
                type: GET_SHOPS, 
                payload: res.data})
    } catch (error) {
        //res.data = error;
        console.log(error);
    
    }
    */
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

