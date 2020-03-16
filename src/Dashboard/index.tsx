import React, { useContext } from 'react'
import styled from 'styled-components'
import Page from '../Shared/Page'
import PriceGrid from './PriceGrid'
import CoinSpotlight from './CoinSpotlight'
import PriceCharts from './PriceChart'
import { appContext } from '../App/AppProvider'

const ChartGrid = styled.div`
  display: grid;
  margin-top: 20px;
  grid-gap: 15px;
  grid-template-columns: 1fr 3fr;
`

interface ChartProps {}

const Chart: React.SFC<ChartProps> = () => {
  const context = useContext(appContext)

  return <>{context.prices.length > 0 ? <PriceCharts /> : null}</>
}

export interface SpotlightProps {}

const Spotlight: React.SFC<SpotlightProps> = () => {
  return (
    <appContext.Consumer>
      {({ prices }) => (prices.length > 0 ? <CoinSpotlight /> : null)}
    </appContext.Consumer>
  )
}

export interface SettingsProps {}

const Settings: React.SFC<SettingsProps> = () => {
  return (
    <Page name='dashboard'>
      <PriceGrid />
      <ChartGrid>
        <Spotlight />
        <Chart />
      </ChartGrid>
    </Page>
  )
}

export default Settings
