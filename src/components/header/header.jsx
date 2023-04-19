import { NavLink } from "react-router-dom"

import "./header.scss"
import Logo from "../../assets/svg/logojon.svg"
import Container from "../container/container"
import Form from "../form/form"
import { Button } from "@mui/material"

function Header() {
    return (
        <header className="header">
            <Container>
                <div className="header__container">
                    <div className="header__nav-wrap">
                        <NavLink to={'/'} className="header__logo-link">
                            <img className="header__logo" src={Logo} alt="logo" width={120} height={60} />
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
                                    <NavLink to={'/map'} className="header__item-link">Joylashuv</NavLink>
                                </li>
                                <li className="header__item">
                                    <NavLink to={'/blog'} className="header__item-link">Yangiliklar</NavLink>
                                </li>
                                <li className="header__item">
                                    <NavLink to={'/intelligence'} className="header__item-link">Sun'iy Intellekt</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <Button href="#" className="header__user-cob">
                        <ion-icon name="person-outline"></ion-icon>
                        Shaxsiy kabinet</Button>
                </div>
            </Container>
            {/* <Form /> */}
        </header>
    )
}

export default Header