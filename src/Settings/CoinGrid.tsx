import React from 'react'
import styled from 'styled-components'
import CoinTile from './CoinTile'
import { appContext } from '../App/AppProvider'

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  grid-gap: 15px;
  margin-top: 40px;
`

export interface CoinGridProps {
  topSection?: boolean
}

function getCoinsToDisplay(
  coinList: any,
  topSection: boolean,
  favorites: string[]
): string[] {
  return topSection ? favorites : Object.keys(coinList).slice(0, 100)
}

const CoinGrid: React.SFC<CoinGridProps> = props => {
  return (
    <appContext.Consumer>
      {({ coinList, favorites }) => (
        <CoinGridStyled>
          {getCoinsToDisplay(coinList, !!props.topSection, favorites).map(
            coinKey => (
              <CoinTile topSection={!!props.topSection} coinKey={coinKey} />
            )
          )}
        </CoinGridStyled>
      )}
    </appContext.Consumer>
  )
}

export default CoinGrid
