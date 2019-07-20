import React, { useState, useEffect } from "react";
import "./App.css";

import API from "./util/API.js";

import Container from "./components/Container";
import Form from "./components/Form";

function App() {
  const [q, setQ] = useState("");

  const handleFormChange = e => {
    let query = e.target.value;
    setQ(query);
  };

  const handleFormSubmit = props => {
    API.search(q)
      .then(response => {
        const animals = response.data.data;
        console.log(animals);
        return animals;
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className='App'>
      <Form
        val={q}
        inputChange={handleFormChange}
        submitInput={handleFormSubmit}
      />
      <Container />
    </div>
  );
}

export default App;
