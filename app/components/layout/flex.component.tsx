import { styled } from 'styled-components'

import { FC, PropsWithChildren } from 'react'
import { View } from 'react-native'

interface IFlex {
  align: 'start' | 'center' | 'end'
  content:
    | 'start'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
}

export const Flex: FC<PropsWithChildren<IFlex>> = ({
  direction = 'row',
  children,
  ...props
}) => {
  return (
    <StyledBox direction={direction} {...props}>
      {children}
    </StyledBox>
  )
}

const StyledBox = styled(View)<IFlex>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ align }) => align};
  justify-content: ${({ content }) => content};
  height: 100%;
`
