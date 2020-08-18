import React from "react";
import {MainCard} from "./MainCard";
import affordable from "../assets/images/icon-affordable-prices.svg";
import snappy from "../assets/images/icon-snappy-process.svg";
import people from "../assets/images/icon-people-first.svg";
import "./styles/WhyUs.css";

export const WhyUs = () => {
    return(
        <section className="whyUs">
            <hr/>
            <h1>We're different</h1>
            <MainCard>
                <img src={snappy} alt="lightning bolt"/>
                <h2>Snappy Process</h2>
                <p>
                    Our application process can be completed in minutes, not hours.
                    Don't get stuck filling in tedious forms.
                </p>
            </MainCard>

            <MainCard>
                <img src={affordable} alt="dollar sign"/>
                <h2>Affordable Prices</h2>
                <p>
                    We don't want you worrying about high monthly costs. Our prices
                    may be low, but we still offer the best coverage possible. 
                </p>
            </MainCard>

            <MainCard>
                <img src={people} alt="avater symbol"/>
                <h2>People First</h2>
                <p>
                    Our plans aren't full of conditions and clauses to prevent payouts.
                    We make sure you're covered when you need it.
                </p>
            </MainCard>
        </section>
    );
};