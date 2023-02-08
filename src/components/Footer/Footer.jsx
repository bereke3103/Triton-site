import footerLogo from '../../img/footer__logo.jpg'
import facebook from '../../img/facebook.png'

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
            <div className="footer__menu__title">Contact Information</div>
            <div className="footer__menu__links">
              <div className="footer__menu__item">Достык 13/3, Астана</div>
              <div className="footer__menu__item">тритон@почта</div>
              <div className="footer__menu__item">+7700-123-4567</div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default Footer
