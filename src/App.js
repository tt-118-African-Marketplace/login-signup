import React from "react"; 
import './App.css'
import styled from 'styled-components'
import { AccountBox } from './components/AccountBox';

const AppStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;`;

function App() {
  return <AppStyle>
    <AccountBox />
  </AppStyle>
}



export default App;