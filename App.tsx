import {
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
} from '@expo-google-fonts/inter'
import { useFonts } from 'expo-font'

import { FC } from 'react'

import { MainProvider } from '@/components/providers'

const App: FC = () => {
  const [isFontLoaded, isFontError] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
  })

  if (!isFontLoaded && !isFontError) return null

  return <MainProvider />
}

export default App
