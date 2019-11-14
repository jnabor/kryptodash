import React from 'react'
import styled from 'styled-components'
import Page from '../Shared/Page'
import PriceGrid from './PriceGrid'
import CoinSpotlight from './CoinSpotlight'
import PriceCharts from './PriceChart'
const ChartGrid = styled.div`
  display: grid;
  margin-top: 20px;
  grid-gap: 15px;
  grid-template-columns: 1fr 3fr;
`

export interface SettingsProps {}

const Settings: React.SFC<SettingsProps> = () => {
  return (
    <Page name='dashboard'>
      <PriceGrid />
      <ChartGrid>
        <CoinSpotlight />
        <PriceCharts />
      </ChartGrid>
    </Page>
  )
}

export default Settings
