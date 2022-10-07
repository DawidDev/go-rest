import React from 'react'

// Import biblioteki styled-components do stylowania elementów
import styled from "styled-components";

const MainContainer = styled.div`
  margin-top: 2rem;
  display: flex;

  .incentive {
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

        :hover {
          cursor: pointer;
        }
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

    img {
      object-fit: cover;
      max-height: 100%;
      width: 90%;
      float: right;
    }
  }

  @media (max-width: 767px){
    margin-top: 0;

    .incentive {
      width: 100%;
      margin-top: 10rem;

      h1 {
        font-size: 2rem;
        line-height: 2.75rem;
      }
      
      p.information {
        font-size: 1rem;
        margin-top: 1.25rem;
      }

      .box-action {
      margin-top: 1.25rem;

      button {
        padding: 0.5rem 1.25rem;
        font-size: 1rem;
      }
    }
    }


    .img-box {
      position: absolute;
      width: 120%;
      max-height: 300px;
      right: 0;
      overflow-x: hidden;
      opacity: 0.35;
      z-index: -1;

      img {
        width: auto;
        max-height: 300px;
        transform: translateX(20%);
      }
    }
  }
`;

// Komponent renderujący sekcję zachęcającą stron w aplikacji web
const Inventive = ({infoAboutPage, btnFunction}) => {
    return (
        <MainContainer>
        <div className='incentive'>
            <h1>{infoAboutPage.headerTitle}</h1>
            <p className='information'>{infoAboutPage.additionalInfo}<span>GoREST</span> api</p>
            <div className='box-action'>
                {infoAboutPage.btnText ? <button onClick={btnFunction}>{infoAboutPage.btnText}</button> : null}
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