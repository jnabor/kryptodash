import React from 'react'
import _ from 'lodash'

const cc = require('cryptocompare')

export interface AppProviderProps {}

export interface AppProviderState {
  page: string
  favorites: string[]
  coinList?: any
  firstVisit?: boolean
  confirmFavorites?(): void
  setPage(page: string): void
  addCoin(key: string): void
  removeCoin(key: string): void
  isInFavorites(key: string): boolean
}

export const appContext = React.createContext<AppProviderState>({
  page: '',
  favorites: [],
  confirmFavorites: () => {},
  firstVisit: false,
  setPage: () => {},
  addCoin: () => {},
  removeCoin: () => {},
  isInFavorites: () => false
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
      favorites: ['BTC'],
      ...this.savedSettings(),
      confirmFavorites: this.confirmFavorites,
      setPage: this.setPage,
      addCoin: this.addCoin,
      removeCoin: this.removeCoin,
      isInFavorites: this.isInFavorites
    }
  }

  componentDidMount = () => {
    this.fetchCoins()
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

  isInFavorites = (key: string): boolean =>
    _.includes(this.state.favorites, key)

  fetchCoins = async () => {
    let coinList = (await cc.coinList()).Data
    console.log('fetch', coinList)
    this.setState({ coinList })
  }

  confirmFavorites = () => {
    this.setState({ firstVisit: false, page: 'dashboard' })
    localStorage.setItem(
      'kryptoDash',
      JSON.stringify({ favorites: this.state.favorites })
    )
  }

  savedSettings = () => {
    const kryptoDashData = JSON.parse(
      String(localStorage.getItem('kryptoDash'))
    )

    if (!kryptoDashData) {
      return { page: 'settings', firstVisit: true }
    } else {
      let favorites = kryptoDashData.favorites
      return { favorites }
    }
  }

  setPage = (page: string) => {
    this.setState({ page })
  }

  render() {
    return (
      <appContext.Provider value={this.state}>
        {this.props.children}
      </appContext.Provider>
    )
  }
}
