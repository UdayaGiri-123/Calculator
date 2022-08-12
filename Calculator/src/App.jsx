import React from "react";
import ButtonPanel from "./components/Buttonpanel";
import Display from "./components/display";
import calculate from "./logic/calculate";
import "./index.css";
export default class App extends React.Component{

    state={
     total:null,
     next:null,
     operation:null
    }

  clickHandler=(btn1)=>{
    this.setState(calculate(this.state,btn1));
  }

  render (){
    return <div class="container-1">
    <h1>Calculator</h1>
   <Display value={this.state.next || this.state.total || "0"} />
   <ButtonPanel onClick={this.clickHandler}/>
   </div>
  }
}
