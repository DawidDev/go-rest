import React, { useContext, useEffect, useState } from "react";

// Import grafiki dla tego komponentu
import userSearch from "../images/user-research.png";

// Import komponentów
import Inventive from "../components/Incentive";
import UserRecord from "../components/UserRecord";
import UserRecordTitle from "../components/UserRecordTitle";
import Pagination from "../components/Pagination";
import FormForUser from "../components/FormForUser";

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
    btnAdditionalInfo: "or check actual list below",
    image: userSearch,
  };

  const [visibleForm, setVisibleForm] = useState(false)
  const handleVisibleForm = () => setVisibleForm(prevValue => !prevValue)

  // Zmienna logiczna służąca tylko do wykonania ponownie useEffect, fetch po dodaniu posta aby wyświetlić nowy post na liście
  const [refreshPage, setRefreshPage] = useState(false)
  const handleRefreshPage = () => setRefreshPage(prevValue => !prevValue)

  const { usersActualPage, usersSetPage, renderedUsers, setRenderedUsersGlobal } = useContext(AppContext) // Stan dla aktualnie wybranej strony (paginacja) oraz funkcja obsługująca jego zmianę pobrane z kontekstu aplikacji (globalnego stanu).

  const [totalPages, setTotalPages] = useState(1); // Stan dla totalnej liczby stron w dla paginacji
  
  // Wyświetlanie komponentów UserRecord (generowanie listy tych komponentów) na podstawie pobranych danych 
  const usersList = renderedUsers.map((user) => (
    <UserRecord key={user.id} user={user} />
  ));

  // Po zamontowaniu komponentu pobieramy dane z API. UseEffect uruchomi się ponownie tylko przy zmianie
  // wartości stanu numberPage (zawarte tablica zależności) 
  useEffect(() => {
    const url = `https://gorest.co.in/public/v2/users?page=${usersActualPage}`;
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer 16e9cc5d10323cf49d5aa6384ec6317bfeeb0582063b2173cabbb09711b4d73f',
      },
    })
      .then((response) => {
        if (response.status !== 200) {
          throw Error("Błąd zapytania");
        } else {
          setTotalPages(response.headers.get("x-pagination-pages")); // Pobieramy z headera listę wszystkich podstron dla paginacji
          return response.json(); // Dane konwertowane na obiekt JSON
        }
      })
      .then((response) => {
        setRenderedUsersGlobal(response)
      })

      // Przechwycenie błędu gdy promise (fetch) zostanie odrzucony
      .catch((error) => console.log(error));
  }, [usersActualPage, refreshPage]);

  const positiveResult = (
    <>
      {usersList}
      <Pagination actualPage={usersActualPage} totalPages={totalPages} handleNumberPage={usersSetPage}/>
    </>
  )

  const loadingDisplay = <p>Loading...</p>
  const renderUsersDecision = renderedUsers.length > 0 ? positiveResult : loadingDisplay; // Jeśli lista postów zawiera dane zostaną wyświetlone, jeśli nie wyświetli się informacja o ładowaniu danych
  const displayForm = visibleForm ? <FormForUser handleReloadData={handleRefreshPage} /> : null; // Decyzja na temat widoczności formularza


  return (
    <>
      <Inventive infoAboutPage={infoAboutThisPage} btnFunction={handleVisibleForm} />
      {displayForm}
      <UserRecordTitle />
      {renderUsersDecision}
    </>
  );
};

export default Users;
