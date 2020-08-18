import React from "react";
import {Header} from "./components/Header";
import {Hero} from "./components/Hero";
import {WhyUs} from "./components/WhyUs";
import "./App.css";

export const App = () => {
    return(
        <>
            <header><Header/></header>
            <main>
                <Hero/>
                <WhyUs/>
            </main>
        </>
    );
};