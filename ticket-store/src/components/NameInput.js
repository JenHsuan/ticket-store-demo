import React, {useEffect, createRef} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    selectNameState
} from '../components/states/states'
import { 
    setName
} from '../components/actions/ticketAction';
import { 
    InputStyle
} from '../components/styles/Style'

const NameInput = () => {
    const text = createRef();
    const name = useSelector(selectNameState);
    const disPatch = useDispatch();

    useEffect(() => {
        if (name.length !== 0) {
            text.current.value = name;
        }
    },[]);

    const onChange = e => {
        if (text.current.value !== '') {
            disPatch(setName(e.target.value));
        }
    }

    return (
        <InputStyle 
            variant='primary'
            ref={text} 
            type="text" 
            placeholder="請輸入店舖名稱..." 
            onChange={onChange}/>
        )
}

export default NameInput
