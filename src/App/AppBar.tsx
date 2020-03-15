import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import { appContext, AppProviderProps } from './AppProvider'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import SettingsIcon from '@material-ui/icons/Settings'
import DashboardIcon from '@material-ui/icons/Dashboard'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'

const Bar = styled.div`
  display: grid;
  grid-template-columns: 180px auto 350px;
  justify-items: right;
`

interface ControlButtonElemProps {
  active?: boolean
  show?: boolean
}

const ControlButtonElem = styled(({ ...props }) => <Button {...props} />)<
  ControlButtonElemProps
>`
  && {
    cursor: pointer;
    margin-left: 20px;
    ${props => props.active && css``}
    ${props => props.show && css``};
  }
`

const toProperCase = (lower: string): string => {
  return lower.charAt(0).toUpperCase() + lower.substr(1)
}

interface ControlButtonProps {
  name: string
  active?: boolean
}

const ControlButton: React.SFC<ControlButtonProps> = props => {
  const context = useContext(appContext)

  const variant = context.page === props.name ? 'contained' : 'outlined'

  return (
    <>
      <ControlButtonElem
        onClick={() => context.setPage(props.name)}
        variant={variant}
        color='primary'
        size='large'>
        {props.name === 'settings' ? <SettingsIcon /> : <DashboardIcon />}
        <Hidden xsDown>
          <div style={{ marginLeft: '5px' }}>
            <Typography>{toProperCase(props.name)}</Typography>
          </div>
        </Hidden>
      </ControlButtonElem>
    </>
  )
}

export interface AppBarProps {}

const AppBar: React.SFC<AppBarProps> = () => {
  return (
    <Bar>
      <div>
        <Typography variant='h4'> KRYPTODASH</Typography>
      </div>
      <div></div>
      <div>
        <ControlButton name='dashboard' />
        <ControlButton name='settings' />
      </div>
    </Bar>
  )
}

export default AppBar
