import { FC } from 'react'

import { ScreenLayout } from '@/components/layout'

import { BackLink } from '@/components/ui'

export const Restore: FC = () => {
  return (
    <ScreenLayout>
      <BackLink screen="login" title="Go Back" />
    </ScreenLayout>
  )
}
