import React from 'react'
import Page from '../Shared/Page'
import PriceGrid from './PriceGrid'

export interface SettingsProps {}

const Settings: React.SFC<SettingsProps> = () => {
  return (
    <Page name='dashboard'>
      <PriceGrid />
    </Page>
  )
}

export default Settings
