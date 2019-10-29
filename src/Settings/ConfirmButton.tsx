import React from 'react'
import styled from 'styled-components'
import { appContext } from '../App/AppProvider'

const ConfirmButtonStyled = styled.div`
  margin: 20px;
  color: green;
  cursor: pointer;
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
          <ConfirmButtonStyled onClick={confirmFavorites}>
            Confirm Favorites
          </ConfirmButtonStyled>
        </CenterDiv>
      )}
    </appContext.Consumer>
  )
}

export default ConfirmButton
