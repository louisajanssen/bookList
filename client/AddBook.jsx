import React from 'react';
import styled from 'styled-components'

const Button = styled.button`
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
 `;

 const Input = styled.input`
    font-size: 14px;
    padding: 2px 5px;
    border: 1px solid palevioletred;
`

const AddBook = (props) => (

    <div>
        <Input></Input>
        <Button>Add Book</Button>
    </div>
)

export default AddBook;