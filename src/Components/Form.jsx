import "../App.css";

const Form = ({ text, writeToDo, addToDo }) => {
  return (
    <div className="input-container">
      <input onChange={writeToDo} type="text" value={text}></input>

      <button onClick={addToDo}>➕</button>
    </div>
  );
};

export default Form;
