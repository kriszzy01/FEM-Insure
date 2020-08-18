import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import "./styles/Header.css";

export const Header = () => {
    const [toggleNav, setToggleNav] = useState(false);

    return (
        <>
            <section className="header">
                <Logo />
                <NavToggleButton toggleNav={toggleNav} onToggle={() => setToggleNav(!toggleNav)} />
            </section>
            <NavBar toggleNav={toggleNav} />
        </>
    );
};

const NavBar = ({ toggleNav }) => {
    const navButtons = ["HOW WE WORK", "BLOG", "ACCOUNT", "VIEW PLANS"];

    const navButtonsArray = navButtons.map(button => <li key={button}><a href="#">{button}</a></li>);

    return (
        <nav className={toggleNav ? "nav showNav" : "nav hideNav"}>
            <ul>{navButtonsArray}</ul>
        </nav>
    );
};

const NavToggleButton = ({ toggleNav, onToggle }) => {
    const barsIcon = <FontAwesomeIcon icon={faBars} />
    const timesIcon = <FontAwesomeIcon icon={faTimes} />

    return (
        <button
            onClick={onToggle}>
            {toggleNav ? timesIcon : barsIcon}
        </button>
    );
};