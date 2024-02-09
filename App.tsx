import { StatusBar, Text } from 'react-native';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter'
import { ThemeProvider } from 'styled-components'
import defaultTheme from './src/theme'

import { Home } from '@screens/Home';

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

    { fontsLoaded ?  <Home /> : <Text>'Carregando...'</Text> }
   
   </ThemeProvider>
  );
}
