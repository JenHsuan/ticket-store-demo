import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    selectShopIdState,
    selectNameState,
    selectColorState
  } from '../components/states/states'
import { 
    PanelStyle,
    TitleStyle,
    PanelItemStyle,
    ColorCircleBarStyle
} from '../components/styles/Style'
import { 
    setCurrentPage
} from './actions/ticketAction';

const CentralPanelStepThree = () => {
    const disPatch = useDispatch();
    const shopId = useSelector(selectShopIdState);
    const name = useSelector(selectNameState);
    const color = useSelector(selectColorState);
    const [res, setRes] = useState('')
    useEffect(() => {
        setRes(JSON.stringify({
            shopId: shopId,
            name: name,
            color: color
        }));
        const timer = setTimeout(() => {
            disPatch(setCurrentPage(0))
        }, 3000);
        return () => clearTimeout(timer);
    },[]);

    return (
        <PanelStyle variant='centerStepTwo'>
            {res}
        </PanelStyle>
    )
}

export default CentralPanelStepThree
