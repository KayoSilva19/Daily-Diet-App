import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@screens/Home';
import { PercentageDiet } from '@screens/PercentageDiet';
import { FoodInformation } from '@screens/FoodInformation';
import { EditSnack } from '@screens/EditSnack';

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
      <Screen
        name='FoodInformation'
        component={FoodInformation}
      />
      <Screen
        name='EditSnack'
        component={EditSnack}
      />
    </Navigator>
  )
}