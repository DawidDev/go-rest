import React, { useState, useEffect } from "react";

// Import biblioteki styled-components do stylowania elementów
import styled from "styled-components";

// Import komponentów
import Inventive from "../components/Incentive";
import TodosRecord from "../components/TodosRecord";
import TodosRecordTitle from "../components/TodosRecordTitle";

// Import grafiki dla tego komponentu
import tasks from "../images/tasks.png";

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

  const tasksFromAPI = [
    {
      id: 2021,
      user_id: 4797,
      title: "Adultus clementia tui colligo statua credo taceo.",
      due_on: "2022-10-30T00:00:00.000+05:30",
      status: "completed",
    },
    {
      id: 2020,
      user_id: 4796,
      title:
        "Causa abscido volubilis facilis aegre vilitas ancilla speciosus ars tenus.",
      due_on: "2022-10-18T00:00:00.000+05:30",
      status: "pending",
    },
    {
      id: 2019,
      user_id: 4795,
      title: "Despecto certe beatae commodi sit adfero deludo damnatio.",
      due_on: "2022-10-11T00:00:00.000+05:30",
      status: "completed",
    },
    {
      id: 2018,
      user_id: 4794,
      title:
        "Deprimo defessus velit beneficium articulus pauci sophismata adaugeo ademptio derelinquo pectus.",
      due_on: "2022-10-30T00:00:00.000+05:30",
      status: "completed",
    },
    {
      id: 2017,
      user_id: 4791,
      title:
        "Censura teres cognomen apparatus quia auctor arbustum defungo benigne.",
      due_on: "2022-10-19T00:00:00.000+05:30",
      status: "pending",
    },
    {
      id: 2016,
      user_id: 4790,
      title: "Omnis cultellus acquiro aut aequitas thema summa.",
      due_on: "2022-10-08T00:00:00.000+05:30",
      status: "pending",
    },
    {
      id: 2015,
      user_id: 4789,
      title: "Appositus tersus caritas dignissimos suspendo summa nulla.",
      due_on: "2022-10-25T00:00:00.000+05:30",
      status: "pending",
    },
    {
      id: 2012,
      user_id: 4667,
      title: "Bellum delectatio repudiandae arto circumvenio molestiae.",
      due_on: "2022-10-26T00:00:00.000+05:30",
      status: "pending",
    },
    {
      id: 2011,
      user_id: 4665,
      title:
        "Illo iusto vicinus derideo atrox corpus trado textus decipio odio.",
      due_on: "2022-10-29T00:00:00.000+05:30",
      status: "pending",
    },
    {
      id: 2010,
      user_id: 4664,
      title: "Aut speciosus derideo magnam xiphias antepono.",
      due_on: "2022-10-15T00:00:00.000+05:30",
      status: "completed",
    },
  ];

  const [dataTasks, setDataTasks] = useState([])

  useEffect(() => {
    const url = `https://gorest.co.in/public/v2/todos?page=${1}`;
    fetch(url)
      .then((response) => {
        if (response.status !== 200) {
          throw Error("Błąd zapytania");
        } else {// Pobieramy z headera listę wszystkich podstronnpm dla paginacji
          return response.json(); // Dane konwertowane na obiekt JSON
        }
      })
      .then((response) => setDataTasks(response))

      // Przechwycenie błędu gdy promise (fetch) zostanie odrzucony
      .catch((error) => console.log(error));
  }, []);

  const tasksList = dataTasks.map(task => (
    <TodosRecord key={task.id} task={task} />
  ))

  return (
    <div>
      <Inventive infoAboutPage={infoAboutThisPage} />
      <TodosRecordTitle />
      {tasksList}
    </div>
  );
};

export default Todos;
