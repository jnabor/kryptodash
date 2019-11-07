import React from 'react'
import styled from 'styled-components'
import CoinTile from './CoinTile'
import { appContext } from '../App/AppProvider'
import { SelectableTile } from '../Shared/Tile'

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  margin-top: 40px;
`

export interface CoinGridProps {}

function getCoinsToDisplay(coinList: any): string[] {
  return Object.keys(coinList).slice(0, 100)
}

const CoinGrid: React.SFC<CoinGridProps> = () => {
  return (
    <appContext.Consumer>
      {({ coinList }) => (
        <CoinGridStyled>
          {getCoinsToDisplay(coinList).map(coinKey => (
            <CoinTile coinKey={coinKey} />
          ))}
        </CoinGridStyled>
      )}
    </appContext.Consumer>
  )
}

export default CoinGrid
