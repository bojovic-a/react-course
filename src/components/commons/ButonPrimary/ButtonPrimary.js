import React from "react";
import "./button_primary.scss"

export default function ButtonPrimary(props) {
    return (
        <button onClick={props.onClick}>{props.text}</button>
    )
}