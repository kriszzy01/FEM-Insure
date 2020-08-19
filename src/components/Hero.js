import React from "react";
import introImageMobile from "../assets/images/image-intro-mobile.jpg";
import introImageDesktop from "../assets/images/image-intro-desktop.jpg";
import {Button} from "./Button";
import "./styles/Hero.css";

export const Hero = () => {
    return(
        <section className="hero">
            <img src={introImageMobile} alt="four people holding hands"  className="heroImageMobile"/>
            <section className="heroIntro">
                <hr/>
                <h1>Humanizing your insurance.</h1>
                <p>
                    Get your life insurance coverage easier and faster.
                    We blend our expertise and technology to help find the
                    plan that's right for you. Ensure you and your loved 
                    ones are protected.
                </p>
                <Button>VIEW PLANS</Button>
            </section>
            <img src={introImageDesktop} alt="four people holding hands"  className="heroImageDesktop"/>
        </section>
    );
};