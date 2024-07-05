import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import List from "./Components/List";

const App = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  function writeToDo(e) {
    setText(e.target.value);
  }

  function addToDo() {
    if (text != "") {
      setList((list) => [...list, text]);
      setText("");
    }
  }
  function deleteToDo(delIndex) {
    setList((list) =>
      list.filter((list, prevIndex) => {
        return prevIndex != delIndex;
      })
    );
  }

  console.log(list);
  return (
    <>
      <main>
        <h1>TO DO LIST</h1>
        <Form text={text} writeToDo={writeToDo} addToDo={addToDo} />
        <List list={list} deleteToDo={deleteToDo}/>
      </main>
    </>
  );
};

export default App;
