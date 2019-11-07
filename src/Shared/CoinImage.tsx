import React from 'react'

export interface CoinImageProps {
  coin: any
  style?: any
}

const CoinImage: React.SFC<CoinImageProps> = props => {
  return (
    <img
      alt={props.coin.CoinSymbol}
      style={props.style || { height: '50px' }}
      src={`http://cryptocompare.com/${props.coin.ImageUrl}`}
    />
  )
}

export default CoinImage
