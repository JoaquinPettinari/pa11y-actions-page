import { useState } from "react";
import "./App.css";
import Form from "./Form";

function App() {
  const [loged, setLoged] = useState(false);

  return <>{loged ? <p>home</p> : <Form setLoged={setLoged} />}</>;
}

export default App;
