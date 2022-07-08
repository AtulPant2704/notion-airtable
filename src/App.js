import { useEffect } from "react";
import { useData } from "context";
import { List } from "components";
import "./App.css";

function App() {
  const { state } = useData();

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state));
  }, [state]);

  return (
    <div className="App">
      {state.map((item) => (
        <List id={item.id} {...item} />
      ))}
    </div>
  );
}

export default App;
