import React, {Fragment} from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from '../components/themes/Theme';
import CentralPanel from '../components/CentralPanel'
import SubPanel from '../components/SubPanel'
import { 
  ContentStyle,
  NavStyle,
  NavItemStyle
} from '../components/styles/Style'

import Nav from '../components/Nav'
import SubNav from '../components/SubNav'

function MainPage() {
  return (
  <ThemeProvider theme={Theme}>
    <Nav/>
    <SubNav/>
    <ContentStyle variant='primary'>
      <CentralPanel/>
      <SubPanel />
    </ContentStyle>
  </ThemeProvider>
  );
}

export default MainPage;
