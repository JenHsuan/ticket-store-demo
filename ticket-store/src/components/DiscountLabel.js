import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    selectDiscountState
} from '../components/states/states'
import { 
    LabelStyle
} from '../components/styles/Style'

const DiscountLabel = () => {
    const fee = useSelector(selectDiscountState);
    
    return (
        <LabelStyle variant='primary'>
            ${fee}
        </LabelStyle>
    )
}

export default DiscountLabel
