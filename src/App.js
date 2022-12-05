import "./App.css";
import { FuncList } from "./components/nameList/funcList";
import Watch from "./components/watch/watch";

function App() {
  return (
    <div className="container">
      <div className="element">Hola mundo....</div>
      <div className="element">
        <FuncList />
      </div>
      <div className="element"><Watch/></div>
    </div>
  );
}

export default App;
