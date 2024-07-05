import React from "react";
import "../App.css";
import ToDo from "./ToDo";
const List = ({ list , deleteToDo}) => {
  return (
    <div className="container">
      {list.map((todo,index) => (
        <ToDo todo={todo} index ={index} deleteToDo={deleteToDo}/>
      ))}
    </div>
  );
};

export default List;
