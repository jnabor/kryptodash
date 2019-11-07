import React from 'react'
import { appContext } from '../App/AppProvider'
import { SelectableTile } from '../Shared/Tile'
import CoinHeaderGrid from './CoinHeaderGrid'
import CoinImage from '../Shared/CoinImage'

export interface CoinTileProps {
  coinKey: string
}

const CoinTile: React.SFC<CoinTileProps> = props => {
  return (
    <appContext.Consumer>
      {({ coinList }) => {
        let coin = coinList[props.coinKey]

        const TileClass = SelectableTile
        return (
          <TileClass>
            <CoinHeaderGrid name={coin.CoinName} symbol={coin.Symbol} />
            <CoinImage coin={coin} />
          </TileClass>
        )
      }}
    </appContext.Consumer>
  )
}

export default CoinTile
