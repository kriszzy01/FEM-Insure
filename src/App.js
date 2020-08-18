import React from "react";
import {Header} from "./components/Header";
import {Hero} from "./components/Hero";
import {WhyUs} from "./components/WhyUs";
import {HowWeWork} from "./components/HowWeWork";
import {Footer} from "./components/Footer";
import "./App.css";

export const App = () => {
    return(
        <>
            <header><Header/></header>
            <main>
                <Hero/>
                <WhyUs/>
                <HowWeWork/>
            </main>
            <footer><Footer/></footer>
        </>
    );
};