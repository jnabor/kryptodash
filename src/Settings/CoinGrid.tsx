import React from 'react'
import styled from 'styled-components'
import { appContext } from '../App/AppProvider'

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`

export interface CoinGridProps {}

const CoinGrid: React.SFC<CoinGridProps> = () => {
  return (
    <appContext.Consumer>
      {({ coinList }) => (
        <CoinGridStyled>
          {Object.keys(coinList).map(coinKey => (
            <div>{coinKey}</div>
          ))}
        </CoinGridStyled>
      )}
    </appContext.Consumer>
  )
}

export default CoinGrid
