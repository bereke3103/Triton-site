import { Link } from 'react-scroll';
import logo from '../../img/logo.svg';
import { animateScroll as scroll } from 'react-scroll';
const HeaderBurger = ({ activeBuger, burger }) => {
  return (
    <>
      <div
        className={
          burger ? 'section__header__menu active' : 'section__header__menu'
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className="header__items__burger">
          <div
            style={{ cursor: 'pointer' }}
            className="header__logo"
            onClick={() => scroll.scrollToTop()}
          >
            <img src={logo} alt="" />
          </div>

          <div className="header__menu__burger">
            <nav className="nav">
              <ul className="header__menu__items__burger">
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
    </>
  );
};

export default HeaderBurger;
