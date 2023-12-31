import { FC, PropsWithChildren } from 'react'
import { View } from 'react-native'

import { styled } from 'styled-components'

interface IFlex {
  align: 'start' | 'center' | 'end'
  content:
    | 'start'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  gap?: number
}

export const Flex: FC<PropsWithChildren<IFlex>> = ({
  direction = 'row',
  gap = 5,
  children,
  ...props
}) => {
  return (
    <StyledBox direction={direction} gap={gap} {...props}>
      {children}
    </StyledBox>
  )
}

const StyledBox = styled(View)<IFlex>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ align }) => align};
  justify-content: ${({ content }) => content};
  gap: ${({ gap }) => `${gap}px`};
`
