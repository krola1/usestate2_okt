import { useState } from "react";

import "./App.css";
import TonyCard from "./components/TonyCard";

function App() {
  //  states for  array and text input
  const [arr, setArr] = useState([]);
  const [text, setText] = useState("");

  //  uses functional update to create a new array.
  // uses spred "..." to include previous instances before adding on a object.
  // object  contains two keys , name  (takes text input) and id (using crypto.randomuuid)
  const addItem = (item) => {
    setArr((prev) => [...prev, { name: item, id: crypto.randomUUID() }]);
    setText("");
  };

  // takes in an id, uses filter to compare id to the id in  object.
  // returns an array of objects where id does NOT match
  const removeItem = (id) => {
    setArr((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      {/* input field to capurte user input */}
      <input
        value={text}
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => addItem(text)}>legg til</button>

      {/* maps through the array, renders a "TonyCard per  index. Passes name, id and remove function as props" */}
      {arr.map((item) => (
        <TonyCard
          key={item.id}
          name={item.name}
          id={item.id}
          removeItem={removeItem}
        />
      ))}
    </>
  );
}

export default App;
