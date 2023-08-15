import {
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
} from '@expo-google-fonts/inter'
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'

import { FC } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Login } from '@/components/screens'

const App: FC = () => {
  const [isFontLoaded, isFontError] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
  })

  if (!isFontLoaded && !isFontError) return null

  return (
    <SafeAreaView>
      <StatusBar style="auto" />

      <Login />
    </SafeAreaView>
  )
}

export default App
