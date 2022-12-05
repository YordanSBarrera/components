import { useState } from "react";
import './funcList.css'

export const FuncList = () => {
  const [name, setName] = useState([]);
  
  const addSome = (e) => {
    e.preventDefault();
    setName([...name, e.target.input.value]);
    e.target.input.value = "";
  };
const DeleteSome=(index)=>{
  console.log(index)
 setName(name.filter((item,i)=>i!==index));

}
  return (
    <div className="containerForm">
      <form onSubmit={addSome} className="form">
        <input type="text" name="input" />
        <button type="sudmit" className="button">Add</button>
      </form>
      {name ? (
        <ul>          
          {name.map((valor, index) => {
            return <li key={index} className="list">{valor} 
            <button className="button" onClick={()=>{DeleteSome(index);console.log('click')}}>X</button></li>;
          })}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};
