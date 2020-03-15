import React from 'react'
import highchartsConfig from './HighchartsConfig'
import highchartsTheme from './HighchartsTheme'

import { Tile } from '../Shared/Tile'
import { appContext } from '../App/AppProvider'
import ReactHighcharts from 'react-highcharts'
import ChartSelect from './ChartSelect'

ReactHighcharts.Highcharts.setOptions(highchartsTheme)

export interface PriceChartProps {}

const PriceChart: React.SFC<PriceChartProps> = () => {
  return (
    <appContext.Consumer>
      {({ historical, changeChartSelect }) => (
        <Tile>
          <ChartSelect
            defaultValue={'months'}
            onChange={e => {
              changeChartSelect(e.target.value)
            }}>
            <option value='days'>Days</option>
            <option value='weeks'>Weeks</option>
            <option value='months'>Months</option>
          </ChartSelect>
          {historical.length ? (
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
