import React from 'react'
import styled from 'styled-components'
import { Tile } from '../Shared/Tile'
import { appContext } from '../App/AppProvider'
import CoinImage from '../Shared/CoinImage'

const SpotlightName = styled.h2`
  text-align: center;
`

export interface CoinSpotlightProps {}

const CoinSpotlight: React.SFC<CoinSpotlightProps> = () => {
  return (
    <appContext.Consumer>
      {({ currentFavorite, coinList }) => (
        <Tile>
          <SpotlightName>{coinList[currentFavorite].CoinName}</SpotlightName>
          <CoinImage spotlight coin={coinList[currentFavorite]} />
        </Tile>
      )}
    </appContext.Consumer>
  )
}

export default CoinSpotlight
