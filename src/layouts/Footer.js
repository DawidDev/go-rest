// Komponent odpowiedzialny za stopkę

import React from "react";

// Import biblioteki styled-components do stylowania elementów
import styled from "styled-components";

const FooterContainer = styled.div`
  height: 150px;
  background-color: #222222;
  margin-top: 5rem;
  width: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    text-align: center;
    font-size: 1.75rem;
    font-weight: 300;
  }

  .title {
    font-weight: 500;
  }

  .author {
    font-size: 1rem;

    span {
      color: #f9c562;
    }
  }

  .copyrights {
    margin-top: 1rem;
    font-size: 0.75rem;
  }


`;

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <p className="title">GoREST</p>
        <p className="author">
          Designed by <span>Dawid Rożak</span>
        </p>
        <p className="copyrights">© All rights reserved</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
