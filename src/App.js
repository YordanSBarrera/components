import "./App.css";
import Dimensiones from "./components/dimension/dimension";
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
      <div className="element"><Dimensiones/></div>
    </div>
  );
}

export default App;
