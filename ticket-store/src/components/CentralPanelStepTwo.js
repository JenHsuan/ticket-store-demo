import React from 'react'
import { 
    PanelStyle,
    TitleStyle,
    PanelItemStyle,
    ColorCircleBarStyle
} from '../components/styles/Style'
import NameLabel from '../components/NameLabel'
import FeeLabel from '../components/FeeLabel'
import DiscountLabel from '../components/DiscountLabel'

const CentralPanelStepTwo = () => {
    return (
        <PanelStyle variant='centerStepTwo'>
        <PanelItemStyle variant='title'>
          <TitleStyle variant='main'>
            預覽
          </TitleStyle>
        </PanelItemStyle>
        <PanelItemStyle variant='top'>
          <TitleStyle variant='center'>
            確認明細
          </TitleStyle>
          <TitleStyle variant='sub'>
            名稱
          </TitleStyle>
          <NameLabel/>
          <TitleStyle variant='sub'>
            發送店舖
          </TitleStyle>
        </PanelItemStyle>
        <PanelItemStyle variant='mid'>
          <TitleStyle variant='sub'>
            發送費 (預估)
          </TitleStyle>
          <FeeLabel/>
          <TitleStyle variant='sub'>
            折抵費
          </TitleStyle>
          <DiscountLabel/>
        </PanelItemStyle>
        <PanelItemStyle variant='down'>
        </PanelItemStyle>
      </PanelStyle>
    )
}

export default CentralPanelStepTwo
