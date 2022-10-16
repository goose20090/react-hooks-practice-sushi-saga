import React, { useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import Form from "./Form";

function App() {

  const [plates, setPlates] = useState([]);

  const [money, setMoney] = useState(85)

  const [formData, setFormData] = useState(0)

  function handleSushiClick(sushi){

    // add empty plate
    console.log(sushi);
    let newArr = [...plates, 0];
    setPlates(newArr);

    // handle money

    setMoney((money)=> money - sushi.price)
  };

  function handleFormChange(e){
    let newFormData = e.target.value
    setFormData(newFormData)
    console.log(formData)
  }

  function handleFormSubmit(e){
    e.preventDefault()
    let newWalletValue = money + parseInt(formData);
    setMoney(newWalletValue)
    setFormData(0)

  }


  return (
    <div className="app">
      <SushiContainer handleSushiClick={handleSushiClick} money = {money}/>
      <Table plates = {plates} money = {money} />
      <Form>
        <form onSubmit = {handleFormSubmit} >
          <label>Add funds</label>
          <input value = {formData} onChange = {handleFormChange}></input>
        </form>
      </Form>
    </div>
  );
}

export default App;
