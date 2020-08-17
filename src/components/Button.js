import React from "react";
import "./styles/Button.css";

export const Button = ({children}) => {
    return(
        <button className="button">{children}</button>
    );
};