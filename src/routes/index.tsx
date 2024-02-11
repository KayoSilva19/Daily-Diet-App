import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './app.routes'

import { View } from 'react-native'
import theme from 'src/theme'

export function Routes() {
  const { COLORS } = theme

  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <NavigationContainer>
        <AppRoutes /> 
      </NavigationContainer>
    </View>
  )
}