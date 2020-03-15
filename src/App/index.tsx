import React from 'react'
import Settings from '../Settings'
import AppLayout from './AppLayout'
import AppBar from './AppBar'
import { AppProvider } from './AppProvider'
import Content from '../Shared/Content'
import Dashboard from '../Dashboard'

const App: React.FC = () => {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar />
        <Content>
          <Settings />
          <Dashboard />
        </Content>
      </AppProvider>
    </AppLayout>
  )
}

export default App
