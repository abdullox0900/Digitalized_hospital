import Klinika from "../../assets/svg/klinika.svg";
import Container from "../container/container";
import "./aside.scss";
function Aside() {
  return (
    <Container>
      <div className="aside">
        <div className="aside__about">
          <div className="aside__description">
            <h2 className="aside__title">МЕДСИ — Медицина</h2>
            <h2 className="aside__title">Компетенций</h2>
            <a href="#" className="aside__link">
              Решение конкретной проблемы
            </a>
          </div>
          <div className="aside__bottom">
            <a href="#" className="aside__bottom-link">Подробнее</a>
          </div>
        </div>
        <div className="aside__img">
          <img src={Klinika} alt="This is a clinic img" />
        </div>
      </div>
    </Container>
  );
}
export default Aside;
