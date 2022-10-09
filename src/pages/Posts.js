// Komponent odpowiedzialny za renderowanie listy postów

import React, {useState, useContext, useEffect} from "react";

import Inventive from "../components/Incentive";
import Pagination from "../components/Pagination";
import SinglePost from "../components/SinglePost";
import FormForPost from "../components/FormForPost";

// Importowanie kontekstu do obsługi globalnego stanu aplikacji
import { AppContext } from "../context/appContext";

// Import grafiki dla tego komponentu
import posts from "../images/publish-post.png";

const Posts = () => {
  // Obiekt reprezentujący właściwości do wyświetlenia w sekcji powitalnej danej strony
  // Przekazywany jest do osobnego komponentu ze względu, który renderuje zawartość dla danej podstrony
  // Rozwiązanie użyte z powodu na powtarzalność wykonania tego samego kodu
  const infoAboutThisPage = {
    name: "Posts",
    headerTitle: "Posts downloaded from GoREST",
    additionalInfo: "On this page You can check posts downloaded from ",
    btnText: "Add post",
    btnFunction: "",
    btnAdditionalInfo: "or check posts below",
    image: posts,
  };

  // Stan i jego obsługa odnoszący się do widoczności formularza 
  const [visibleForm, setVisibleForm] = useState(false)
  const handleVisibleForm = () => setVisibleForm(prevValue => !prevValue)

  // Zmienna logiczna służąca tylko do wykonania ponownie useEffect, fetch po dodaniu posta aby wyświetlić nowy post na liście
  const [refreshPage, setRefreshPage] = useState(false)
  const handleRefreshPage = () => setRefreshPage(prevValue => !prevValue)

  // Obsługa globalnego stanu
  const { postsActualPage, postsSetPage, renderedPosts, setRenderedPostsGlobal } = useContext(AppContext) // Stan dla aktualnie wybranej strony (paginacja) oraz funkcja obsługująca jego zmianę pobrane z kontekstu aplikacji (globalnego stanu).

  const [totalPages, setTotalPages] = useState(1); // Stan dla totalnej liczby stron w dla paginacji

  useEffect(() => {
    const url = `https://gorest.co.in/public/v2/posts?page=${postsActualPage}`;
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
        setRenderedPostsGlobal(response) // Przypisuje do globalnego stanu aktualnie pobrane posty
      })

      // Przechwycenie błędu gdy promise (fetch) zostanie odrzucony
      .catch((error) => console.log(error));
  }, [postsActualPage, refreshPage]); // useEffect wykona się ponownie (pobierze dane) tylko po zamontowaniu kompoenntu pierwszy raz, po zmianie strony (paginacja), po odświeżeniu strony (wywoływane ręcznie) 


  const PostList = renderedPosts.map(post => (
    <SinglePost key={post.id} data={post}/>
  ))

  const positiveResult = (
    <>
      {PostList}
      <Pagination actualPage={postsActualPage} totalPages={totalPages} handleNumberPage={postsSetPage}/>
    </>
  )

  const loadingDisplay = <p>Loading...</p>
  const renderPostsDecision = renderedPosts.length > 0 ? positiveResult : loadingDisplay; // Jeśli lista postów zawiera dane zostaną wyświetlone, jeśli nie wyświetli się informacja o ładowaniu danych
  const displayForm = visibleForm ? <FormForPost handleReloadData={handleRefreshPage} /> : null; // Decyzja na temat widoczności formularza

  return (
    <div data-aos="fade-zoom-in">
      <Inventive infoAboutPage={infoAboutThisPage} btnFunction={handleVisibleForm}/>
      {displayForm}
      {renderPostsDecision}
    </div>
  );
};

export default Posts;
