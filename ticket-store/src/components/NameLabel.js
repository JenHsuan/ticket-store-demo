import React, {useEffect, createRef} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    selectNameState
} from '../components/states/states'
import { 
    LabelStyle
} from '../components/styles/Style'


const NameLabel = () => {
    const text = createRef();
    const name = useSelector(selectNameState);
    
    return (
        <LabelStyle variant='primary'>
            {name}
        </LabelStyle>
    )
}

export default NameLabel
