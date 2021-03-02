import React from "react";
import styled from 'styled-components'
import Search from "./Search.jsx"
import AddBook from "./AddBook.jsx"
import Booklist from './Booklist.jsx'

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

const App = () => {

    return (
        <div>
            <Title>Louisa's Book List</Title>
            <AddBook />
            <Search />
            <Booklist />
        </div>
    )
};

export default App;

