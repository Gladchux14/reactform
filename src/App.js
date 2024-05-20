import React, { useState } from "react";
import "./index.css";
import Form from "./components/Form";

const App = () => {
  return (
    <>
      <section className="container">
        <h1 className="text">Identification Form:</h1>
        <h3 className="text">Please fill in the form to provide <br/> necessary details required.</h3>
      <Form />
      </section>
    </>
  );
};

export default App;
