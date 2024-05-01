import { useState } from "react";
import "./App.css";
import Form from "./Form";
import Home from "./Home";

function App() {
  const [loged, setLoged] = useState(false);

  return <>{loged ? <Home /> : <Form setLoged={setLoged} />}</>;
}

export default App;
