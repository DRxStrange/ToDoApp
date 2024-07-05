import React from "react";

const ToDo = ({ todo, deleteToDo, index }) => {
  return (
    <>
      <div className="list">
        <p>{todo}</p>
        <div className="actions">
          <input type="checkbox"></input>
          <button onClick={() => deleteToDo(index)}>Delete</button>
        </div>
      </div>
    </>
  );
};

export default ToDo;
