import React from 'react'
import WelcomeMessage from './WelcomeMessage'
import ConfirmButton from './ConfirmButton'

export interface SettingsProps {}

const Settings: React.SFC<SettingsProps> = () => {
  return (
    <div>
      <WelcomeMessage />
      <ConfirmButton />
    </div>
  )
}

export default Settings
