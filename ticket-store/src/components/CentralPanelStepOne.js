import React from 'react'
import { 
    PanelStyle,
    TitleStyle,
    PanelItemStyle,
    ColorCircleBarStyle
} from '../components/styles/Style'
import ColorCircleIcon from '../components/ColorCircleIcon'
import NameInput from '../components/NameInput'
import ShopsDropdown from '../components/ShopsDropdown'

const CentralPanelStepOne = () => {
    return (
        <PanelStyle variant='center'>
            <TitleStyle variant='main'>
                選擇店舖
            </TitleStyle>
            <TitleStyle variant='sub'>
                指定發送店舖
            </TitleStyle>
            <ShopsDropdown/>
            <TitleStyle variant='sub'>
                名稱
            </TitleStyle>
            <NameInput/>
            <TitleStyle variant='sub'>
                票卷顏色
            </TitleStyle>
            <ColorCircleBarStyle variant='primary'>
                <ColorCircleIcon width={80} height={80} color="red" text="&#10003;" textColor="white"/>
                <ColorCircleIcon width={80} height={80} color="green" text="&#10003;" textColor="white"/>
                <ColorCircleIcon width={80} height={80} color="purple" text="&#10003;" textColor="white"/>
                <ColorCircleIcon width={80} height={80} color="blue" text="&#10003;" textColor="white"/>
                <ColorCircleIcon width={80} height={80} color="pink" text="&#10003;" textColor="white"/>
            </ColorCircleBarStyle>
        </PanelStyle>
    )
}

export default CentralPanelStepOne
