import React, {useEffect, useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({handleClick, money, setMoney}) {

  const [sushi, setSushi]= useState([])
  const [index, setIndex]= useState(0)

  useEffect(()=>{
    fetch("http://localhost:3001/sushis")
    .then(res=> res.json())
    .then(data=>{

      setSushi(data)})
  }, [])

  function handleMoreClick(e){
    setIndex((index)=> index + 4)

  }


  return (
    <div className="belt">
      {sushi.slice(index, (index+4)).map((sushi)=> <Sushi key = {sushi.id} sushi = {sushi} onClick={handleClick} money = {money} setMoney = {setMoney}/>)}
      <MoreButton handleMoreClick={handleMoreClick}/>
    </div>
  );
}

export default SushiContainer;
