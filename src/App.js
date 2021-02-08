import "./App.css";
import Mensaje from "./Mensaje.js";

const App = () => {
  return (
    <div className="App">
      <Mensaje color="blue" message="Estamos Trabajando" />
      <Mensaje color="blue" message="en un Curso" />
      <Mensaje color="blue" message="React" />
    </div>
  );
};

export default App;
