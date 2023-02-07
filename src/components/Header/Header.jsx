import logo from '../../img/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__items">
          <div className="header__logo">
            <img src={logo} alt="" />
          </div>

          <div className="header__menu">
            <nav className="nav">
              <ul className="header__menu__items">
                <li>
                  <a href="" className="header__menu__links">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="" className="header__menu__links">
                    Плагины
                  </a>
                </li>
                <li>
                  <a href="" className="header__menu__links">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="" className="header__menu__links">
                    Контакты
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
