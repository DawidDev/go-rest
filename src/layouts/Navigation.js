import React from 'react'

// Import elementów z biblioteki React router dom do obsługi routingu na stronie
import { Link } from "react-router-dom";
// Import biblioteki styled-components do stylowania elementów
import styled from 'styled-components'

// Stylowanie elementów komponentu
const Nav = styled.nav`
    border: 1px solid black;
`

const Navigation = () => {
    return(
        <Nav>
            <Link to="/">Users</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/todos">Todos</Link>
        </Nav>
    )
}

export default Navigation;