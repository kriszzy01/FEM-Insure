import React from "react";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { ReactComponent as TwitterIcon } from "../assets/images/icon-twitter.svg";
import { ReactComponent as InstagramIcon } from "../assets/images/icon-instagram.svg";
import { ReactComponent as FacebookIcon } from "../assets/images/icon-facebook.svg";
import { ReactComponent as PinterestIcon } from "../assets/images/icon-pinterest.svg";
import {FooterCard} from "./FooterCard";
import "./styles/Footer.css";

export const Footer = () => {
    return (
        <>
            <FooterHeader />
            <hr />
            <section className="card">
                <FooterCard>
                    <p>OUR COMPANY</p>
                    <p>HOW WE WORK</p>
                    <p>WHY INSURE</p>
                    <p>CHECK PRICE</p>
                    <p>REVIEWS</p>
                </FooterCard>

                <FooterCard>
                    <p>HELP ME</p>
                    <p>FAQ</p>
                    <p>TERMS OF USE</p>
                    <p>PRIVACY POLICY</p>
                    <p>COOKIES</p>
                </FooterCard>

                <FooterCard>
                    <p>CONTACT</p>
                    <p>SALES</p>
                    <p>SUPPORT</p>
                    <p>LIVE CHAT</p>
                </FooterCard>

                <FooterCard>
                    <p>OTHERS</p>
                    <p>CAREERS</p>
                    <p>PRESS</p>
                    <p>LICENSES</p>
                </FooterCard>
            </section>
        </>
    );
};

const FooterHeader = () => {
    return (
        <header>
            <Logo />
            <section className="socialMedia">
                <FacebookIcon />
                <TwitterIcon />
                <PinterestIcon />
                <InstagramIcon />
            </section>
        </header>
    );
};