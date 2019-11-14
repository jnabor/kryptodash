import React from 'react'
import highchartsConfig from './HighchartsConfig'
import { Tile } from '../Shared/Tile'
import { appContext } from '../App/AppProvider'
import ReactHighcharts from 'react-highcharts'

export interface PriceChartProps {}

const PriceChart: React.SFC<PriceChartProps> = () => {
  return (
    <appContext.Consumer>
      {({}) => (
        <Tile>
          <ReactHighcharts config={highchartsConfig()}></ReactHighcharts>
        </Tile>
      )}
    </appContext.Consumer>
  )
}

export default PriceChart
