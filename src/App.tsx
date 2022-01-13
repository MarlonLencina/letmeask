import React from 'react';
import { Routes } from './routes'
import { GlobalStyle } from './global/globalStyle';
import { Home } from './pages/home';
import { NewRoom } from './pages/NewRoom';

function App() {
  return (
    <>
    <Routes/>
    <GlobalStyle/>
    </>
  );
}

export default App;
