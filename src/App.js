import { useData } from "context";
import { List } from "components";
import "./App.css";

function App() {
  const { state } = useData();

  return (
    <div className="App">
      {state.map((item) => (
        <List id={item.id} {...item} />
      ))}
    </div>
  );
}

export default App;
