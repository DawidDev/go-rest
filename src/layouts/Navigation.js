import React from "react";

// Import elementów z biblioteki React router dom do obsługi routingu na stronie
import { NavLink } from "react-router-dom";
// Import biblioteki styled-components do stylowania elementów
import styled from "styled-components";

import logo from "../images/logo.png";

// Stylowanie elementów komponentu
const NavContainer = styled.nav`
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;

  .logo-box {
    width: 400px;
    height: auto;
    border: 1px solid blue;

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  nav {
    border: 1px solid green;
    max-width: 50%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    a {
      text-decoration: none;
      color: #222222;
      font-weight: 500;
      font-size: 1.25rem;
    }

    .active {
        color: #596386;
        font-weight: 600;
    }
  }
`;

const Navigation = () => {

  return (
    <NavContainer>
      <div className="logo-box">
        <img src={logo} alt="Logo GoREST" />
      </div>
      <nav>
        <NavLink to="/users" className={(navData) => (navData.isActive ? 'active' : '')}>Users</NavLink>
        <NavLink to="/posts" className={(navData) => (navData.isActive ? 'active' : '')}>Posts</NavLink>
        <NavLink to="/todos" className={(navData) => (navData.isActive ? 'active' : '')}>Todos</NavLink>
      </nav>
    </NavContainer>
  );
};

export default Navigation;
