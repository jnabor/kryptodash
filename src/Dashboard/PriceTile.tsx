import React, { useEffect, useContext } from 'react'
import styled, { css } from 'styled-components'
import { SelectableTile } from '../Shared/Tile'
import { fontSize3, fontSizeBig, greenBoxShadow } from '../Shared/Styles'
import { CoinHeaderGridStyled } from '../Settings/CoinHeaderGrid'
import { appContext } from '../App/AppProvider'

const JustifyRight = styled.div`
  justify-self: right;
`

const JustifyLeft = styled.div`
  justify-self: left;
`

const TickerPrice = styled.div`
  ${fontSizeBig}
`

export interface ChangePctProps {
  red: boolean
}

const ChangePct = styled.div<ChangePctProps>`
  color: green;
  ${props =>
    props.red &&
    css`
      color: red;
    `}
`

const numberFormat = (number: string) => {
  return +(number + '').slice(0, 7)
}

export interface PriceTileStyledProps {
  compact?: boolean
  currentFavorite?: boolean
}

const PriceTileStyled = styled(SelectableTile)<PriceTileStyledProps>`
  && {
    ${props =>
      props.compact &&
      css`
        display: grid;
        ${fontSize3}
        grid-gap: 5px;
        grid-template-columns: repeat(3, 1fr);
        justify-items: right;
      `}

    ${props =>
      props.currentFavorite &&
      css`
        ${greenBoxShadow}
        pointer-events: none;
      `}
  }
`

export interface ChangePercentProps {
  data: any
}

const ChangePercent: React.SFC<ChangePercentProps> = ({ data }) => {
  return (
    <JustifyRight>
      <ChangePct red={data.CHANGEPCT24HOUR < 0}>
        {numberFormat(data.CHANGEPCT24HOUR)}%
      </ChangePct>
    </JustifyRight>
  )
}

interface PriceTileGridProps {
  sym: any
  data: any
  currentFavorite: boolean
  setCurrentFavorite: (event: any) => void
}

const PriceTileGrid: React.SFC<PriceTileGridProps> = ({
  sym,
  data,
  currentFavorite,
  setCurrentFavorite
}) => {
  return (
    <PriceTileStyled
      currentFavorite={currentFavorite}
      onClick={setCurrentFavorite}>
      <CoinHeaderGridStyled>
        <JustifyLeft>{sym}</JustifyLeft>
        <ChangePercent data={data} />
        <TickerPrice>${numberFormat(data.PRICE)}</TickerPrice>
      </CoinHeaderGridStyled>
    </PriceTileStyled>
  )
}

export interface PriceTileCompactProps {
  sym: any
  data: any
  currentFavorite: boolean
  setCurrentFavorite: (event: any) => void
}

const PriceTileCompact: React.SFC<PriceTileCompactProps> = ({
  sym,
  data,
  currentFavorite,
  setCurrentFavorite
}) => {
  return (
    <PriceTileStyled
      compact
      currentFavorite={currentFavorite}
      onClick={setCurrentFavorite}>
      <JustifyLeft>{sym}</JustifyLeft>
      <ChangePercent data={data} />
      <div>${numberFormat(data.PRICE)}</div>
    </PriceTileStyled>
  )
}

export interface PriceTileProps {
  price: any
  index: number
}

const PriceTile: React.SFC<PriceTileProps> = ({ price, index }) => {
  const context = useContext(appContext)

  const sym = Object.keys(price)[0]
  const data = price[sym]['USD']
  const TileClass = index < 5 ? PriceTileGrid : PriceTileCompact
  const favorite: boolean = context.currentFavorite === sym

  return (
    <TileClass
      sym={sym}
      data={data}
      currentFavorite={favorite}
      setCurrentFavorite={e => context.setCurrentFavorite(sym)}
    />
  )
}

export default PriceTile
