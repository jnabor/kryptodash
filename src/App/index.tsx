import React from 'react'
import './App.css'
import Settings from '../Settings'
import AppLayout from './AppLayout'
import AppBar from './AppBar'
import { AppProvider } from './AppProvider'
import Content from '../Shared/Content'

// import styled, { css } from 'styled-components'
// interface ButtonProps {
//   primary?: boolean
// }

// const Button = styled.div<ButtonProps>`
//   color: green;
//   ${props =>
//     props.primary &&
//     css`
//       color: palevioletred;
//     `}
// `
// const TomatoButton = styled.div<any>`
//   color: tomato;
//   border-color: tomato;
// `

const App: React.FC = () => {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar />
        <Content>
          <Settings />
        </Content>
      </AppProvider>
    </AppLayout>
  )
}

export default App
