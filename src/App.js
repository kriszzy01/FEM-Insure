import React from "react";
import {Header} from "./components/Header";
import {Hero} from "./components/Hero";
import {WhyUs} from "./components/WhyUs";

export const App = () => {
    return(
        <>
            <Header/>
            <main>
                <Hero/>
                <WhyUs/>
            </main>
        </>
    );
};