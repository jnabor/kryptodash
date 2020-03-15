import React from 'react'
import { appContext } from '../App/AppProvider'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

export const ContentStyled = styled.div`
  margin-top: 40px;
`

export interface PageProps {
  children: any
}

const Content: React.SFC<PageProps> = props => {
  return (
    <appContext.Consumer>
      {({ coinList, prices, firstVisit }) => {
        if (!coinList) {
          return (
            <ContentStyled>
              <Typography variant='h6'> Loading Coins </Typography>
            </ContentStyled>
          )
        }
        if (!prices) {
          return (
            <ContentStyled>
              <Typography variant='h6'> Loading Prices </Typography>{' '}
            </ContentStyled>
          )
        }
        return <ContentStyled>{props.children}</ContentStyled>
      }}
    </appContext.Consumer>
  )
}

export default Content
