import Container from "../container/container";
import icon1 from "../../assets/svg/logo3.svg";
import icon2 from "../../assets/svg/logo2.svg";
{
  /*Kontentlarni notog'ri tuzgan va strukturasini notog'ri yozgan bo'lsam ming bor uzur */
}
import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        {/* < Footer Container > */}
        <div className="footer__container">
          {/* < Footer Top > */}
          <div className="footer__top">
            <div className="footer__top-content">
              <div className="footer__top-contact">
                <h2 className="footer__top-title active">Контактный центр</h2>
                <a href="" className="footer__top-description main">
                  +7 (495) 023-60-84
                </a>
              </div>
              <div className="footer__top-contact">
                <h2 className="footer__top-title">Экстренная госпитализация</h2>
                {/*Kontentlarni notog'ri tuzgan va strukturasini notog'ri yozgan bo'lsam ming bor uzur */}
                <a href="" className="footer__top-description">
                  +7 (495) 182-71-14
                </a>
              </div>
              <div className="footer__top-contact">
                <h2 className="footer__top-title">Приложение SmartMed</h2>
                <div className="footer__top-app">
                  <a href="">
                    <img src={icon1} alt="This is a google-play icon" />
                  </a>
                  <a href="">
                    <img src={icon2} alt="This is a apple-store icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* </ Footer Top > */}

          {/* < Footer Navbar > */}
          <nav className="footer__nav">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="" className="footer__item-link">
                  Xizmatlar
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__item-link">
                  Klinikalar
                </a>
                {/*Kontentlarni notog'ri tuzgan va strukturasini notog'ri yozgan bo'lsam ming bor uzur */}
              </li>
              <li className="footer__item">
                <a href="" className="footer__item-link">
                  Shifokorlar
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__item-link">
                  Blog
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__item-link">
                  Suniy Intelekt
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* < /Footer Navbar > */}
        {/* < /Footer Top > */}
        {/* < Footer Horizontal role > */}
        {/* < /Footer Horizontal role > */}
        {/* < Footer Bottom > */}
          <hr className="footer__hr" />
        <div className="footer__bottom">
          <div className="footer__bottom-item">
            <p className="footer__bottom-text">
              Digital Hospital © 2023 BARCHA HUQUQLAR QONUN BILAN HIMOYALANGAN.
            </p>
          </div>
        </div>
        {/* < /Footer Bottom > */}
        {/* < /Footer container > */}
        {/*Kontentlarni notog'ri tuzgan va strukturasini notog'ri yozgan bo'lsam ming bor uzur */}
      </Container>
    </footer>
  );
}

export default Footer;
