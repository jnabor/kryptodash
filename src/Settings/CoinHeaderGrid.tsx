import React from 'react'
import styled from 'styled-components'
import { DeletableTile } from '../Shared/Tile'
import CloseIcon from '@material-ui/icons/Close'

export const CoinHeaderGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 10px;
`

export const CoinName = styled.div`
  margin-right: 10px;
`

export const CoinSymbol = styled.div`
  justify-self: right;
`
export const DeleteIcon = styled.div`
  justify-self: right;
  display: none;
  ${DeletableTile}: hover & {
    display: block;
    color: red;
  }
`

export interface CoinHeaderGridProps {
  name: string
  symbol: string
  topSection: boolean
}

const CoinHeaderGrid: React.SFC<CoinHeaderGridProps> = props => {
  return (
    <CoinHeaderGridStyled>
      <CoinName>{props.name}</CoinName>
      {props.topSection ? (
        <DeleteIcon>
          <CloseIcon />
        </DeleteIcon>
      ) : (
        <CoinSymbol>{props.symbol}</CoinSymbol>
      )}
    </CoinHeaderGridStyled>
  )
}

export default CoinHeaderGrid
