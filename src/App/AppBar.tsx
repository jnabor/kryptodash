import React from 'react'
import styled, { css } from 'styled-components'
import { appContext } from './AppProvider'
import { fontSizeLogo } from '../Shared/Styles'

const Bar = styled.div`
  display: grid;
  grid-template-columns: 200px auto 160px 160px;
`

const Brand = styled.div`
  ${fontSizeLogo}
`
interface ControlButtonElemProps {
  active?: boolean
  show?: boolean
}

const ControlButtonElem = styled.div<ControlButtonElemProps>`
  cursor: pointer;
  ${props =>
    props.active &&
    css`
      text-shadow: 0 0 60px #03ff03;
    `}
  ${props =>
    props.show &&
    css`
      color: grey;
      pointer-events: none;
    `}
`

const toProperCase = (lower: string): string => {
  return lower.charAt(0).toUpperCase() + lower.substr(1)
}

interface ControlButtonProps {
  name: string
  active?: boolean
}

const ControlButton: React.SFC<ControlButtonProps> = props => {
  return (
    <appContext.Consumer>
      {({ firstVisit, page, setPage }) => (
        <ControlButtonElem
          active={page === props.name}
          onClick={() => setPage(props.name)}
          show={firstVisit && props.name === 'dashboard'}>
          {toProperCase(props.name)}
        </ControlButtonElem>
      )}
    </appContext.Consumer>
  )
}

export interface AppBarProps {}

const AppBar: React.SFC<AppBarProps> = () => {
  return (
    <Bar>
      <Brand> KRYPTODASH </Brand>
      <div></div>
      <ControlButton active name='dashboard' />
      <ControlButton name='settings' />
    </Bar>
  )
}

export default AppBar
