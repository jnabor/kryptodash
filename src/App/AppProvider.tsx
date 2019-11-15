import React from 'react'
import _ from 'lodash'

const cc = require('cryptocompare')

export interface AppProviderProps {}

export interface AppProviderState {
  page: string
  favorites: string[]
  currentFavorite: string
  prices: any[]
  filteredCoins: string[]
  coinList?: any
  firstVisit?: boolean
  confirmFavorites?(): void
  setPage(page: string): void
  addCoin(key: string): void
  removeCoin(key: string): void
  isInFavorites(key: string): boolean
  setFilteredCoins(filteredCoins: string[]): void
  setCurrentFavorite(sym: string): void
}

export const appContext = React.createContext<AppProviderState>({
  page: '',
  favorites: [],
  prices: [],
  filteredCoins: [],
  currentFavorite: '',
  confirmFavorites: () => {},
  firstVisit: false,
  setPage: () => {},
  addCoin: () => {},
  removeCoin: () => {},
  isInFavorites: () => false,
  setFilteredCoins: () => {},
  setCurrentFavorite: () => {}
})

const MAX_FAVORITES = 10

export class AppProvider extends React.Component<
  AppProviderProps,
  AppProviderState
> {
  constructor(props: AppProviderProps) {
    super(props)
    this.state = {
      page: 'dashboard',
      favorites: [
        'BTC',
        'LTC',
        'ETH',
        'ZEC',
        'DASH',
        'XRP',
        'XMR',
        'BCH',
        'NEO',
        'EOS'
      ],
      currentFavorite: 'BTC',
      prices: [],
      filteredCoins: [],
      ...this.savedSettings(),
      confirmFavorites: this.confirmFavorites,
      setPage: this.setPage,
      addCoin: this.addCoin,
      removeCoin: this.removeCoin,
      isInFavorites: this.isInFavorites,
      setFilteredCoins: this.setFilteredCoins,
      setCurrentFavorite: this.setCurrentFavorite
    }
  }

  componentDidMount = () => {
    this.fetchCoins()
    this.fetchPrices()
  }

  addCoin = (key: string) => {
    let favorites = [...this.state.favorites]
    if (favorites.length < MAX_FAVORITES) {
      favorites.push(key)
      this.setState({ favorites })
    }
  }

  removeCoin = (key: string) => {
    let favorites = [...this.state.favorites]
    this.setState({ favorites: _.pull(favorites, key) })
  }

  fetchCoins = async () => {
    let coinList = (await cc.coinList()).Data
    console.log('fetch', coinList)
    this.setState({ coinList })
  }

  fetchPrices = async () => {
    if (this.state.firstVisit) return

    let prices = await this.prices()
    // filter empty price objects
    prices = prices.filter(price => Object.keys(price).length)
    console.log('prices', prices)
    this.setState({ prices })
  }

  prices = async () => {
    let returnData = []
    for (let i = 0; i < this.state.favorites.length; i++) {
      try {
        let priceData = await cc.priceFull(this.state.favorites[i], 'USD')
        returnData.push(priceData)
      } catch (e) {
        console.warn('Fetch price error: ', e)
      }
    }
    return returnData
  }

  isInFavorites = (key: string): boolean =>
    _.includes(this.state.favorites, key)

  confirmFavorites = () => {
    let currentFavorite = this.state.favorites[0] || ''
    this.setState(
      { firstVisit: false, page: 'dashboard', currentFavorite },
      () => {
        this.fetchPrices()
      }
    )
    localStorage.setItem(
      'kryptoDash',
      JSON.stringify({ favorites: this.state.favorites, currentFavorite })
    )
  }

  setCurrentFavorite = (sym: string) => {
    this.setState({ currentFavorite: sym })
    localStorage.setItem(
      'kryptoDash',
      JSON.stringify({
        ...JSON.parse(String(localStorage.getItem('kryptoDash'))),
        currentFavorite: sym
      })
    )
  }

  savedSettings = () => {
    const kryptoDashData = JSON.parse(
      String(localStorage.getItem('kryptoDash'))
    )

    if (!kryptoDashData) {
      return { page: 'settings', firstVisit: true }
    }
    let { favorites, currentFavorite } = kryptoDashData
    return { favorites, currentFavorite }
  }

  setPage = (page: string) => {
    this.setState({ page })
  }

  setFilteredCoins = (filteredCoins: string[]) =>
    this.setState({ filteredCoins: filteredCoins })

  render() {
    return (
      <appContext.Provider value={this.state}>
        {this.props.children}
      </appContext.Provider>
    )
  }
}
