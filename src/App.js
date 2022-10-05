import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Navigation from "./layouts/Navigation";
import Content from "./layouts/Content";
import Footer from "./layouts/Footer";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navigation />
      <Content />
      <Footer />
    </BrowserRouter>
    </>

  );
}

export default App;
