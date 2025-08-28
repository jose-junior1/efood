import Header from "./components/Header"
import { GlobalStyles } from "./styles/styles"
import Rotas from "./routes"
import Footer from "./components/Footer"
import { Provider } from "react-redux"
import { store } from "./store"
import Cart from "./components/Cart"
import Aside from "./components/Aside"

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
        <Aside />
      </div>
    </Provider>
  )
}

export default App
