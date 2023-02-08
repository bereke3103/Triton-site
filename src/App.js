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
import footerLogo from './img/footer__logo.jpg';
import facebook from './img/facebook.png';

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

      <section className="footer__block">
        <div className="container">
          <footer className="footer">
            <div className="footer__logo__and__social__media">
              <div className="foooter__logo">
                <img src={footerLogo} alt="footerLogo" />
              </div>
              <div className="footer__logo__social__items">
                <div className="footer__logo__social__item">
                  <img src={facebook} alt="" />
                </div>
                <div className="footer__logo__social__item">
                  <img src={facebook} alt="" />
                </div>
                <div className="footer__logo__social__item">
                  <img src={facebook} alt="" />
                </div>
              </div>
            </div>

            <div className="footer__menu">
              <div className="footer__menu__title">О нас</div>
              <div className="footer__menu__links">
                <div className="footer__menu__item">О компании</div>
                <div className="footer__menu__item">О компании</div>
                <div className="footer__menu__item">О компании</div>
              </div>
            </div>
            <div className="footer__menu">
              <div className="footer__menu__title">О нас</div>
              <div className="footer__menu__links">
                <div className="footer__menu__item">О компании</div>
                <div className="footer__menu__item">О компании</div>
                <div className="footer__menu__item">О компании</div>
              </div>
            </div>
            <div className="footer__menu">
              <div className="footer__menu__title">О нас</div>
              <div className="footer__menu__links">
                <div className="footer__menu__item">О компании</div>
                <div className="footer__menu__item">О компании</div>
                <div className="footer__menu__item">О компании</div>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}

export default App;
