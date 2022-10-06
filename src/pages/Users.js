import React, { useContext, useEffect, useState } from "react";

// Import grafiki dla tego komponentu
import userSearch from "../images/user-research.png";

// Import komponentów
import Inventive from "../components/Incentive";
import UserRecord from "../components/UserRecord";
import UserRecordTitle from "../components/UserRecordTitle";
import Pagination from "../components/Pagination";

// Importowanie kontekstu do obsługi globalnego stanu aplikacji
import { AppContext } from "../context/appContext";

const Users = () => {
  // Obiekt reprezentujący właściwości do wyświetlenia w sekcji powitalnej danej strony
  // Przekazywany jest do osobnego komponentu ze względu, który renderuje zawartość dla danej podstrony
  // Rozwiązanie użyte z powodu na powtarzalność wykonania tego samego kodu
  const infoAboutThisPage = {
    name: "Users",
    headerTitle: "Users downloaded from GoREST",
    additionalInfo:
      "On this page You can check information about Users downloaded from ",
    btnText: "Add user",
    btnFunction: "",
    btnAdditionalInfo: "or check actual list below",
    image: userSearch,
  };

  const templateUsersAPI = [
    {
      id: 4533,
      name: "Aagam Tagore",
      email: "aagam_tagore@quigley.co",
      gender: "male",
      status: "active",
    },
    {
      id: 4532,
      name: "Vedang Agarwal",
      email: "vedang_agarwal@hyatt.name",
      gender: "female",
      status: "inactive",
    },
    {
      id: 4531,
      name: "Krishnadas Marar",
      email: "krishnadas_marar@turner.org",
      gender: "male",
      status: "inactive",
    },
    {
      id: 4530,
      name: "Bhagavaan Adiga",
      email: "bhagavaan_adiga@bednar.co",
      gender: "female",
      status: "inactive",
    },
    {
      id: 4375,
      name: "Ghanshyam Guha",
      email: "ghanshyam_guha@russel-erdman.com",
      gender: "male",
      status: "inactive",
    },
    {
      id: 4370,
      name: "Miss Mani Somayaji",
      email: "somayaji_mani_miss@hudson.io",
      gender: "male",
      status: "inactive",
    },
    {
      id: 4363,
      name: "Aadrika Pilla",
      email: "pilla_aadrika@emard.com",
      gender: "male",
      status: "inactive",
    },
    {
      id: 4362,
      name: "Gauranga Iyengar PhD",
      email: "iyengar_phd_gauranga@leffler.co",
      gender: "female",
      status: "inactive",
    },
    {
      id: 4361,
      name: "Vrinda Khanna IV",
      email: "iv_khanna_vrinda@schaden-daugherty.name",
      gender: "male",
      status: "active",
    },
    {
      id: 4360,
      name: "Chinmayananda Varrier",
      email: "chinmayananda_varrier@cole.org",
      gender: "female",
      status: "active",
    },
  ];

  const [totalPages, setTotalPages] = useState(1); // Stan dla totalnej liczby stron w dla paginacji
  const [dataUsers, setDataUsers] = useState([]); // Dane o użytkownikach, które zostaną przypisane w fetch

  const { usersActualPage, usersSetPage } = useContext(AppContext) // Stan dla aktualnie wybranej strony (paginacja) oraz funkcja obsługująca jego zmianę pobrane z kontekstu aplikacji (globalnego stanu).

  // Wyświetlanie komponentów UserRecord (generowanie listy tych komponentów) na podstawie pobranych danych 
  const usersList = dataUsers.map((user) => (
    <UserRecord key={user.id} user={user} />
  ));

  // Po zamontowaniu komponentu pobieramy dane z API. UseEffect uruchomi się ponownie tylko przy zmianie
  // wartości stanu numberPage (zawarte tablica zależności) 
  useEffect(() => {
    const url = `https://gorest.co.in/public/v2/users?page=${usersActualPage}`;
    fetch(url)
      .then((response) => {
        if (response.status !== 200) {
          throw Error("Błąd zapytania");
        } else {
          setTotalPages(response.headers.get("x-pagination-pages")); // Pobieramy z headera listę wszystkich podstron dla paginacji
          return response.json(); // Dane konwertowane na obiekt JSON
        }
      })
      .then((response) => setDataUsers(response))

      // Przechwycenie błędu gdy promise (fetch) zostanie odrzucony
      .catch((error) => console.log(error));
  }, [usersActualPage]);

  const positiveResult = (
    <>
      {usersList}
      <Pagination actualPage={usersActualPage} totalPages={totalPages} handleNumberPage={usersSetPage}/>
    </>
  )

  const loadingDisplay = <p>Loading...</p>
  const renderDecision = dataUsers.length > 0 ? positiveResult : loadingDisplay;

  return (
    <>
      <Inventive infoAboutPage={infoAboutThisPage} />
      <UserRecordTitle />
      {renderDecision}
      
    </>
  );
};

export default Users;
