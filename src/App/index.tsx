import React from 'react'
import './App.css'
import WelcomeMessage from './WelcomeMessage'
import AppLayout from './AppLayout'
import AppBar from './AppBar'

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
      <AppBar />
      <WelcomeMessage />
      {
        // <Button> Hello </Button>
        // <Button primary> Hello </Button>
        // <TomatoButton> Hello </TomatoButton>
      }
    </AppLayout>
  )
}

export default App
