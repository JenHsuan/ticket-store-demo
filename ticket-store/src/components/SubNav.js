import React, {useState} from 'react'
import { 
    NavStyle
} from '../components/styles/Style'
import CircleIcon from '../components/CircleIcon'
import {
    selectPageState
} from '../components/states/states';
import { useDispatch, useSelector } from 'react-redux';

const SubNav = () => {
    const currentPage = useSelector(selectPageState);
    const [color, setColor] = useState('red');
    const [textColor, setTextColor] = useState('white');

    return (
        <NavStyle variant='secondary'>
            {currentPage == 0 ? (
                <CircleIcon width={50} height={50} color="red" text="1" textColor="white"/>
            ) : (
                <CircleIcon width={50} height={50} color="#F5F3F3" text="1" textColor="gray"/>
            )}
            {' > '}
            {currentPage == 1 ? (
                <CircleIcon width={50} height={50} color="red" text="2" textColor="white"/>
            ) : (
                <CircleIcon width={50} height={50} color="#F5F3F3" text="2" textColor="gray"/>
            )}
            {' > '}
            {currentPage == 2 ? (
                <CircleIcon width={50} height={50} color="red" text="3" textColor="white"/>
            ) : (
                <CircleIcon width={50} height={50} color="#F5F3F3" text="3" textColor="gray"/>
            )}
        </NavStyle>
    )
}

export default SubNav
