import React from 'react'
import WelcomeMessage from './WelcomeMessage'
import ConfirmButton from './ConfirmButton'
import Page from '../Shared/Page'
import CoinGrid from '../Settings/CoinGrid'
import Search from './Search'

export interface SettingsProps {}

const Settings: React.SFC<SettingsProps> = () => {
  return (
    <Page name='settings'>
      <WelcomeMessage />
      <CoinGrid topSection />
      <ConfirmButton />
      <Search />
      <CoinGrid />
    </Page>
  )
}

export default Settings
