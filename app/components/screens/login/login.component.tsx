import { styled } from 'styled-components'

import { FC } from 'react'
import { Text, View } from 'react-native'

import { AppConstant } from '@/shared/constants'

import { AppColors } from '@/shared/colors'

export const Login: FC = () => {
  return (
    <Layout>
      <AppTitle
        style={{ color: AppColors.GREY_1, fontFamily: 'Inter_300Light' }}>
        {AppConstant.APP_NAME}
      </AppTitle>
    </Layout>
  )
}

const AppTitle = styled(Text)`
  font-size: 30px;
  font-weight: 500;
`

const Layout = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`
