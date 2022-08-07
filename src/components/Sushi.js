import React, { useState } from "react";

function Sushi({sushi, onClick, money, setMoney}){

  const [sushiStatus, setSushiStatus]= useState(false)

  function handleClick(){
    onClick(sushi)
    
    if(money>= sushi.price){
    setSushiStatus(true)
    setMoney(money- sushi.price)
  }
  else {alert("Out of Cash!")}
  }

  return (
    <div className="sushi" onClick= {handleClick}>
      <div className="plate">
        {sushiStatus ? null : (
          <img
            src={sushi.img_url}
            alt={`${sushi.name} Sushi`}
            width="100%"
          />

        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
