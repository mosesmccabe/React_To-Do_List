import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [listArr, setListArr] = useState([]);

  function handleListArr(event) {
    setListArr((prevArr) => [...prevArr, inputText]);
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          onChange={(event) => setInputText(event.target.value)}
          value={inputText}
        />
        <button>
          <span onClick={handleListArr}>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listArr.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
