import { BrowserRouter } from 'react-router-dom'

import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'

import { Router } from 'routes/routes'
import { GlobalStyles } from 'styles/global'

function App() {
  return (
    <MantineProvider>
      <GlobalStyles />
      <Notifications position="top-right" />

      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
