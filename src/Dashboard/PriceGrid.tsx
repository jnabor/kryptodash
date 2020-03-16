import React, { useContext } from 'react'
import { appContext } from '../App/AppProvider'
import styled from 'styled-components'
import PriceTile from './PriceTile'

const PriceGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  margin-top: 40px;
`
export interface PriceGridProps {}

const PriceGrid: React.SFC<PriceGridProps> = () => {
  const context = useContext(appContext)

  return (
    <PriceGridStyled>
      {context.prices.map((price, index) => (
        <PriceTile key={index} price={price} index={index} />
      ))}
    </PriceGridStyled>
  )
}

export default PriceGrid
