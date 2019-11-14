import React from 'react'
import styled from 'styled-components'
import CoinTile from './CoinTile'
import { appContext } from '../App/AppProvider'

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 15px;
  margin-top: 60px;
`

export interface CoinGridProps {
  topSection?: boolean
}

function getLowerSectionCoins(coinList: any, filteredCoins: string[]) {
  if (Object.keys(filteredCoins).length > 0) return Object.keys(filteredCoins)
  return Object.keys(coinList).slice(0, 100)
}

function getCoinsToDisplay(
  coinList: any,
  topSection: boolean,
  favorites: string[],
  filteredCoins: string[]
): string[] {
  return topSection ? favorites : getLowerSectionCoins(coinList, filteredCoins)
}

const CoinGrid: React.SFC<CoinGridProps> = props => {
  return (
    <appContext.Consumer>
      {({ coinList, favorites, filteredCoins }) => (
        <CoinGridStyled>
          {getCoinsToDisplay(
            coinList,
            !!props.topSection,
            favorites,
            filteredCoins
          ).map(coinKey => (
            <CoinTile
              key={coinKey}
              topSection={!!props.topSection}
              coinKey={coinKey}
            />
          ))}
        </CoinGridStyled>
      )}
    </appContext.Consumer>
  )
}

export default CoinGrid
