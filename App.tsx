import { StatusBar } from 'react-native';

import { ThemeProvider } from 'styled-components'
import defaultTheme from './src/theme'

import { Home } from '@screens/Home';

export default function App() {
  return (
   <ThemeProvider theme={defaultTheme}>
    <StatusBar 
      barStyle="dark-content" 
      backgroundColor="transparent"
      translucent
    />
    <Home />
   </ThemeProvider>
  );
}
