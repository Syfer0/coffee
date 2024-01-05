import "/src/css/header.css";

const Header = () => {
  return (
    <div className="background-container">
      <div className="container">
        <header className="header">
          <div className="header__logo">
            <img src="/src/img/Logo.png" alt="Logo" />
          </div>
          <nav>
            <ul className="header__nav">
              <li>
                <a href="" className="header__nav-item">
                  Home
                </a>
                <div className="nav-border"></div>
              </li>
              <li>
                <a href="" className="header__nav-item">
                  Our Products
                </a>
                <div className="nav-border"></div>
              </li>
              <li>
                <a href="" className="header__nav-item">
                  Blog
                </a>
                <div className="nav-border"></div>
              </li>
              <li>
                <a href="" className="header__nav-item">
                  About
                </a>
                <div className="nav-border"></div>
              </li>
              <li>
                <a href="" className="header__nav-item">
                  Contact
                </a>
                <div className="nav-border"></div>
              </li>
              <li>
                <a href="" className="header__nav-item">
                  Styleguide
                </a>
                <div className="nav-border"></div>
              </li>
            </ul>
          </nav>
          <div className="header__cart">
            <img
              className="header__cart-svg"
              src="/src/img/Cart Icon.png"
              alt=""
            />
            <div className="header__cart-item">Cart</div>
            <div className="header__amount">0</div>
            <img className="header__burger" src="img/burger.svg" alt="" />
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
