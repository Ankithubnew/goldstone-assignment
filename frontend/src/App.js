import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Allroutes from './Components/Allroutes';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
      <Navbar />
      <Allroutes />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
