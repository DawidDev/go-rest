import React from "react";

// Import elementów z biblioteki React router dom do obsługi routingu na stronie
import { Routes, Route } from "react-router-dom";

// Import komponentów z zawartościami konkretnych podstron
import Users from "../pages/Users";
import Posts from "../pages/Posts"
import Todos from "../pages/Todos"

const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<Users />} /> 
      <Route path="/users" element={<Users />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/todos" element={<Todos />} />
    </Routes>
  );
};

export default Content;

// Za stornę główną uznaje w tym projekcie stronę, która wyświetlać się będzie jako pierwsza czyli 'Users'.
