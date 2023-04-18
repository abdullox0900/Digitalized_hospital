import Clinic_logo from "../../assets/svg/clinic-logo.svg";
import Star from "../../assets/svg/star4.svg";
import "./clinics.scss";
function Clinics() {
  return (
    <section className="clinics">
      <div className="clinics__card">
        <div className="clinics__top">
          <a href="#" className="clinics__top-link">
            <img
              src={Clinic_logo}
              alt="This is a clinic card img"
              className="clinics__top-img"
            />
          </a>
        </div>
        <div className="clinics__bottom">
          <h2 className="clinics__bottom-title">Medical Clinic</h2>
          <div className="clinics__bottom-item">
            <a href="#" className="clinics__bottom-link">
              Подробнее
            </a>
          </div>
        </div>
        <div className="clinics__statistic">
          <a href="#" className="clinics__statistic-links">
            <img
              src={Star}
              alt="This is a star img"
              className="clinics__statistic-img"
            />
            <img
              src={Star}
              alt="This is a star img"
              className="clinics__statistic-img"
            />
            <img
              src={Star}
              alt="This is a star img"
              className="clinics__statistic-img"
            />
            <img
              src={Star}
              alt="This is a star img"
              className="clinics__statistic-img"
            />
            <img
              src={Star}
              alt="This is a star img"
              className="clinics__statistic-img"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
export default Clinics;
