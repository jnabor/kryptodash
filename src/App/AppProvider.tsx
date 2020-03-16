import React from 'react'
import _ from 'lodash'
import moment from 'moment'

const cc = require('cryptocompare')
cc.setApiKey(process.env.REACT_APP_CRYPTOCOMPARE_API_KEY)

export interface AppProviderProps {}

export interface AppProviderState {
  page: string
  favorites: string[]
  currentFavorite: string
  historical: any[]
  prices: any[]
  timeInterval: string
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
  changeChartSelect(value: string): void
}

export const appContext = React.createContext<AppProviderState>({
  page: '',
  favorites: [],
  prices: [],
  timeInterval: 'weeks',
  filteredCoins: [],
  currentFavorite: 'BTC',
  historical: [],
  confirmFavorites: () => {},
  firstVisit: false,
  setPage: () => {},
  addCoin: () => {},
  removeCoin: () => {},
  isInFavorites: () => false,
  setFilteredCoins: () => {},
  setCurrentFavorite: () => {},
  changeChartSelect: () => {}
})

const MAX_FAVORITES = 12
const TIME_UNITS = 10

export class AppProvider extends React.Component<
  AppProviderProps,
  AppProviderState
> {
  constructor(props: AppProviderProps) {
    super(props)
    this.state = {
      page: 'settings',
      favorites: [
        'BTC',
        'ETH',
        'XRP',
        'USDT',
        'BCH',
        'LTC',
        'BSV',
        'EOS',
        'BNB',
        'XTZ',
        'LEO',
        'XLM'
      ],
      currentFavorite: 'BTC',
      historical: [],
      prices: [],
      timeInterval: 'weeks',
      filteredCoins: [],
      ...this.savedSettings(),
      confirmFavorites: this.confirmFavorites,
      setPage: this.setPage,
      addCoin: this.addCoin,
      removeCoin: this.removeCoin,
      isInFavorites: this.isInFavorites,
      setFilteredCoins: this.setFilteredCoins,
      setCurrentFavorite: this.setCurrentFavorite,
      changeChartSelect: this.changeChartSelect
    }
  }

  componentDidMount = () => {
    this.fetchCoins()
    this.fetchPrices()
    this.fetchHistorical()
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

  fetchHistorical = async () => {
    if (this.state.firstVisit) {
      console.log('first visit', this.state.firstVisit)
      return
    }
    let results = await this.historical()
    let historical = [
      {
        name: this.state.currentFavorite,
        data: results.map((ticker, index) => [
          moment()
            .subtract({ [this.state.timeInterval]: TIME_UNITS - index })
            .valueOf(),
          ticker.USD
        ])
      }
    ]
    this.setState({ historical })
  }

  historical = async () => {
    let promises = []
    for (let units = TIME_UNITS; units > 0; units--) {
      promises.push(
        cc.priceHistorical(
          this.state.currentFavorite,
          ['USD'],
          moment()
            .subtract({ [this.state.timeInterval]: units })
            .toDate()
        )
      )
    }
    return Promise.all(promises)
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
      {
        firstVisit: false,
        page: 'dashboard',
        currentFavorite,
        prices: [],
        historical: []
      },
      () => {
        this.fetchPrices()
        this.fetchHistorical()
      }
    )
    localStorage.setItem(
      'kryptoDash',
      JSON.stringify({ favorites: this.state.favorites, currentFavorite })
    )
  }

  setCurrentFavorite = (sym: string) => {
    this.setState(
      { currentFavorite: sym, historical: [] },
      this.fetchHistorical
    )
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

  changeChartSelect = (value: string) => {
    this.setState({ timeInterval: value, historical: [] }, this.fetchHistorical)
  }

  render() {
    return (
      <appContext.Provider value={this.state}>
        {this.props.children}
      </appContext.Provider>
    )
  }
}
