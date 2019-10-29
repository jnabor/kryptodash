import React from 'react'
import { appContext } from '../App/AppProvider'

export interface PageProps {
  children: any
}

const Content: React.SFC<PageProps> = props => {
  return (
    <appContext.Consumer>
      {({ coinList }) => {
        if (!coinList) {
          return <div> Loading Coins </div>
        }
        return <div>{props.children}</div>
      }}
    </appContext.Consumer>
  )
}

export default Content
