import React from 'react'
import styled, { css } from 'styled-components'

const Bar = styled.div`
  display: grid;
  grid-template-columns: 180px auto 100px 100px;
`
const Logo = styled.div`
  font-size: 1.5em;
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
  const name = toProperCase(props.name)
  return <ControlButtonElem active={props.active}>{name}</ControlButtonElem>
}

export interface AppBarProps {}

const AppBar: React.SFC<AppBarProps> = () => {
  return (
    <Bar>
      <div> Kryptodash </div>
      <div></div>
      <ControlButton active name='dashboard' />
      <ControlButton name='settings' />
    </Bar>
  )
}

export default AppBar
