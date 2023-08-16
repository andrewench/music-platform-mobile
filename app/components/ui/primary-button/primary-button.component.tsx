import { styled } from 'styled-components'

import { FC, PropsWithChildren } from 'react'
import { Pressable, Text } from 'react-native'

import { AppColors } from '@/shared/colors'

export const PrimaryButton: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledPrimaryButton>
      <StyledText>{children}</StyledText>
    </StyledPrimaryButton>
  )
}

const StyledPrimaryButton = styled(Pressable)`
  padding: 14px 20px;
  border-radius: 6px;
  background-color: ${AppColors.ACCENT_COLOR};
`

const StyledText = styled(Text)`
  font-size: 16px;
  font-family: 'Inter_400Regular';
  text-align: center;
  color: #fff;
`
