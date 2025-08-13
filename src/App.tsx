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
      <div className="container">
        <Rotas />
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
