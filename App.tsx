import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'

import { FC } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Login } from '@/components/screens'

const App: FC = () => {
  const [loaded] = useFonts({
    'Inter-Light': require('./app/assets/fonts/Inter-Light.ttf'),
    'Inter-Medium': require('./app/assets/fonts/Inter-Medium.ttf'),
    'Inter-Regular': require('./app/assets/fonts/Inter-Regular.ttf'),
  })

  if (!loaded) return null

  return (
    <SafeAreaView>
      <StatusBar style="auto" />

      <Login />
    </SafeAreaView>
  )
}

export default App
