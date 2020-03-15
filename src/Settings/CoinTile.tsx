import React from 'react'
import { appContext } from '../App/AppProvider'
import { SelectableTile, DisabledTile, DeletableTile } from '../Shared/Tile'
import CoinHeaderGrid from './CoinHeaderGrid'
import CoinImage from '../Shared/CoinImage'

import Paper from '@material-ui/core/Paper'

export interface CoinTileProps {
  coinKey: string
  topSection: boolean
}

function clickCoinHandler(
  topSection: boolean,
  coinKey: string,
  addCoin: (key: string) => void,
  removeCoin: (key: string) => void
) {
  return topSection
    ? () => {
        removeCoin(coinKey)
      }
    : () => {
        addCoin(coinKey)
      }
}
const CoinTile: React.SFC<CoinTileProps> = props => {
  return (
    <appContext.Consumer>
      {({ coinList, addCoin, removeCoin, isInFavorites }) => {
        let coin = coinList[props.coinKey]

        let TileClass = SelectableTile
        if (props.topSection) {
          TileClass = DeletableTile
        } else if (isInFavorites(props.coinKey)) {
          TileClass = DisabledTile
        }
        return (
          <TileClass
            onClick={clickCoinHandler(
              props.topSection,
              props.coinKey,
              addCoin,
              removeCoin
            )}>
            <CoinHeaderGrid
              topSection={props.topSection}
              name={coin.CoinName}
              symbol={coin.Symbol}
            />
            <CoinImage coin={coin} />
          </TileClass>
        )
      }}
    </appContext.Consumer>
  )
}

export default CoinTile
