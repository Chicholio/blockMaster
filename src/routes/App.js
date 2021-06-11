import { ChakraProvider } from '@chakra-ui/react';
import React from 'react'
import Login from '../containers/login/Login'

function App() {
  return (
    <ChakraProvider>
      <Login />
    </ChakraProvider>
  );
}

export default App;
