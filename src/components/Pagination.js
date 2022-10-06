import React from 'react'

// Import biblioteki styled-components do stylowania elementów
import styled from "styled-components";

const PaginationBox = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;

    button {
        font-size: 1.15rem;
        background-color: transparent;
        border: none;
        margin: 0.5rem;
        cursor: pointer;
        transition: 0.15s;
        color: #222222;
    }

    button.active {
        color: #424F7C;
        
        :hover {
            cursor: default;
        }
    }

    button.disabled {
        opacity: 0.2;

        :hover {
            color: #222222;
            cursor: default;
        }
    }

    @media (min-width: 768px) {
        button:hover {
            color: #38BB8A;
        }
    }
`

const AdditionalInfo = styled.div`
    text-align: center;
    font-size: 0.85rem;
    opacity: 0.15;
    margin-top: 0.5rem;
`

// Paginacja przyjmuje informacje nt aktualnie wybranej strony, totalnej licczby stron i funkcję
// zmieniającą stan komponentu rodzica
const Pagination = ({actualPage, totalPages, handleNumberPage}) => {

    // Renderowanie paginacji na podstawie warunków
    const numbersPages = (
        <>
            {actualPage !== 1 ? <button onClick={() => handleNumberPage(actualPage - 1)}>{'<'}</button> : <button className='disabled'>{'<'}</button>}
            {actualPage < 2 ? <button>1</button> : <button className='active'>{actualPage}</button>}
            {actualPage !== totalPages ? <button onClick={() => handleNumberPage(actualPage + 1)}>{'>'}</button> : <button className='disabled'>{'>'}</button>}
        </>
    )
    
    return (
      <>
        <PaginationBox>{numbersPages}</PaginationBox>
        <AdditionalInfo>
          <span>of {totalPages} pages</span>
        </AdditionalInfo>
      </>
    );
}

export default Pagination