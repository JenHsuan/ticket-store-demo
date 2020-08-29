import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './pages/MainPage';
import { Provider } from 'react-redux';
import store from './components/store/store';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 0;
    background-color:#E7E4E4;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
      <Provider store = {store}>
        <MainPage/>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

