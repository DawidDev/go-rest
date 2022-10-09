// Komponent odpowiedzialny za formularz dodawania posta

import React, { useState } from "react";

// Import biblioteki styled-components do stylowania elementów
import styled from "styled-components";

const Form = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 2rem 0;

  h4 {
    font-size: 2rem;
    font-weight: 800;
    color: #6c7aab;
  }

  .box {
    flex-direction: column;
    width: 600px;

    input,
    textarea {
      margin: 0.5rem 0;
      padding: 1.15rem 1rem;
      border-radius: 0.5rem;
      border: none;
      box-shadow: 0px 0px 10px 0px rgba(214, 214, 214, 0.7);
      background-color: #fff;
      min-width: 100%;
      max-width: 600px;
      outline: none;
    }
  }
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
    float: right;
    margin: 1rem 0;
    transition: 0.45s;
  }

  @media (min-width: 768px){
    button:hover {
      opacity: 0.85;
      cursor: pointer;
    }
  }
`;

const FormForPost = ({handleReloadData}) => {
  const [titlePost, setTitlePost] = useState("");
  const handleTitle = (e) => setTitlePost(e.target.value);

  const [contentPost, setContentPost] = useState("");
  const handleContentPost = (e) => setContentPost(e.target.value);

  const [status, setStatus] = useState('');

  const POST_data = (e) => {
    e.preventDefault();

    // Wysyłam posta na serwer za pomocą fetch
    fetch("https://gorest.co.in/public/v2/users/125/posts", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 16e9cc5d10323cf49d5aa6384ec6317bfeeb0582063b2173cabbb09711b4d73f",
      },
      body: JSON.stringify({
        title: titlePost, // Tytuł posta z kontrolowanego elementu formularza
        body: contentPost, // Treść posta z kontrolowanego elementu formularza
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        // API zwraca nowo dodany post w postaci obiektu. Jeśli zwróci te same dane które wysłaliśmy uznajemy to za sukces i odświeżamy komponent listy aby zobaczyć nowo dodany post.
        const {title, body} = res
        if(titlePost === title && contentPost === body){
          setStatus('ready') // Ustawiam status realizacji dodawania posta na pozytywny
          handleReloadData() // Wywołuje funkcję w pozytywnym scenariuszu, która po swojej zmianie wymusi przeładowanie strony z postami  
        } else {
          setStatus('error') // Ustawiam status realizacji dodawania posta na negatywny
        }

       })

      .catch((error) => {
        console.log(error)
        setStatus('error') // Ustawiam status realizacji dodawania posta na negatywny
      });
      
  };

  const form = (
    <form onSubmit={POST_data}>
      <label>
        <input
          type="text"
          placeholder="title"
          value={titlePost}
          onChange={handleTitle}
        ></input>
      </label>
      <label>
        <textarea
          type="textarea"
          placeholder="post content"
          value={contentPost}
          onChange={handleContentPost}
        />
      </label>
      <button type="submit">Add post</button>
    </form>
  );

  const positiveInfo = 'Post was added. Success!'
  const negativeInfo = 'Something went wrong...'

  const result = status === '' ? form : (status === 'ready' ? positiveInfo : negativeInfo)


  return (
    <Form>
      <div className="box">
        <h4>Adding new post</h4>
        <p>as user of number id 125</p>
        {result}
      </div>
    </Form>
  );
};

export default FormForPost;
