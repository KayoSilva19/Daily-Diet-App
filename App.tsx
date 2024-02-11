import { StatusBar, Text } from 'react-native';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter'
import { ThemeProvider } from 'styled-components'
import defaultTheme from './src/theme'

import Loading from '@components/Loading';
import { Routes } from '@routes/index';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  })

  return (
   <ThemeProvider theme={defaultTheme}>
    <StatusBar 
      barStyle="dark-content" 
      backgroundColor="transparent"
      translucent
    />

    { fontsLoaded ?  <Routes /> : <Loading/> }
   
   </ThemeProvider>
  );
}
