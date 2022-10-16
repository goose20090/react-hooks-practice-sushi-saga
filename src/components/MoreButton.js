import React from "react";

function MoreButton({handleClick}) {
  function onClick (e){
    handleClick(e)

  }
  return <button onClick={onClick}>More sushi!</button>;
}

export default MoreButton;
