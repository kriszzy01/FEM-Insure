import React from "react";
import "./styles/MainCard.css";

export const MainCard = ({children}) => {
    return(
        <section className="mainCard">{children}</section>
    );
};