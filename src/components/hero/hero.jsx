import Container from "../container/container"
import "./hero.scss"

import Img from "../../assets/img/alimova.png"
import { Button } from "@mui/material"

function Hero() {
    return (
        <Container>
            <section className="hero">
                <div className="hero__left">
                    <h1 className="hero__left-title">Digital Hospital</h1>
                    <p className="hero__left-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, eligendi asperiores minima, quae cumque ea deleniti officia tempore facilis aliquam dolore a rem incidunt esse? Nihil facilis dignissimos sapiente ducimus!</p>
                    <Button className="hero__left-btn">Ko'proq</Button>
                </div>
                <div className="hero__right">
                    <img src={Img} alt="host" width={680} height={480} />
                </div>
            </section>
        </Container>
    )
}

export default Hero