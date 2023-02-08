import './index.css'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Safety from './components/Safety/Safety'
import Products from './components/Products/Products'
import Knowledge from './components/Knowledge/Knowledge'
import OurClients from './components/OurClients/OurClients'
import Choising from './components/Choising/Choising'
import AboutPlugin from './components/AboutPlugin/AboutPlugin'
import Questions from './components/Questions/Questions'
import FormMain from './components/FormMain/FormMain'

import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />

      <Banner />

      <Products />

      <Safety />

      <AboutPlugin />

      <Knowledge />

      <OurClients />

      <Choising />

      <Questions />

      <FormMain />

      <Footer />
    </div>
  )
}

export default App
