import React, { useContext, useEffect } from 'react'
import highchartsConfig from './HighchartsConfig'
import highchartsTheme from './HighchartsTheme'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Tile } from '../Shared/Tile'
import { appContext } from '../App/AppProvider'
import ReactHighcharts from 'react-highcharts'
import SelectCharts from './SelectChart'

ReactHighcharts.Highcharts.setOptions(highchartsTheme)

export interface PriceChartProps {}

const PriceChart: React.SFC<PriceChartProps> = () => {
  const context = useContext(appContext)
  const config = highchartsConfig(context.historical)

  return (
    <div>
      <SelectCharts />
      {context.historical.length ? (
        <ReactHighcharts config={config}></ReactHighcharts>
      ) : (
        <div style={{ margin: '20px' }}>
          Loading Historical Data <CircularProgress size={22} />
        </div>
      )}
    </div>
  )
}

export default PriceChart
