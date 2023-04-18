import Header from "../../components/header/header"
import DDoctors from "../../components/doctors-card/doctors"
import { doctorsData } from "../../data/data"
import './doctor.scss'

function Doctors() {
    return (
        <section>
            <Header />
            <div className="doctors_page">
                {
                    doctorsData.map((item,i) => (
                        <DDoctors key={i} item={item} />
                    ))
                }
            </div>
        </section>
    )
}

export default Doctors