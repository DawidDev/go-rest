import React, {useState} from "react";

// Import elementów z biblioteki React router dom do obsługi routingu na stronie
import { NavLink } from "react-router-dom";
// Import biblioteki styled-components do stylowania elementów
import styled from "styled-components";

import logo from "../images/logo.png";

// Stylowanie elementów komponentu
const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  max-width: 1366px;
  margin: 0 auto;

  .logo-box {
    width: 400px;
    height: auto;

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  button { 
      display: none;
    }

  nav {
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

    span {
      display: none;
    }
  }

  @media (max-width: 767px){
    .logo-box {
      width: 65%;
      margin-left: 10px;
    }

    button {
      display: inline-block;

      position: ${(props) => props.isOpenMenu ? "fixed" : "absolute"};
      right: 2rem;
      top: 2rem;
      height: 3rem;
      width: 3rem;
      z-index: 2;
    }
    nav {
      position: fixed;
      top: 0;
      background-color: #fff;
      max-width: 100%;
      height: 100%;
      transform: translateX(${(props) => props.isOpenMenu ? "0%" : "100%"});
      opacity: ${(props) => props.isOpenMenu ? "1" : "0"};
      transition: 0.25s;
      align-content: center;
      flex-wrap: wrap;
      z-index: 1;

      a {
          text-align: center;
          font-size: 1.75rem;
          width: 100%;
          margin: 1rem 0;
      }

      span {
        display: inline-block;
        font-size: 3rem;
        position: absolute;
        bottom: 10%;
        opacity: 0.2;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
`;

// Stylowanie komponentu, przycisku obsługującego menu na małym ekranie
const Button = styled.button`
display: none;
  @media (max-width: 767px) {
    display: block;
    z-index: 1;
    margin: 0rem;
    height: 1.5rem;
    width: 2.25rem;
    position: relative;
    background-color: transparent;
    border: none;
    outline: none;

    .line_1, .line_2, .line_3 {
      width: 100%;
      height: 2px;
      border-radius: 10px;
      background-color: ${(props) => (props.open ? "#404D7B" : "#4E5255")};
      margin: 0.0rem 0;
      transition: 0.25s;
      transform: rotate(0deg);
    }

    .line_2 {
      width: ${(props) => (props.open ? "0" : "100%")};
      opacity: ${(props) => (props.open ? "0" : "1")};
      margin: 0 auto;
      margin-bottom: 0.60rem;
    }

    .line_1 {
      transform: ${(props) => (!props.open ? "rotate(0)" : "rotate(45deg)")};
      top: ${(props) => (!props.open ? "68%" : "35%")};
      position: absolute;
    }
    .line_3{
      transform: ${(props) => (!props.open ? "rotate(0)" : "rotate(-45deg)")};
      top: ${(props) => (!props.open ? "0%" : "35%")};
      position: absolute;
    }
  }
`;

const Navigation = () => {

  // Zmienna w stanie komponentu zawierająca informacje nt. menu (czy otwarte) na małym ekranie
  const [isOpenMenu, setOpenMenu] = useState(false)
  // Funkcja obsługująca zmianę stanu odpowiedzialnego za otwarcie menu na małym ekranie
  const handleMenu = () => setOpenMenu(prevState => !prevState)


  return (
    <NavContainer isOpenMenu={isOpenMenu}>
      <div className="logo-box">
        <img src={logo} alt="Logo GoREST" />
      </div>
      <Button open={isOpenMenu} onClick={handleMenu}>
        <div className="line_1"></div>
        <div className="line_2"></div>
        <div className="line_3"></div>
      </Button>
      <nav>
        <span>menu</span>
        <NavLink to="/users" onClick={handleMenu} className={(navData) => (navData.isActive ? 'active' : '')}>Users</NavLink>
        <NavLink to="/posts" onClick={handleMenu} className={(navData) => (navData.isActive ? 'active' : '')}>Posts</NavLink>
        <NavLink to="/todos" onClick={handleMenu} className={(navData) => (navData.isActive ? 'active' : '')}>Todos</NavLink>
      </nav>
    </NavContainer>
  );
};

export default Navigation;
