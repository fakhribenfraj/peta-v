import { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import RoutesManager from './components/RoutesManager'
import { AuthContextProvider } from './contexts/auth-context'

ReactDOM.render(
  <StrictMode>
    <AuthContextProvider>
      <RoutesManager />
    </AuthContextProvider>
  </StrictMode>,
  document.getElementById('root')
)
