import React from "react";
import Button from "./Button";
import "./buttonPanel.css";

export default function ButtonPanel (props){
  function handleClick(btn1){
        props.onClick(btn1);
     }
return (
    <div className="container">
    <div className="div-row">
        <Button name="A/C" onClick={handleClick}/>
        <Button name="+/-" onClick={handleClick}/>
        <Button name="%" onClick={handleClick}/>
        <Button name=".." onClick={handleClick} />
    </div>
    <div className="div-row">
        <Button name="7" onClick={handleClick} />
        <Button name="8" onClick={handleClick} />
        <Button name="9" onClick={handleClick}/>
        <Button name="x" onClick={handleClick}/>
    </div>
    <div className="div-row">
        <Button name="4" onClick={handleClick} />
        <Button name="5" onClick={handleClick}/>
        <Button name="6" onClick={handleClick}/>
        <Button name="-" onClick={handleClick}/>
    </div>
    <div className="div-row">
        <Button name="1" onClick={handleClick}/>
        <Button name="2" onClick={handleClick}/>
        <Button name="3" onClick={handleClick} />
        <Button name="+" onClick={handleClick}/>
    </div>
    <div className="div-row">
        <Button name="."  onClick={handleClick}/>
        <Button name="0" onClick={handleClick}/>
        <Button name="=" onClick={handleClick}/>
         
    </div>
    </div>
)
}