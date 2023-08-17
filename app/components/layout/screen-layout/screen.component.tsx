import { StatusBar } from 'expo-status-bar'

import { FC, PropsWithChildren } from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { styled } from 'styled-components'

export const ScreenLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />

      <StyledView>{children}</StyledView>
    </SafeAreaView>
  )
}

const StyledView = styled(View)`
  min-height: 100%;
  padding: 20px;
`
