import React, { useContext, useEffect } from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import { appContext } from '../App/AppProvider'

export default function FormControlLabelPosition() {
  const [value, setValue] = React.useState('weeks')
  const context = useContext(appContext)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
  }

  useEffect(() => {
    context.changeChartSelect(value)
    console.log(value)
  }, [value])

  return (
    <div style={{ margin: '10px 10px 30px 20px' }}>
      <FormControl component='fieldset'>
        <RadioGroup
          aria-label='position'
          name='position'
          value={value}
          onChange={handleChange}
          row>
          <FormControlLabel
            value='days'
            control={<Radio color='primary' />}
            label='Days'
            labelPlacement='end'
          />
          <FormControlLabel
            value='weeks'
            control={<Radio color='primary' />}
            label='Weeks'
            labelPlacement='end'
          />
          <FormControlLabel
            value='months'
            control={<Radio color='primary' />}
            label='Months'
            labelPlacement='end'
          />
        </RadioGroup>
      </FormControl>
    </div>
  )
}
