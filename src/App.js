import './index.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Safety from './components/Safety/Safety';
import Products from './components/Products/Products';
import Knowledge from './components/Knowledge/Knowledge';
import OurClients from './components/OurClients/OurClients';
import Choising from './components/Choising/Choising';
import AboutPlugin from './components/AboutPlugin/AboutPlugin';
import Questions from './components/Questions/Questions';
import FormMain from './components/FormMain/FormMain';

import Footer from './components/Footer/Footer';
import { useState } from 'react';
import { Link } from 'react-scroll';
import HeaderBurger from './components/Header/HeaderBurger';

function App() {
  const [ru, setRu] = useState(true);
  const [kz, setKz] = useState(false);
  const [en, setEn] = useState(false);

  const toggleRu = () => {
    setRu(true);
    setKz(false);
    setEn(false);
  };
  const toggleKz = () => {
    setRu(false);
    setKz(true);
    setEn(false);
  };
  const toggleEn = () => {
    setRu(false);
    setKz(false);
    setEn(true);
  };

  const [burger, setBurger] = useState(false);

  const activeBuger = () => {
    setBurger(true);
  };
  const closeBuger = () => {
    setBurger(false);
  };

  return (
    <>
      <button className="button__burger" onClick={activeBuger}>
        Меню
      </button>
      <div onClick={closeBuger} className="App">
        <div className="buttons">
          <button onClick={toggleRu} className="lng">
            RU
          </button>
          <button onClick={toggleKz} className="lng">
            KZ
          </button>
          <button onClick={toggleEn} className="lng">
            EN
          </button>
        </div>
        <Header />

        <HeaderBurger burger={burger} activeBuger={activeBuger} />

        <Banner />

        <Products ru={ru} kz={kz} en={en} />

        <Safety />

        <AboutPlugin ru={ru} kz={kz} en={en} />

        <Knowledge />

        <OurClients />

        <Choising ru={ru} kz={kz} en={en} />

        <Questions ru={ru} kz={kz} en={en} />

        <FormMain />

        <Footer />
      </div>
    </>
  );
}

export default App;
