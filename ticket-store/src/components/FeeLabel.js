import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    selectFeeState
} from '../components/states/states'
import { 
    LabelStyle
} from '../components/styles/Style'

const FeeLabel = () => {
    const fee = useSelector(selectFeeState);
    
    return (
        <LabelStyle variant='primary'>
            ${fee}
        </LabelStyle>
    )
}

export default FeeLabel
