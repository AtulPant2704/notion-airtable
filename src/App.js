import { useState, useEffect } from "react";
import { useData } from "context";
import { List } from "components";
import "./App.css";

function App() {
  const { state } = useData();
  const [dragItemIndex, setDragItemIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state));
  }, [state]);

  return (
    <div className="App">
      {state.map((item, index) => (
        <List
          id={item.id}
          {...item}
          listIndex={index}
          dragItemIndex={dragItemIndex}
          setDragItemIndex={setDragItemIndex}
        />
      ))}
    </div>
  );
}

export default App;
