import React from 'react'
import styled, { css } from 'styled-components'

interface CoinImageStyledProps {
  spotlight?: boolean
}

const CoinImageStyled = styled.img<CoinImageStyledProps>`
  height: 50px;
  ${(props) =>
    props.spotlight &&
    css`
      height: 200px;
      margin: auto;
      display: block;
    `}
`

export interface CoinImageProps {
  coin: any
  spotlight?: any
}

const CoinImage: React.SFC<CoinImageProps> = ({ coin, spotlight }) => {
  return (
    <CoinImageStyled
      spotlight={spotlight}
      alt={coin.CoinSymbol}
      src={`https://cryptocompare.com/${coin.ImageUrl}`}
    />
  )
}

export default CoinImage
