import React from 'react'
import { appContext } from '../App/AppProvider'
import styled from 'styled-components'

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
          return <ContentStyled> Loading Coins </ContentStyled>
        }
        if (!firstVisit && !prices) {
          return <ContentStyled> Loading Prices </ContentStyled>
        }
        return <ContentStyled>{props.children}</ContentStyled>
      }}
    </appContext.Consumer>
  )
}

export default Content
