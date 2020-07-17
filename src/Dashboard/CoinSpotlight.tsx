import React from 'react'
import styled from 'styled-components'
import { appContext } from '../App/AppProvider'
import { fontSizeBig } from '../Shared/Styles'
import CoinImage from '../Shared/CoinImage'

const SpotlightName = styled.div`
  text-align: center;
  ${fontSizeBig};
  margin-bottom: 20px;
  margin-top: 20px;
`
export const Tile = styled.div`
  && {
    padding: 10px;
  }
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
