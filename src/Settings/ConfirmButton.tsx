import React from 'react'
import styled from 'styled-components'
import { appContext } from '../App/AppProvider'
import { fontSize1, greenBoxShadow, color3 } from '../Shared/Styles'

const ConfirmButtonStyled = styled.div`
  margin: 20px;
  color: ${color3};
  ${fontSize1}
  padding: 5px;
  cursor: pointer;
  &:hover {
    ${greenBoxShadow}
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
          <ConfirmButtonStyled onClick={confirmFavorites}>
            Confirm Favorites
          </ConfirmButtonStyled>
        </CenterDiv>
      )}
    </appContext.Consumer>
  )
}

export default ConfirmButton
