import { BrowserRouter } from "react-router-dom"

import Header from "./components/Header"
import { GlobalStyles } from "./styles/styles"
import Rotas from "./routes"
import Footer from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
    <GlobalStyles />
      <Header />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
