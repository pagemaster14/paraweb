import React from "react";
import "./Header.css";
import logo from "../../images/Logoblack.svg"

function Header() {
  const currentViewport = document.documentElement.clientWidth;
  const [isWide, setIsWide] = React.useState(true);

  const handleResize = () => {
    if (currentViewport > 1439) {
      setIsWide(true)
    } else {
      setIsWide(false)
    }
  }

  React.useEffect(() => {
    if (currentViewport > 1439) {
      setIsWide(true)
    } else {
      setIsWide(false)
    }
  }, [currentViewport]);

    window.addEventListener("resize", handleResize)
  
  return (
    <header className="header">
      <img src={logo} alt="Логотип" className="header__logo" />
      <div className="header__contacts">
        {isWide
          ?
          <>
            <p className="header__contacts-number">8 800 000 00 00</p>
            <p className="header__contacts-email">sales@logo.ru</p>
          </>
          :
          <>
            <div className="header__contacts-number"></div>
            <div className="header__contacts-email"></div>
          </>
        }
      </div>
    </header>
  );
}

export default Header;