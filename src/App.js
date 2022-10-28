import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';


import Modal from '../src/components/Modal'

function App() {
  return (
    <div className="App" 
      style={{backgroundImage:"url(/images/pict.jpg)",
      height:"100vh",position:"relative"
    }}>
      The Agri school
      <Modal />
    </div>
  );
}

const HomeContainer  = styled.div`
  
`;

export default App;
