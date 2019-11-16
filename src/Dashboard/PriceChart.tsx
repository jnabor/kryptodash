import React from 'react'
import highchartsConfig from './HighchartsConfig'
import highchartsTheme from './HighchartsTheme'

import { Tile } from '../Shared/Tile'
import { appContext } from '../App/AppProvider'
import ReactHighcharts from 'react-highcharts'

ReactHighcharts.Highcharts.setOptions(highchartsTheme)

export interface PriceChartProps {}

const PriceChart: React.SFC<PriceChartProps> = () => {
  return (
    <appContext.Consumer>
      {({ historical }) => (
        <Tile>
          {historical ? (
            <ReactHighcharts
              config={highchartsConfig(historical)}></ReactHighcharts>
          ) : (
            <div> Loading Historical Data ...</div>
          )}
        </Tile>
      )}
    </appContext.Consumer>
  )
}

export default PriceChart
