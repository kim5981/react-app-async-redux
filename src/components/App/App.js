import { connect } from "react-redux";
import React, { useState } from 'react';
import './App.css';

import Form from "./SearchForm";
import * as actions from "../../../src/state/actions.js";

const initialFormVals = {
search: ""
}

function App(props) {

  const {
    //states
    form,
    //actions
    changeInput
  } = props;

  const handleChange = (evt) => {
    const { value, name } = evt.target
    changeInput({ name, value })
  }

  const submitSearch = evt => {
    evt.preventDefault()
  }

  return (
    <div className="App">
    <div className="inside App">
      <nav>
        <a href="#">home</a>
        <a href="#">about</a>
        <a href="#">products</a>
      </nav>
      <div>
        <h1>Makeup Title</h1>
        <Form/>
      </div>
    </div>
    </div>
  );
}

export default App;