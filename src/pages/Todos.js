// Komponent odpowiedzialny za renderowanie listy zadań

import React, {useEffect, useRef, useContext } from "react";

// Import biblioteki styled-components do stylowania elementów
import styled from "styled-components";

// Import komponentów
import Inventive from "../components/Incentive";
import TodosRecord from "../components/TodosRecord";
import TodosRecordTitle from "../components/TodosRecordTitle";

// Import komponentów z biblioteki react-virtualized niezbędnych do poprawnego działania listy
import {
  InfiniteLoader,
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized";
import "react-virtualized/styles.css"; // only needs to be imported once

// Importowanie kontekstu do obsługi globalnego stanu aplikacji
import { AppContext } from "../context/appContext";

// Import grafiki dla tego komponentu
import tasks from "../images/tasks.png";

const DisplayedList = styled.div`
  height: 500px;

  .list-of-tasks {
    scrollbar-width: thin;
  }
`;

const Todos = () => {
  // Obiekt reprezentujący właściwości do wyświetlenia w sekcji powitalnej danej strony
  // Przekazywany jest do osobnego komponentu ze względu, który renderuje zawartość dla danej podstrony
  // Rozwiązanie użyte z powodu na powtarzalność wykonania tego samego kodu
  const infoAboutThisPage = {
    name: "Todos",
    headerTitle: "Tasks to do downloaded from GoREST",
    additionalInfo: "On this page You can check tasks to do downloaded from ",
    btnText: "",
    btnFunction: "",
    btnAdditionalInfo: "Check actual tasks below",
    image: tasks,
  };

  const { renderedTodos, setRenderedTodosGlobal } = useContext(AppContext); // Stan dla aktualnie wybranej strony pobrany z kontekstu aplikacji (globalnego stanu).

  // Po zamontowaniu tego komponentu (Todos) wykonywany jest useEffect, który pobiera dane dla strony nr 1 z API.
  useEffect(() => {
    const url = `https://gorest.co.in/public/v2/todos?page=${1}`;
     if(renderedTodos.length === 0){
      fetch(url)
      .then((response) => {
        if (response.status !== 200) {
          throw Error("Error with downloading todos data ");
        } else {
          return response.json(); // Dane konwertowane na obiekt JSON
        }
      })
      .then((response) => setRenderedTodosGlobal(response)) // Przypisanie pobranych tasków ze strony nr 1 API do globalnego stanu. Na tej podstawie zostanie wyrenderowana lista na początku.

      // Przechwycenie błędu gdy promise (fetch) zostanie odrzucony
      .catch((error) => console.log(error));
     }

  }, []); // pusta tablica zależności sprawia, że useEffect wykona się tylko raz niezależne od zmiany stanu komponentu ponieważ tablica zależności jest pusta.

  // ReactVirtualized: wartości niezbędne do automatycznego dostosowywania rozmiarów elementów listy. Właściwości niezbędne dla React Virtualized
  const cache = useRef(
    new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 100,
    })
  );

  // ReactVirtualized: funkcja sprawdzająca czy został pobrany dany element
  const isRowLoaded = ({ index }) => {
    return !!renderedTodos[index];
  };

  // ReactVirtualized: funkcja obsługująca dodawanie kolejnych danych (tasków)
  const loadMoreRows = ({ startIndex, stopIndex }) => {
    const page = startIndex / 10 + 1; // Domyślnie zmienna startIndex w ReactVirtualized wynosi 0 a następnie zwiększa o 10. Tutaj jednak odwołujemy się do konkretnej strony poprzez API zatem interesują nas strony (1,2,3...)
    const url = `https://gorest.co.in/public/v2/todos?page=${page}`;
    return (
      fetch(url)
        .then((response) => {
          if (response.status !== 200) {
            throw Error("Błąd zapytania");
          } else {
            // Pobieramy z headera listę wszystkich podstronnpm dla paginacji
            return response.json(); // Dane konwertowane na obiekt JSON
          }
        })
        .then((response) => {
          if (page > 1) { // Dopiero gdy nasza aplikacja chce pobrać stronę większą niż strona nr 1 (która jest domyślnie pobierana po zamontowaniu komponentu w useEffect) pobrane wartości zostają dopisane do stanu reprezentującego tablicę tasków
            if ( // Zabezpieczenie przeciw duplikacji tych samych danych. Jeśli ostatni element tablicy = ostatniemu elementowi response oznaczać to będzie, że pobrana została ponownie ta sama strona - czyli tych danych nie powinno się dopisać do stanu. Używane również w przypadku ponownego renderowania komponentu. 
              renderedTodos[renderedTodos.length - 1].id !==
              response[response.length - 1].id
            ) {
              setRenderedTodosGlobal((prevValue) => prevValue.concat(response));
            }
          }
        })

        // Przechwycenie błędu gdy promise (fetch) zostanie odrzucony
        .catch((error) => console.log(error))
    );
  };

  // ReactVirtualized: funkcja renderująca pojedynczy task na liście
  const rowRenderer = ({ key, index, style, parent }) => {

    return (
      <CellMeasurer
        key={key}
        cache={cache.current}
        parent={parent}
        rowIndex={index}
      >
        <div style={style}>
          <TodosRecord
            key={renderedTodos[index].id}
            task={renderedTodos[index]}
          />
        </div>
      </CellMeasurer>
    );
  };

  return (
    <div data-aos="fade-zoom-in">
      <Inventive infoAboutPage={infoAboutThisPage} />
      <TodosRecordTitle />
      <DisplayedList>
        <AutoSizer>
          {({ height, width }) => (
            <InfiniteLoader
              isRowLoaded={isRowLoaded}
              loadMoreRows={loadMoreRows}
              rowCount={10000}
            >
              {({ onRowsRendered, registerChild }) => (
                <List
                  className="list-of-tasks"
                  height={height}
                  onRowsRendered={onRowsRendered}
                  ref={registerChild}
                  rowCount={renderedTodos.length}
                  rowHeight={cache.current.rowHeight}
                  deferredMeasurementCache={cache.current}
                  rowRenderer={rowRenderer}
                  width={width}
                />
              )}
            </InfiniteLoader>
          )}
        </AutoSizer>
      </DisplayedList>
    </div>
  );
};

export default Todos;
