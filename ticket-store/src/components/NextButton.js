import React, {useEffect} from 'react'
import { 
    NextStepButtonStyle
} from './styles/Style'
import { useDispatch, useSelector } from 'react-redux';
import {
    selectPageState
} from './states/states'
import { 
    setCurrentPage
} from './actions/ticketAction';

const NextButton = () => {
    const disPatch = useDispatch();
    const currentPage = useSelector(selectPageState);
    const switchPage = () => {
        if (currentPage == 0) {
            disPatch(setCurrentPage(1))
        } else {
            disPatch(setCurrentPage(2))
        }
        console.log('next step')
    }

    useEffect(()=> {
        console.log('current page: ' + currentPage);
    }, [currentPage])

    return (
        <NextStepButtonStyle 
            variant='focus' 
            onClick = {switchPage}>
            {currentPage == 0 ? '下一步' : '確定送出'}
        </NextStepButtonStyle>
    )
}

export default NextButton
