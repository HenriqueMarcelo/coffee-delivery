import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './components/Router'
import { BrowserRouter } from 'react-router-dom'
import { ItemsContextProvider } from './contexts/ItemsContext'

const publicURL = import.meta.env.VITE_PUBLIC_URL || '/'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter basename={publicURL}>
        <ItemsContextProvider>
          <Router />
        </ItemsContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
