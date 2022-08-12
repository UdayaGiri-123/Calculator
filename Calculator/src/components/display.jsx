import React from "react";
import "./display.css";

export default function Display(props){
    return (
        <p>
            {props.value}
        </p>
    )
}