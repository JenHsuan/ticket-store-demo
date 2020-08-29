import React from 'react'

const CircleIcon = (props) => {
    var {height, width, color, text, textColor} = props;
    return (
      <svg height = {height} width = {width}>
        <circle cx={width/2} cy={height/2} r={height/2} stroke="none" stroke-width="3" fill={color} />
        <text x="50%" y="50%" text-anchor="middle" stroke={textColor} stroke-width="2px" dy=".3em">{text}</text>
      </svg> 
    )
}

export default CircleIcon
