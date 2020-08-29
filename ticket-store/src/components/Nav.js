import React from 'react'
import { 
    NavStyle,
    NavItemStyle
} from '../components/styles/Style'  
import {
  selectPageState
} from '../components/states/states'
import { useDispatch, useSelector } from 'react-redux'

const Nav = () => {
    return (
        <NavStyle variant='primary'>
            <NavItemStyle variant='primary'>Home</NavItemStyle>
        </NavStyle>
    )
}

export default Nav
