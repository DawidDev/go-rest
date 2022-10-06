// Komponent odpowiedzialny za renderowanie pojedynczego posta

import React, { useState } from "react";

// Import biblioteki styled-components do stylowania elementów
import styled from "styled-components";

// Import Komponentów
import SinglePostComments from "./SinglePostComments";

const Post = styled.div`
  border: 1px solid #dfe2eb;
  margin: 0.75rem 0;
  padding: 1.15rem 1rem;
  border-radius: 0.5rem;
  border: none;
  box-shadow: 0px 0px 10px 0px rgba(214, 214, 214, 0.7);
  background-color: #fff;
  transition: 0.45s;

  .content {
    h2 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 0.75rem;
    }

    p {
      font-size: 1rem;
      margin-bottom: 1rem;
    }

    .additional-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        opacity: 0.25;
      }
      button {
        padding: 0.5rem 1.25rem;
        color: #39bd8c;
        color: ${(props) => props.visibleComments ? "#F9C562" : "#39bd8c"};
        font-weight: 600;
        font-size: 1.25rem;
        border: none;
        background-color: transparent;
        transition: 0.45s;

        :hover {
          cursor: pointer;
          color: #404d7b;
        }
      }
    }
  }
`;

const SinglePost = ({ data }) => {
  const [commentsData, setCommentsData] = useState([]);
  const [visibleComments, setVisibleComments] = useState(false);
  const [resultIsReady, setResultIstReady] = useState(false)

  // Metoda pobierająca z API komentarze dla danego posta
  const fetchComments = (id) => {
    const postId = id; 
    const url = `https://gorest.co.in/public/v2/posts/${postId}/comments`;
    fetch(url)
      .then((response) => {
        if (response.status !== 200) {
          throw Error("Błąd zapytania o komentarze");
        } else {
          return response.json(); // Dane konwertowane na obiekt JSON
        }
      })
      .then((response) => {
        setCommentsData(response);
        setResultIstReady(true)
      })

      // Przechwycenie błędu gdy promise (fetch) zostanie odrzucony
      .catch((error) => console.log(error));
  };

  // Funkcja obsługująca komentarze. Odwołuje się do innych funkcji pobierającej dane i wyświetlanie komentarza.
  const handleComments = () => {
    fetchComments(data.id) // Wywołujemy metodę pobierającą komentarze z API. Do metody przekazywany jest argument id tego posta.
    setVisibleComments((prevValue) => !prevValue); // Ustawiamy widoczność komentarzy po kliknięciu w przycisk. Rozwiązanie zaimplementowane dla większej przejrzystości strony.
  };

  const displayComments = visibleComments ? <SinglePostComments data={commentsData} dataReady={resultIsReady}/>: null
  return (
    <Post visibleComments={visibleComments}>
      <div className="content">
        <h2>{data.title}</h2>
        <p>{data.body}</p>
        <div className="additional-box">
          <span>
            id: {data.id} | user id: {data.user_id}
          </span>
          <button onClick={handleComments}>Comments</button>
        </div>
      </div>
      {displayComments}
    </Post>
  );
};

export default SinglePost;

// https://gorest.co.in//public/v2/posts/1108/comments
