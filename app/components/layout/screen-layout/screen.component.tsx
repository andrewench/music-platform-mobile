import { styled } from 'styled-components'

import { FC, PropsWithChildren } from 'react'
import { View } from 'react-native'

export const ScreenLayout: FC<PropsWithChildren> = ({ children }) => {
  return <StyledView>{children}</StyledView>
}

const StyledView = styled(View)`
  min-height: 100%;
  padding: 20px;
`
