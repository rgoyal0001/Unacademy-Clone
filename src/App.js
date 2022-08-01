import React from 'react';
import {
  ChakraProvider,
  theme
} from '@chakra-ui/react';
import { Explore } from './components/Explore';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Explore />
    </ChakraProvider>
  );
}

export default App;
