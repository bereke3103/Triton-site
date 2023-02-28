import footerLogo from '../../img/footer__logo.jpg';
import facebook from '../../img/facebook.png';

const Footer = () => {
  return (
    <section className="footer__block">
      <div className="container">
        <footer className="footer">
          <div className="footer__logo__and__social__media">
            <div className="foooter__logo">
              <img src={footerLogo} alt="footerLogo" />
            </div>
            <div className="footer__logo__social__items">
              <div className="footer__logo__social__item">
                <a href="https://www.facebook.com/" target="_blank">
                  <img src={facebook} alt="" />
                </a>
              </div>
              <div className="footer__logo__social__item">
                <a href="https://www.facebook.com/" target="_blank">
                  <img src={facebook} alt="" />
                </a>
              </div>
              <div className="footer__logo__social__item">
                <a href="https://www.facebook.com/" target="_blank">
                  <img src={facebook} alt="" />
                </a>
              </div>
            </div>
          </div>

          {/* <div className="footer__menu">
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
          </div> */}
          <div className="footer__menu">
            <div className="footer__menu__title">Contact Information</div>
            <div className="footer__menu__links">
              <div className="footer__menu__item">Достык 13/3, Астана</div>
              <div className="links__a">
                <a
                  href="mailto:vlad@htmlbook.ru"
                  className="footer__menu__item"
                >
                  тритон@почта
                </a>
              </div>
              <div className="links__a">
                {' '}
                <a href="tel:+7 (8142) 33 22 11" className="footer__menu__item">
                  +7700-123-4567
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
