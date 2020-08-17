import React from "react";
import introImage from "../assets/images/image-intro-mobile.jpg"
import {Button} from "./Button";
import "./styles/Hero.css";

export const Hero = () => {
    return(
        <section className="hero">
            <img src={introImage} alt="four people holding hands"/>
            <section className="heroIntro">
                <h1>Humanizing your insurance.</h1>
                <p>
                    Get your life insurance coverage easier and faster.
                    We blend our expertise and technology to help find the
                    plan that's right for you. Ensure you and your loved 
                    ones are protected.
                </p>
                <Button>VIEW PLANS</Button>
            </section>
        </section>
    );
};