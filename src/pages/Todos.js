import React from "react";

// Import biblioteki styled-components do stylowania elementów
import styled from "styled-components";

import Inventive from "../components/Incentive";

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
  return (
    <div>
      <Inventive infoAboutPage={infoAboutThisPage} />
    </div>
  );
};

export default Todos;
