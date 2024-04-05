import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import { GlobalStyle } from './styles'
import PagesRoutes from './routes'
import Footer from './components/Footer'
import Cart from './components/Cart'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div className="container">
        <Header />
      </div>
      <PagesRoutes />
      <Footer />
      <Cart />
    </BrowserRouter>
  )
}

export default App
