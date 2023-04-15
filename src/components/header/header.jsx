import { NavLink } from "react-router-dom"

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
                        <NavLink to={'/'} className="header__logo-link">
                            <img className="header__logo" src={Logo} alt="logo" width={180} height={80} />
                        </NavLink>

                        <nav className="header__nav">
                            <ul className="header__list">
                                <li className="header__item">
                                    <NavLink to={'/services'} className="header__item-link">Xizmatlar</NavLink>
                                </li>
                                <li className="header__item">
                                    <NavLink to={'/clinics'} className="header__item-link">Klinikalar</NavLink>
                                </li>
                                <li className="header__item">
                                    <NavLink to={'/doctors'} className="header__item-link">Shifokorlar</NavLink>
                                </li>
                                <li className="header__item">
                                    <NavLink to={'/blog'} className="header__item-link">Blog</NavLink>
                                </li>
                                <li className="header__item">
                                    <NavLink to={'/intelligence'} className="header__item-link">Suniy Intelekt</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <a href="#" className="header__user-cob">
                        <ion-icon name="person-outline"></ion-icon>
                        Shaxsiy kabinet</a>
                </div>
            </Container>
            {/* <Form /> */}
        </header>
    )
}

export default Header