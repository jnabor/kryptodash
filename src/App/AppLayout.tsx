import React from 'react'

import { ThemeProvider } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core'

import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import {
  useTheme,
  createStyles,
  makeStyles,
  Theme
} from '@material-ui/core/styles'

const defaultTheme = {
  typography: {
    fontFamily: ['Share Tech Mono', 'monospace'].join(',')
  }
}
const theme = createMuiTheme(defaultTheme)

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    },
    main: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(2)
    },
    typography: {
      fontFamily: 'Share Tech Mono',
      htmlFontSize: 12
    }
  })
)

export interface LayoutProps {
  children: any
}

const Layout: React.SFC<LayoutProps> = ({ children }) => {
  const classes = useStyles(useTheme())

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <Container className={classes.main}>{children}</Container>
      </div>
    </ThemeProvider>
  )
}

export default Layout
