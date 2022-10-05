import React from 'react'

// Import biblioteki styled-components do stylowania elementów
import styled from "styled-components";

// Import grafiki
import userSearch  from '../images/user-research.png'

const MainContainer = styled.div`
  border: 1px solid red;
  margin-top: 2rem;
  display: flex;

  .incentive {
    border: 1px solid blue;
    width: 50%;
    display: flex;
    align-content: center;
    flex-wrap: wrap;
    color: #222222;
    font-weight: 400;

    h1 {
      font-size: 3rem;
      font-weight: 600;
      line-height: 3.85rem;
    }

    p.information {
      margin-top: 2rem;
      font-size: 1.25rem;

      span {
        color: #38bb8a;
        font-weight: 600;
      }
    }

    .box-action {
      margin-top: 2rem;
      border: 1px solid red;
      width: 100%;
      display: flex;
      align-items: center;

      button {
        background-color: rgba(32, 153, 107, 1);
        background-image: linear-gradient(
          287deg,
          rgba(32, 153, 107, 1) 0%,
          rgba(54, 198, 144, 1) 100%
        );
        padding: 0.75rem 2rem;
        border: none;
        border-radius: 0.5rem;
        color: #fff;
        font-size: 1.25rem;
        font-weight: 500;
        margin-right: 1.25rem;
      }

      p {
        color: #596386;
        font-weight: 500;
      }
    }
  }

  .img-box {
    width: 50%;
    max-height: 500px;
    border: 1px solid black;

    img {
      object-fit: cover;
      max-height: 100%;
      width: 90%;
      float: right;
    }
  }
`;

// Komponent renderujący sekcję zachęcającą stron w aplikacji web
const Inventive = ({infoAboutPage}) => {
    return (
        <MainContainer>
        <div className='incentive'>
            <h1>{infoAboutPage.headerTitle}</h1>
            <p className='information'>{infoAboutPage.additionalInfo}<span>GoREST</span> api</p>
            <div className='box-action'>
                {infoAboutPage.btnText ? <button>{infoAboutPage.btnText}</button> : null}
                <p>{infoAboutPage.btnAdditionalInfo}</p>
            </div>
        </div>
        <div className='img-box'>
            <img src={infoAboutPage.image} alt='Searching user' />
        </div>
    </MainContainer>
    )
}

export default Inventive;