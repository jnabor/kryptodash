import React from 'react'
import styled from 'styled-components'
import { appContext } from '../App/AppProvider'
import { fontSize1, greenBoxShadow, color3 } from '../Shared/Styles'
import Button from '@material-ui/core/Button'

interface ConfirmButtonElemProps {}
const ConfirmButtonElem = styled(({ ...props }) => <Button {...props} />)<
  ConfirmButtonElemProps
>`
  && {
    margin: 40px 20px;
    cursor: pointer;
  }
`

export const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`

export interface ConfirmButtonProps {}

const ConfirmButton: React.SFC<ConfirmButtonProps> = () => {
  return (
    <appContext.Consumer>
      {({ confirmFavorites }) => (
        <CenterDiv>
          <ConfirmButtonElem
            variant='outlined'
            size='large'
            color='secondary'
            onClick={confirmFavorites}>
            Confirm Favorites
          </ConfirmButtonElem>
        </CenterDiv>
      )}
    </appContext.Consumer>
  )
}

export default ConfirmButton
