import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@screens/Home';
import { PercentageDiet } from '@screens/PercentageDiet';

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false}}>
      <Screen
        name='Home'
        component={Home}
      />
      <Screen
        name='PercentageDiet'
        component={PercentageDiet}
      />
    </Navigator>
  )
}