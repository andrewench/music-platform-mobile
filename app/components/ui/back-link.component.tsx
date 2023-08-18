import { Link } from '@react-navigation/native'
import { FC } from 'react'
import { Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import { styled } from 'styled-components'

import { Flex } from '@/components/layout'

import { AppColors } from '@/shared/colors'

import { TScreenList } from '@/shared/types'

interface IBackLink {
  title: string
  screen: TScreenList
}

export const BackLink: FC<IBackLink> = ({ screen, title }) => {
  return (
    <Link to={{ screen }}>
      <Flex align="center" content="start">
        <Icon name="arrow-back-outline" size={24} color={AppColors.GREY_1} />
        <StyledText color={AppColors.GREY_1}>{title}</StyledText>
      </Flex>
    </Link>
  )
}

const StyledText = styled(Text)<{ color: string }>`
  font-family: 'Inter_400Regular';
  font-size: 16px;
  color: ${({ color }) => color};
`
