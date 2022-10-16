import React, {useState} from "react";

function Sushi({sushi, handleSushiClick, money}) {

  const [sushiStatus, setSushiStatus]= useState(false)

  function handleClick(){

    setSushiStatus(true)
    if (sushi.price > money){
      alert("You're out of funds mate!")
    }
    else{
    handleSushiClick(sushi);
    }
  }


  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {sushiStatus ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
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
