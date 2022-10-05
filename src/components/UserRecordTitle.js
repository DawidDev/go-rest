import React from 'react'

// Import biblioteki styled-components do stylowania elementów
import styled from "styled-components";

import infoIcon from "../images/info-circle.png"

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
  background-image: linear-gradient(289deg, rgba(64, 77, 123, 1) 0%, rgba(134, 144, 188, 1) 96%);
  color: #fff;
  font-weight: 600;

  .id { width: 10%;}
  .name { width: 25%;}
  .email { width: 45%;}
  .gender { width: 10%;}
  .status { width: 10%;}

  @media (max-width: 767px) {
    .id { width: 20%;}
    .name { width: 55%;}
    .email { display: none}
    .gender { display: none}
    .status { width: 25%;}
  }
`;

const InfoSmallScreen = styled.div`
    width: 80%;
    margin: 3rem auto;
    margin-bottom: 1.5rem;
    font-size: 0.85rem;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #596386;

    img {
        height: 1.75rem;
        margin-right: 0.85rem;
    }

    @media (min-width: 768px) {
        display: none;
    }
`


const UserRecordTitle = () => {

const infoSmallScreen = (
    <InfoSmallScreen>
        <img src={infoIcon} alt='Information icon'/>
        <span>To see more details of user click on choosed user. </span>
    </InfoSmallScreen>
)

  return (
    <>
      {infoSmallScreen}
      <Box>
        <span className="id">id</span>
        <span className="name">name</span>
        <span className="email">email</span>
        <span className="gender">gender</span>
        <span className="status">status</span>
      </Box>
    </>
  );
};

export default UserRecordTitle;