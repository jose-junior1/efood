import { Provider } from "react-redux"

import { store } from "./store"

import AsideGlobal from "./components/AsideGlobal"
import Cart from "./components/Cart"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Rotas from "./routes"

import { GlobalStyles } from "./styles/styles"

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <div className="content-master">
        <Header />
        <div className="content">
          <Rotas />
          <Cart />
        </div>
        <Footer />
        <AsideGlobal />
      </div>
    </Provider>
  )
}

export default App
