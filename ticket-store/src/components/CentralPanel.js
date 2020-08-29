import React, {Fragment} from 'react'
import {
  selectPageState
} from '../components/states/states'
import { useSelector } from 'react-redux'
import CentralPanelStepOne from '../components/CentralPanelStepOne'
import CentralPanelStepTwo from '../components/CentralPanelStepTwo'
import CentralPanelStepThree from '../components/CentralPanelStepThree'

const CentralPanel = () => {
  const currentPage = useSelector(selectPageState);
  const switchPage = page => {
    switch(page) {
      case 0:   
        return <CentralPanelStepOne/>;
      case 1:   
        return <CentralPanelStepTwo/>;
      case 2: 
        return <CentralPanelStepThree/>;
      default:
        return <CentralPanelStepOne/>;
    }
  }

  return (
    <Fragment>
    {switchPage(currentPage)}
    </Fragment>
  )
}

export default CentralPanel



