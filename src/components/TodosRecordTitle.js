// Komponent odpowiedzialny za renderowanie tytułów kolumn na liście zadań

import React from "react";

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
  background-color: rgba(64, 77, 123, 1);
  background-image: linear-gradient(
    289deg,
    rgba(64, 77, 123, 1) 0%,
    rgba(134, 144, 188, 1) 96%
  );
  color: #fff;
  font-weight: 600;

  .title {
    width: 70%;
    padding-right: 0.5rem;
  }
  .date {
    width: 15%;
  }
  .status {
    width: 15%;
  }

  @media (max-width: 767px) {
    .date,
    .status {
      display: none;
    }
  }
`;

const TodosRecordTitle = () => {
  return (
    <Box>
      <span className="title">title</span>
      <span className="date">date</span>
      <span className="status">status</span>
    </Box>
  );
};

export default TodosRecordTitle;
