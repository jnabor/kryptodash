import React from 'react'
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'

import {
  subtleBoxShadow,
  lightBlueBackground,
  greenBoxShadow,
  redBoxShadow
} from './Styles'

interface TileProps {}
export const Tile = styled(Paper)<TileProps>`
  && {
    border-radius: 5px;
    padding: 10px;
  }
`

interface SelectableTileProps {}
export const SelectableTile = styled(Tile)<SelectableTileProps>`
  &:hover {
    cursor: pointer;
    ${greenBoxShadow}
  }
`

interface DeletableTileProps {}
export const DeletableTile = styled(SelectableTile)<DeletableTileProps>`
  &:hover {
    cursor: pointer;
    ${redBoxShadow}
  }
`

interface DisabledTileProps {}
export const DisabledTile = styled(Tile)<DisabledTileProps>`
  pointer-events: none;
  opacity: 0.4;
`
