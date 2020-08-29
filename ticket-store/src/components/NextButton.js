import React, {useEffect, useState} from 'react'
import { 
    NextStepButtonStyle
} from './styles/Style'
import { useDispatch, useSelector } from 'react-redux';
import {
    selectPageState,
    selectNameState
} from './states/states'
import { 
    setCurrentPage
} from './actions/ticketAction';

const NextButton = () => {
    const [enable, setEnable] = useState(true)
    const disPatch = useDispatch();
    const currentPage = useSelector(selectPageState);
    const name = useSelector(selectNameState);
    const switchPage = () => {
        if (currentPage == 0) {
            disPatch(setCurrentPage(1))
        } else {
            disPatch(setCurrentPage(2))
        }
        console.log('next step')
    }

    const alphanumeric = str => {
        var code, i, len;
      
        for (i = 0, len = str.length; i < len; i++) {
          code = str.charCodeAt(i);
          if (!(code > 47 && code < 58) && // numeric (0-9)
              !(code > 64 && code < 91) && // upper alpha (A-Z)
              !(code > 96 && code < 123)) { // lower alpha (a-z)
            return false;
          }
        }
        return true;
      };

    useEffect(()=> {
        if (name.length > 26 || name.length === 0) {
            setEnable(false)
        } else {
            setEnable(true)
        }

        for (var i = 0; i < name.length; i++) {
            if (!alphanumeric(name[i])) {
                setEnable(false)
            }
        }
    }, [name])

    return (
        enable === true ? (
            <NextStepButtonStyle 
            variant='focus' 
            onClick = {switchPage}>
            {currentPage == 0 ? '下一步' : '確定送出'}
            </NextStepButtonStyle>
        ) : (
            <NextStepButtonStyle 
            variant='unFocus' 
            disabled
            onClick = {switchPage}>
            {currentPage == 0 ? '下一步' : '確定送出'}
        </NextStepButtonStyle>
        )
    )
}

export default NextButton
