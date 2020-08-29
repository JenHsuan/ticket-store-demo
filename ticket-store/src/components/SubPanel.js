import React, {Fragment} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { 
    PanelStyle,
    TitleStyle
} from '../components/styles/Style';
import NextButton from './NextButton';
import BackButton from './BackButton';
import {
    selectPageState
} from '../components/states/states';
import { useDispatch, useSelector } from 'react-redux';
  
const SubPanel = () => {
    const currentPage = useSelector(selectPageState);
    const switchPage = page => {
        switch(page) {
          case 0:   
            return (
                <PanelStyle variant='sub'>
                    <NextButton/>
                </PanelStyle>
            );
          case 1:   
            return (
                <PanelStyle variant='subStepTwo'>
                <TitleStyle variant='sub'>
                    <FontAwesomeIcon icon={faInfoCircle} />
                         小提醒
                </TitleStyle>
                <ul>
                    <li>發送費會每日結算前一天實際發送張數、並在下期請款時收取</li>
                    <li>折抵費與折抵金額，會依實際消費折抵金額收取</li>
                </ul>
                <BackButton/>
                <NextButton/>
                </PanelStyle>
            );
          default:
            return <Fragment/>;
        }
      }
    return (
    <Fragment>
    {switchPage(currentPage)}
    </Fragment>
  )
}

export default SubPanel



