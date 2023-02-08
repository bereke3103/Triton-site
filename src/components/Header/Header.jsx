import { Link } from 'react-scroll'
import logo from '../../img/logo.svg'
import { animateScroll as scroll } from 'react-scroll'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__items">
          <div
            style={{ cursor: 'pointer' }}
            className="header__logo"
            onClick={() => scroll.scrollToTop()}
          >
            <img src={logo} alt="" />
          </div>

          <div className="header__menu">
            <nav className="nav">
              <ul className="header__menu__items">
                <li>
                  <Link
                    offset={-100}
                    to="choising"
                    smooth={true}
                    duration={1000}
                    className="header__menu__links"
                  >
                    О нас
                  </Link>
                </li>
                <li>
                  <Link
                    offset={-150}
                    to="plugin"
                    smooth={true}
                    duration={1000}
                    className="header__menu__links"
                  >
                    Плагины
                  </Link>
                </li>
                <li>
                  <Link
                    offset={-150}
                    to="faq"
                    smooth={true}
                    duration={1000}
                    className="header__menu__links"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    offset={-308}
                    to="contact"
                    smooth={true}
                    duration={1000}
                    className="header__menu__links"
                  >
                    Контакты
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
