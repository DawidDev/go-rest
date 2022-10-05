import React from 'react'

// Import biblioteki styled-components do stylowania elementów
import styled from "styled-components";

// Import grafiki dla tego komponentu
import userSearch  from '../images/user-research.png'

import Inventive from '../components/Incentive';

const Users = () => {
    const infoAboutThisPage = {
        name: 'Users',
        headerTitle: 'Users downloaded from GoREST',
        additionalInfo: 'On this page You can check information about Users downloaded from ',
        btnText: 'Add user',
        btnFunction: '',
        btnAdditionalInfo: 'or check actual list below',
        image: userSearch
    }

    return(
        
      < Inventive  infoAboutPage = {infoAboutThisPage}/>
    )
}

export default Users;