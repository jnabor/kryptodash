import React from 'react'
import { appContext } from '../App/AppProvider'

export interface PageProps {
  name: string
  children: any
}

const Page: React.SFC<PageProps> = props => {
  return (
    <appContext.Consumer>
      {({ page }) => {
        if (page !== props.name) {
          return null
        }
        return <div>{props.children}</div>
      }}
    </appContext.Consumer>
  )
}

export default Page
