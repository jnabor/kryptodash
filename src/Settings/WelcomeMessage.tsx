import React from 'react'
import { appContext } from '../App/AppProvider'
import Typography from '@material-ui/core/Typography'

export interface WelcomeMessageProps {}

const WelcomeMessage: React.SFC<WelcomeMessageProps> = () => {
  return (
    <appContext.Consumer>
      {({ firstVisit }) =>
        firstVisit ? (
          <Typography
            variant='h6'
            component='div'
            style={{ textAlign: 'center' }}>
            Welcome to Kryptodash, please select your favorite coins!
          </Typography>
        ) : (
          <Typography
            variant='h6'
            component='div'
            style={{ textAlign: 'center' }}>
            Favorites
          </Typography>
        )
      }
    </appContext.Consumer>
  )
}

export default WelcomeMessage
