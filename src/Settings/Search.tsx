import React from 'react'
import styled from 'styled-components'
import { appContext } from '../App/AppProvider'
import { backgroundColor2, fontSize2 } from '../Shared/Styles'
import _ from 'lodash'
import fuzzy from 'fuzzy'

export interface SearchProps {}

const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`
const SearchInput = styled.input`
  ${backgroundColor2}
  ${fontSize2}
  border:1px solid;
  height: 25px;
  color: #1163c9;
  place-self: center left;
`
const handleFilter = _.debounce((inputValue, coinList, setFilteredCoins) => {
  // Get all coins symbols
  let coinSymbols = Object.keys(coinList)
  // Get all coin names, map symbol to name
  let coinNames = coinSymbols.map(sym => coinList[sym].CoinName)
  let allStringsToSearch = coinSymbols.concat(coinNames)
  let fuzzyResults = fuzzy
    .filter(inputValue, allStringsToSearch, {})
    .map(result => result.string)

  let filteredCoins = _.pickBy(coinList, (result, symKey) => {
    let coinName = result.coinName
    return (
      _.includes(fuzzyResults, symKey) || _.includes(fuzzyResults, coinName)
    )
  })

  setFilteredCoins(filteredCoins)
}, 500)

function filterCoins(
  e: any,
  setFilteredCoins: (filteredCoins: string[]) => void,
  coinList: any
) {
  let inputValue = e.target.value
  if (!inputValue) {
    setFilteredCoins([])
    return
  }
  handleFilter(inputValue, coinList, setFilteredCoins)
}

const Search: React.SFC<SearchProps> = () => {
  return (
    <appContext.Consumer>
      {({ setFilteredCoins, coinList }) => (
        <SearchGrid>
          <h2> Search All Coins </h2>
          <SearchInput
            onKeyUp={e => filterCoins(e, setFilteredCoins, coinList)}
          />
        </SearchGrid>
      )}
    </appContext.Consumer>
  )
}

export default Search
