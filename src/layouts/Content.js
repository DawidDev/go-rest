// Komponent odpowiedzialny za renderowanie zawartości 'podstron' react router dom

import React from "react";

// Import elementów z biblioteki React router dom do obsługi routingu na stronie
import { Routes, Route } from "react-router-dom";

// Import biblioteki styled-components do stylowania elementów
import styled from "styled-components";

// Import komponentów z zawartościami konkretnych podstron
import Users from "../pages/Users";
import Posts from "../pages/Posts"
import Todos from "../pages/Todos"

const MainContainer = styled.div`
  z-index: 0;
  max-width: 1366px;
  margin: 0 auto;
  padding: 0 10px;
`

const Content = () => {
  return (
    <MainContainer>
    <Routes>
      <Route path="/" element={<Users />} /> 
      <Route path="/users" element={<Users />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/todos" element={<Todos />} />
    </Routes>
    </MainContainer>
  );
};

export default Content;

// Za stornę główną uznaje w tym projekcie stronę, która wyświetlać się będzie jako pierwsza czyli 'Users'.
