import { FC } from 'react'
import { Text, View } from 'react-native'

import { styled } from 'styled-components'

import { Flex, ScreenLayout } from '@/components/layout'

import { PrimaryButton, TextField } from '@/components/ui'

import { AppConstant } from '@/shared/constants'

import { AppColors } from '@/shared/colors'

export const Login: FC = () => {
  return (
    <Layout>
      <ScreenLayout>
        <StyledFlex direction="column" align="center" content="center">
          <AppTitle
            style={{
              color: AppColors.GREY_1,
              fontFamily: 'Inter_400Regular',
            }}>
            {AppConstant.APP_NAME}
          </AppTitle>

          <TextField placeholder="Login" />
          <TextField placeholder="Password" />

          <PrimaryButton>Sign In</PrimaryButton>
        </StyledFlex>
      </ScreenLayout>
    </Layout>
  )
}

const StyledFlex = styled(Flex)`
  gap: 4px;
`

const AppTitle = styled(Text)`
  margin-bottom: 14px;
  font-size: 30px;
  font-weight: 500;
`

const Layout = styled(View)`
  height: 100%;
`
