import React from 'react'
import styled from 'styled-components'

export const CoinHeaderGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const CoinSymbol = styled.div`
  justify-self: right;
`

export interface CoinHeaderGridProps {
  name: string
  symbol: string
}

const CoinHeaderGrid: React.SFC<CoinHeaderGridProps> = props => {
  return (
    <CoinHeaderGridStyled>
      <div>{props.name}</div>
      <CoinSymbol>{props.symbol}</CoinSymbol>
    </CoinHeaderGridStyled>
  )
}

export default CoinHeaderGrid
