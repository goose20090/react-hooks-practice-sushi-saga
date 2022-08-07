import React, {useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

function App() {
  const [money, setMoney]= useState(85)
  const [plates, setPlates]= useState([])

  function handleClick(){
    setPlates([...plates, 0])
    
  }
  
  return (
    <div className="app">
      <SushiContainer handleClick= {handleClick} money = {money} setMoney = {setMoney}/>
      <Table money = {money} plates = {plates}/>
    </div>
  );
}

export default App;
