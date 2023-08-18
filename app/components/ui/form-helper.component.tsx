import { Link } from '@react-navigation/native'
import { FC } from 'react'
import { Text } from 'react-native'

import { styled } from 'styled-components'

import { AppColors } from '@/shared/colors'

import { TScreenList } from '@/shared/types'

interface IFormHelper {
  label: string
  link: {
    label: string
    screen: TScreenList
  }
}

export const FormHelper: FC<IFormHelper> = ({ label, link }) => {
  return (
    <StyledText color={AppColors.GREY_1}>
      {label + ' '}

      <Link to={{ screen: link.screen }}>
        <StyledLabel color={AppColors.ACCENT_COLOR}>{link.label}</StyledLabel>
      </Link>

      {'.'}
    </StyledText>
  )
}

const StyledText = styled(Text)<{ color: string }>`
  text-align: center;
  font-family: 'Inter_400Regular';
  font-size: 16px;
  color: ${({ color }) => color};
`

const StyledLabel = styled(Text)<{ color: string }>`
  color: ${({ color }) => color};
`
