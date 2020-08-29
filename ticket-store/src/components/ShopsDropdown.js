import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    selectShopsState
} from './states/states'
import { 
    getShops,
    setShopID
} from './actions/ticketAction';
import { 
    DropDownStyle
} from '../components/styles/Style'


const ShopsDropdown = () => {
    const disPatch = useDispatch();
    const shops = useSelector(selectShopsState);
    
    useEffect(()=> {
        disPatch(getShops())
    }, [])

    const onChange = e => {
        console.log(e.target.value)
        disPatch(setShopID(e.target.value))
    }

    return (
        <DropDownStyle 
            variant='primary' 
            onChange={onChange}>
            {shops.map(shop => (
                <option value={shop.id}>{shop.title}</option>
            ))}
        </DropDownStyle>
    )
}

export default ShopsDropdown
