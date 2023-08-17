import { FC } from 'react'
import { TextInput } from 'react-native'

import { styled } from 'styled-components'

import { AppColors } from '@/shared/colors'

interface ITextField {
  placeholder: string
}

export const TextField: FC<ITextField> = ({ placeholder }) => {
  return <StyledTextInput placeholder={placeholder} />
}

const StyledTextInput = styled(TextInput)`
  width: 100%;
  margin-bottom: 14px;
  padding: 10px 20px;
  border: 1px solid ${AppColors.BORDER_COLOR};
  font-size: 16px;
  border-radius: 10px;
`
