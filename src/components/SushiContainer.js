import React, {useState, useEffect} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({handleSushiClick, money}) {

  const [sushi, setSushi] = useState([])

  const [index, setIndex] = useState(0)

  useEffect(()=>{
    fetch("http://localhost:3001/sushis")
    .then(res=> res.json())
    .then((fetchedSushi)=> {
      setSushi(fetchedSushi);
    })
  },[])

  function handleMoreClick(){
    console.log(index)

    setIndex((index)=> index + 4 )

  }

  return (
    <div className="belt">
      {sushi.slice(index, (index + 4)).map((sushi)=> <Sushi  key = {sushi.id} sushi = {sushi} handleSushiClick= {handleSushiClick} money = {money}/>)}
      <MoreButton handleClick = {handleMoreClick}/>
    </div>
  );
}

export default SushiContainer;
