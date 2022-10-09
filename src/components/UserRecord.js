// Komponent odpowiedzialny za renderowanie pojedynczego rekordu na liście użytkowników

import React, { useState } from "react";

// Import biblioteki styled-components do stylowania elementów
import styled from "styled-components";

const Box = styled.div`
  border: 1px solid #dfe2eb;
  margin: 0.75rem 0;
  display: flex;
  align-items: center;
  padding: 1.15rem 1rem;
  border-radius: 0.5rem;
  border: none;
  box-shadow: 0px 0px 10px 0px rgba(214, 214, 214, 0.7);
  background-color: #fff;
  
  .id { width: 10%;}
  .name { width: 25%;}
  .email { width: 45%;}
  .gender { width: 10%;}
  .status { width: 10%;}

  
  @media (max-width: 767px) {
    flex-wrap: wrap;
    padding: 0.75rem;
    height: ${(props) => (props.displayBig ? "8rem" : "3rem")};
    background-color: ${(props) => (props.displayBig ? "#38bb8a" : "#fff")};
    color: ${(props) => (props.displayBig ? "#fff" : "#222222")};
    font-weight: ${(props) => (props.displayBig ? "400" : "300")};
    overflow: hidden;
    transition: 0.45s;
    border: none;

    :focus {
        background-color: red;
    }

    span {
        height: 1.5rem;
        transition: 0.25s;
    }
    .id { 
        width: 15%;
        order: 1;
        font-size: 0.8rem;
    }
    .name { 
        width: 70%;
        order: 2;
        font-weight: 400;
    }
    .email { 
        width: 100%;
        order: 4;
        margin-top: 0.75rem;
        opacity: ${(props) => (props.displayBig ? "1" : "0")};
    }
    .gender { 
        width: 20%;
        order: 5; 
        margin-top: 0.75rem;
        opacity: ${(props) => (props.displayBig ? "1" : "0")};
    }
    .status { 
        width: 10%;
        order: 3;
        font-size: 0.8rem;
    }
  }

  @media (min-width: 768px) {
    :hover {
        transition: 0.25s;
        cursor: pointer;
        color: #fff;
        background-color: #38BB8A; 
    }
  }
`;

const UserRecord = ({ user }) => {

    // Aby klient aplikacji mógł szybciej przeglądać listę użytkowników na ekranie poniżej 768px ma możliwość dopiero po kliknięciu zobaczenia więcej informacji. Poza tym ma dostęp do najważniejszych.
    // Stan i funkcja obsługująca powiększenie boxa dla informacji o użytkowniku
    const [showMoreInfo, setShowMoreInfo] = useState(false);
    const handleMoreInfo = () => setShowMoreInfo(prevValue => !prevValue)

  return (
    <Box onClick={handleMoreInfo} displayBig={showMoreInfo}>
      <span className="id">{user.id}</span>
      <span className="name">{user.name}</span>
      <span className="email">{user.email}</span>
      <span className="gender">{user.gender}</span>
      <span className="status">{user.status}</span>
    </Box>
  );
};

export default UserRecord;
