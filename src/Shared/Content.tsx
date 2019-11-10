import React from 'react'
import { appContext } from '../App/AppProvider'

export interface PageProps {
  children: any
}

const Content: React.SFC<PageProps> = props => {
  return (
    <appContext.Consumer>
      {({ coinList, prices, firstVisit }) => {
        if (!coinList) {
          return <div> Loading Coins </div>
        }
        if (!firstVisit && !prices) {
          return <div> Loading Prices </div>
        }
        return <div>{props.children}</div>
      }}
    </appContext.Consumer>
  )
}

export default Content
