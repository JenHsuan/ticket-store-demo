import React from 'react'
import { 
    NextStepButtonStyle
} from './styles/Style'
import { useDispatch, useSelector } from 'react-redux';
import {
    selectColorState
} from './states/states'
import { 
    setColor
} from './actions/ticketAction';

const ColorCircleIcon = (props) => {
    var {height, width, color, text, textColor} = props;
    const disPatch = useDispatch();
    const currentColor = useSelector(selectColorState);
    const switchColor = () => {
        disPatch(setColor(color))
    }

    return (
        <span onClick={switchColor}>
            <svg height = {height} width = {width}>
                <circle cx={width/2} cy={height/2} r={height/2} stroke="none" stroke-width="3" fill={color} />
                <text x="50%" y="50%" text-anchor="middle" stroke={textColor} stroke-width="2px" dy=".3em">
                    {color === currentColor ? text : ''}
                </text>
            </svg> 
        </span>
    )
}

export default ColorCircleIcon
