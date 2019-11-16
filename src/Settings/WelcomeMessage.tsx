import React from 'react'
import { appContext } from '../App/AppProvider'

export interface WelcomeMessageProps {}

const WelcomeMessage: React.SFC<WelcomeMessageProps> = () => {
  return (
    <appContext.Consumer>
      {({ firstVisit }) =>
        firstVisit ? (
          <div>
            Welcome to Kryptodash, please select your favorite coins to begin.
          </div>
        ) : null
      }
    </appContext.Consumer>
  )
}

export default WelcomeMessage
