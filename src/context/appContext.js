// Globalny stan aplikacji

import { createContext } from "react";

// Tworzymy obiekt który będzie naszym kontekstem dla aplikacji globalnym stanem. 
export const globalStateApp = {

    // Właściwości (aktualna wybrana strona paginacji oraz funkcja ją obsługująca w komponencie User)
    usersActualPage: 1,
    usersSetPage: () => {},
    
    // Właściwości (aktualna wybrana strona paginacji oraz funkcja ją obsługująca w komponencie Posts)
    postsActualPage: 1,
    postsSetPage: () => {},

    // Właściwości odpowiedzialne za utrzymanie stanu aktualnie wyrenderowanych postów
    renderedPosts: [],
    setRenderedPostsGlobal: () => {},

    // Właściwości odpowiedzialne za utrzymanie stanu aktualnie wyrenderowanych użytkowników
    renderedUsers: [],
    setRenderedUsersGlobal: () => {},

    // Właściwości odpowiedzialne za utrzymanie stanu aktualnie wyrenderowanych zadań
    renderedTodos: [],
    setRenderedTodosGlobal: () => {}
};

// Tworzymy kontekst i go eksportujemy
export const AppContext = createContext(globalStateApp);
