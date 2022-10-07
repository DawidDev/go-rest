import React, { useState } from "react";

// Import biblioteki styled-components do stylowania elementów
import styled from "styled-components";


const Form = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;

  h4 {
    font-size: 2rem;
    font-weight: 800;
    color: #6c7aab;
  }

  .box {
    width: 100%;
    max-width: 400px;
    form {
      display: flex;
      flex-direction: column;
      width: 100%;

      input,
      select {
        margin: 0.5rem 0;
        padding: 0.75rem 0.5rem;
        border-radius: 0.5rem;
        border: none;
        box-shadow: 0px 0px 10px 0px rgba(214, 214, 214, 0.7);
        background-color: #fff;
        width: 100%;
        max-width: 600px;
        outline: none;
      }

      .group-select {
        display: flex;
        justify-content: space-between;
        select {
          width: 45%;
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

        :hover {
          cursor: pointer;
        }
      }
    }
  }
`;




const FormForUser = ({ handleReloadData }) => {
  const [emailUser, setEmailUser] = useState("");
  const handleEmailUser = (e) => setEmailUser(e.target.value);

  const [nameUser, setNameUser] = useState("");
  const handleNameUser = (e) => setNameUser(e.target.value);

  const [genderUser, setGenderUser] = useState("male");
  const handleGenderUser = (e) => setGenderUser(e.target.value);

  const [statusUser, setStatusUser] = useState("active");
  const handleStatusUser = (e) => setStatusUser(e.target.value);

  const [status, setStatus] = useState("");

  const POST_data = (e) => {
    e.preventDefault();

    // Wysyłam posta na serwer za pomocą fetch
    fetch("https://gorest.co.in/public/v2/users", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 16e9cc5d10323cf49d5aa6384ec6317bfeeb0582063b2173cabbb09711b4d73f",
      },
      body: JSON.stringify({
        email: emailUser,
        name: nameUser,
        gender: genderUser,
        status: statusUser,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setStatus("ready"); // Ustawiam status realizacji dodawania posta na pozytywny
        handleReloadData(); // Wywołuje funkcję w pozytywnym scenariuszu, która po swojej zmianie wymusi przeładowanie strony z postami
      })

      .catch((error) => {
        console.log(error);
        setStatus("error"); // Ustawiam status realizacji dodawania posta na negatywny
      });
  };

  console.log(statusUser, genderUser)

  const form = (
    <form onSubmit={POST_data}>
      <label>
        <input type="text" placeholder="email" value={emailUser} onChange={handleEmailUser} ></input>
      </label>
      <label>
        <input type="text" placeholder="name" value={nameUser} onChange={handleNameUser} ></input>
      </label>
      <div className="group-select">
      <select name="gender" value={genderUser} onChange={handleGenderUser} >
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
      <select name="status" value={statusUser} onChange={handleStatusUser} >
        <option value="active">active</option>
        <option value="inactive">inactive</option>
      </select>
      </div>
      <button type="submit">Add user</button>
    </form>
  );

  const positiveInfo = "User added. Success!";
  const negativeInfo = "Something went wrong...";

  const result =
    status === "" ? form : status === "ready" ? positiveInfo : negativeInfo;

  return (
    <Form>
      <div className="box">
        <h4>Create a new user</h4>
        {result}
      </div>
    </Form>
  );
};

export default FormForUser;
