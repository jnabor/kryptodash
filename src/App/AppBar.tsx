import React from 'react'
import styled, { css } from 'styled-components'
import { appContext } from './AppProvider'

const Bar = styled.div`
  display: grid;
  grid-template-columns: 180px auto 100px 100px;
`
interface ControlButtonElemProps {
  active?: boolean
}

const ControlButtonElem = styled.div<ControlButtonElemProps>`
  cursor: pointer;
  ${props =>
    props.active &&
    css`
      text-shadow: 0 0 60px #03ff03;
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
      {({ page, setPage }) => (
        <ControlButtonElem
          active={page === props.name}
          onClick={() => setPage(props.name)}>
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
      <div> KRYPTODASH </div>
      <div></div>
      <ControlButton active name='dashboard' />
      <ControlButton name='settings' />
    </Bar>
  )
}

export default AppBar
