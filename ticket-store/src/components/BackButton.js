import React, {useEffect} from 'react'
import { 
    BackStepButtonStyle
} from './styles/Style'
import { useDispatch, useSelector } from 'react-redux';
import {
    selectPageState
} from './states/states'
import { 
    setCurrentPage
} from './actions/ticketAction';

const BackButton = () => {
    const disPatch = useDispatch();
    const currentPage = useSelector(selectPageState);
    const switchPage = () => {
        if (currentPage == 1) {
            disPatch(setCurrentPage(0))
        }
        console.log('next step')
    }

    useEffect(()=> {
        console.log('current page: ' + currentPage);
    }, [currentPage])

    return (
        <BackStepButtonStyle
            variant='focus' 
            onClick = {switchPage}>
            修改設定
        </BackStepButtonStyle>
    )
}

export default BackButton
