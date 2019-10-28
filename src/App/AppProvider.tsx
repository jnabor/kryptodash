import React from 'react'

export interface AppProviderProps {}

export interface AppProviderState {
  page: string
  setPage(page: string): void
}

export const appContext = React.createContext<AppProviderState>({
  page: 'settings',
  setPage: (page: string) => {}
})

export class AppProvider extends React.Component<
  AppProviderProps,
  AppProviderState
> {
  constructor(props: AppProviderProps) {
    super(props)
    this.state = { page: 'settings', setPage: this.setPage }
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
