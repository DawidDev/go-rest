// Komponent odpowiedzialny za paginację

import React from 'react'

// Import biblioteki styled-components do stylowania elementów
import styled from "styled-components";

const PaginationBox = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;

    span, button {
        font-size: 1.15rem;
        background-color: transparent;
        border: none;
        margin: 0.5rem;
        font-weight: 300;
    }

    button.page{
        color: #38BB8A;
        font-weight: 500;
        
    }

    .page {
        &--first, &--last {
            color: #BCE7D6;
        }
        
    }

    button {
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


    const arrowLeft = <i class="bi bi-chevron-left"></i>
    const arrowRight = <i class="bi bi-chevron-right"></i>

    // Renderowanie paginacji na podstawie warunków 
    const numbersPages = (
        <>
            
            {actualPage !== 1 ? <button onClick={() => handleNumberPage(actualPage - 1)}>{arrowLeft}</button> : <button className='disabled'>{arrowLeft}</button>}
            
            {actualPage > 3 ?  <button className='page--first' onClick={() => handleNumberPage(1)}>1</button> : null}
            {actualPage > 2 ?  <button onClick={() => handleNumberPage(actualPage - 2)}>{actualPage - 2}</button> : null}
            {actualPage > 1 ?  <button onClick={() => handleNumberPage(actualPage - 1)}>{actualPage - 1}</button> : null}
            
            <button className='page'>{actualPage}</button>

            {actualPage < totalPages ?  <button onClick={() => handleNumberPage(actualPage + 1)}>{actualPage + 1}</button> : null}
            {actualPage < totalPages -2 ?  <button onClick={() => handleNumberPage(actualPage + 2)}>{actualPage +2}</button> : null}
            {actualPage < totalPages - 3 ?  <button className='page--last' onClick={() => handleNumberPage(totalPages)}>{totalPages}</button> : null}
            
            {actualPage !== totalPages ? <button onClick={() => handleNumberPage(actualPage + 1)}>{arrowRight}</button> : <button className='disabled'>{arrowRight}</button>}
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