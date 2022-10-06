import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Navigation from "./layouts/Navigation";
import Content from "./layouts/Content";
import Footer from "./layouts/Footer";

// Importowanie kontekstu, globalnego stanu aplikacji
import { AppContext } from "./context/appContext";
import { useState } from "react";


function App() {

  // Stan komponentu przypisany do globalnego stanu aplikacji obsługujący paginację.
  // Dla wymagania utrzymywania stanu podczas przechodzenia pomiędzy zakładkami. 
  // Dla małych aplikacji idealne rozwiązanie, w tym przypadku lepsze niż Redux. 
  const [usersActualPage, setUsersActualPage] = useState(1) 
  const [postsActualPage, setPostsActualPage] = useState(1) 
  const usersSetPage = (value) => setUsersActualPage(value)
  const postsSetPage = (value) => setPostsActualPage(value)

  const [renderedPosts, setRenderedPosts] = useState([])
  const setRenderedPostsGlobal = (value) => setRenderedPosts(value)

  return (
    <AppContext.Provider value={{ usersActualPage, usersSetPage, postsActualPage, postsSetPage, renderedPosts, setRenderedPostsGlobal}}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navigation />
        <Content />
        <Footer />
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
