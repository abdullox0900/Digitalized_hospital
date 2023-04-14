import "./header.scss"
import Logo from "../../assets/svg/logo.svg"
import Container from "../container/container"
import Form from "../form/form"

function Header() {
    return (
        <header className="header">
            <Container>
                <div className="header__container">
                    <div className="header__nav-wrap">
                        <a href="#" className="header__logo-link">
                            <img className="header__logo" src={Logo} alt="logo" width={180} height={80} />
                        </a>

                        <nav className="header__nav">
                            <ul className="header__list">
                                <li className="header__item">
                                    <a href="" className="header__item-link">Xizmatlar</a>
                                </li>
                                <li className="header__item">
                                    <a href="" className="header__item-link">Klinikalar</a>
                                </li>
                                <li className="header__item">
                                    <a href="" className="header__item-link">Shifokorlar</a>
                                </li>
                                <li className="header__item">
                                    <a href="" className="header__item-link">Blog</a>
                                </li>
                                <li className="header__item">
                                    <a href="" className="header__item-link">Suniy Intelekt</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <a href="#" className="header__user-cob">
                        <ion-icon name="person-outline"></ion-icon>
                        Shaxsiy kabinet</a>
                </div>
            </Container>
            <Form />
        </header>
    )
}

export default Header