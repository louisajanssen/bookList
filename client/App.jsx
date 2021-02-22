import React from "react";
import Search from "./Search.jsx"
import AddBook from "./AddBook.jsx"

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
    <div>
        <h1>Louisa's Book List</h1>
        <AddBook />
        <Search />
    </div>
    
        );
    }
};

export default App;

