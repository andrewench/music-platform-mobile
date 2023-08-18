import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FC } from 'react'

import { Login, Restore, SignUp } from '@/components/screens'

const { Navigator, Screen } = createNativeStackNavigator()

export const NavigationProvider: FC = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Screen name="login" component={Login} />
        <Screen name="signup" component={SignUp} />
        <Screen name="restore" component={Restore} />
      </Navigator>
    </NavigationContainer>
  )
}
