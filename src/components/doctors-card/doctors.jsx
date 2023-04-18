import Doktor from "../../assets/svg/doctor_opa.svg";
import "./doctors.scss";
function Doctors() {
  return (
    <section className="doctors">
      <div className="doctors__card">
        <div className="doctors__card-top">
          <a href="#" className="doctors__card-link">
            <img
              src={Doktor}
              alt="This is a doctor img"
              className="doctors__card-img"
            />
          </a>
        </div>
        <div className="doctors__title">
          <a href="#" className="doctors__title-link">
            <h2 className="doctors__name">Колгаева Дагмара </h2>
            <h2 className="doctors__name">Исаевна</h2>
          </a>
          <a href="#" className="doctors__title-link2">
            Врач акушер-гинеколог
          </a>
          <div className="doctors__bottom">
            <a href="#" className="doctors__bottom-link">
              Подробнее
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Doctors;
