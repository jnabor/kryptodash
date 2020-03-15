import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '4px 6px',
      display: 'flex',
      alignItems: 'center',
      width: 400
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1
    },
    iconButton: {
      padding: 10
    },
    divider: {
      height: 28,
      margin: 4
    }
  })
)

export interface SearchBarProps {
  search: (e: any) => void
}

const SearchBar: React.SFC<SearchBarProps> = ({ search }) => {
  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      <IconButton
        type='submit'
        className={classes.iconButton}
        aria-label='search'>
        <SearchIcon />
      </IconButton>
      <InputBase
        onChange={e => search(e)}
        className={classes.input}
        placeholder='Search Coins'
        inputProps={{ 'aria-label': 'Search Coins' }}
      />
    </Paper>
  )
}

export default SearchBar
