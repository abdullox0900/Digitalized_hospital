import "./App.scss";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Clinics from "./components/clinics-card/clinics";
import Doctors from "./components/doctors-card/doctors";
import Search from "./components/search/search";
import Aside from "./components/aside/aside";


import DDoctors from "./components/doctors-card/doctors"
import { doctorsData } from "./data/data"

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Search />
      <Clinics />
      <div className="doctors_page">
        {
          doctorsData.map((item, i) => (
            <DDoctors key={i} item={item} />
          ))
        }
      </div>
      <Aside />
      <Footer />
    </>
  );
}

export default App;
