import React from 'react'

// Import biblioteki styled-components do stylowania elementów
import styled from "styled-components";

import Inventive from '../components/Incentive';

// Import grafiki dla tego komponentu
import posts from '../images/publish-post.png'

const Posts = () => {
    const infoAboutThisPage = {
        name: 'Posts',
        headerTitle: 'Posts downloaded from GoREST',
        additionalInfo: 'On this page You can check posts downloaded from',
        btnText: 'Add post',
        btnFunction: '',
        btnAdditionalInfo: 'or check posts below',
        image: posts
    }
    return(
        <div>
             < Inventive  infoAboutPage = {infoAboutThisPage}/>
        </div>
    )
}

export default Posts;