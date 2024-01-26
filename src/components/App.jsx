import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setItem(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, item];
    });
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" name="item" value={item} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem key={index} text={todoItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
