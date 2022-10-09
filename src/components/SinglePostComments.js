// Komponent odpowiedzialny za renderowanie komentarzy dla konkretnego posta

import React from "react";

// Import biblioteki styled-components do stylowania elementów
import styled from "styled-components";

const Container = styled.div`
    max-height: 400px;
    overflow-y: auto;
`

const CommentBox = styled.div`
    padding-top: 1rem;

    .name {
        color: #3BC390;
        font-size: 1.15rem;
        font-weight: 600;
    }

    .info {
        font-size: 0.85rem;
        font-weight: 400;
        opacity: 0.3;
    }
    
    .content {
        font-size: 1rem;
        font-weight: 300;
        margin-top: 0.25rem;
    }
    @media (max-width: 767px){
        border-bottom: 1px solid #D0FFED;
        padding-bottom: 0.5rem;
        .info {
            display: flex;
            flex-direction: column;
        }
    }
`;

const SinglePostComments = ({ data, dataReady }) => {
  const comments = data.map((item) => (
    <CommentBox key={item.id} data-aos="fade-zoom-in">
      <p className="name">{item.name}</p>
      <p className="info">{item.email} <span>| post id: {item.post_id}</span></p>
      <p className="content">{item.body}</p>
    </CommentBox>
  ));

  // Można zapisać czytelniej if-ami ale tak jest szybciej.
  // Zmienna do której przypisany jest ostateczny efekt ładowania komentarzy.
  // Jeśli:
  // a) nie wiadomo czy są komentarze bo jeszcze oczekuję odpowiedzi - pokazuje ładowanie
  // b) są komentarze - wyświetlam je
  // c) nie ma komentarzy - zwracam tą informację użytkownikowi
  const displayResult = dataReady ? (data.length > 0 ? comments : 'No comments') : 'Loading...';
  
  return <Container data-aos="fade-zoom-in">{displayResult}</Container>;
};

export default SinglePostComments;

