import React from 'react';
import { Routes } from './routes'
import { GlobalStyle } from './global/globalStyle';
import {AuthContextProvider} from './hooks/auth'

function App() {
  return (
    <>
    <AuthContextProvider>
      <Routes/>
      <GlobalStyle/>
    </AuthContextProvider>
    </>
  );
}

export default App;
