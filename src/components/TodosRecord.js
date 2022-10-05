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
  background-color: #fff;
  flex-wrap: wrap;

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
  .id {
    font-size: 0.85rem;
    opacity: 0.25;
    margin-top: 1rem;
  }

  @media (max-width: 767px) {
    .title {
      width: 100%;
      position: relative;
      padding-bottom: 0.5rem;
      margin-bottom: 0.5rem;

      :after {
        content: "";
        width: 80%;
        height: 1px;
        background-color: #6c7aab;
        opacity: 0.2;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    .date,
    .status {
      width: 50%;
      text-align: center;
      font-size: 0.85rem;
      opacity: 0.5;
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

const TodosRecord = ({ task }) => {
  return (
    <Box>
      <span className="title">{task.title}</span>
      <span className="date">{task.due_on.slice(0, 10)}</span>
      <span className="status">{task.status}</span>
      <span className="id">
        id: {task.id} | user id: {task.user_id}
      </span>
    </Box>
  );
};

export default TodosRecord;