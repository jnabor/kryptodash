import React from 'react'

export interface AppProviderProps {}

export interface AppProviderState {
  page: string
  firstVisit?: boolean
  confirmFavorites?(): void
  setPage(page: string): void
}

export const appContext = React.createContext<AppProviderState>({
  page: '',
  confirmFavorites: () => {},
  firstVisit: true,
  setPage: () => {}
})

export class AppProvider extends React.Component<
  AppProviderProps,
  AppProviderState
> {
  constructor(props: AppProviderProps) {
    super(props)
    this.state = {
      page: 'dashboard',
      ...this.savedSettings(),
      setPage: this.setPage,
      confirmFavorites: this.confirmFavorites
    }
  }

  confirmFavorites = () => {
    this.setState({ firstVisit: false, page: 'dashboard' })
    localStorage.setItem('kryptoDash', JSON.stringify({ test: 'Hello' }))
  }

  savedSettings = () => {
    const data = JSON.parse(String(localStorage.getItem('kryptoDash')))
    if (!data) {
      return { page: 'settings', firstVisit: true }
    }
    return {}
  }

  setPage = (page: string) => {
    console.log('main')
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
