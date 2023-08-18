import { FC } from 'react'
import { Text } from 'react-native'

import { styled } from 'styled-components'

import { Flex, ScreenLayout } from '@/components/layout'

import { FormHelper, PrimaryButton, TextField } from '@/components/ui'

import { AppConstant } from '@/shared/constants'

import { AppColors } from '@/shared/colors'

export const Login: FC = () => {
  return (
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

        <StyledFormHelpers direction="column" align="center" content="center">
          <FormHelper
            label="Are you haven't an account?"
            link={{ label: 'Sign Up', screen: 'signup' }}
          />

          <FormHelper
            label="Forgot your password?"
            link={{ label: 'Restore', screen: 'restore' }}
          />
        </StyledFormHelpers>
      </StyledFlex>
    </ScreenLayout>
  )
}

const StyledFlex = styled(Flex)`
  gap: 4px;
  height: 100%;
`

const AppTitle = styled(Text)`
  margin-bottom: 14px;
  font-size: 30px;
  font-weight: 500;
`

const StyledFormHelpers = styled(Flex)`
  margin-top: 10px;
`

// const FormHelper = styled(Text)<{ color: string }>``
