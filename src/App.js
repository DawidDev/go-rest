import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Navigation from "./layouts/Navigation";
import Content from "./layouts/Content";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Content />
    </BrowserRouter>
  );
}

export default App;
