import "./App.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { AiOutlineDollar } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { useState } from "react";
function App() {
  return (
    <>
      <Form.Label htmlFor="people">Tip Calculator</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="people">
          <BsPersonCircle />
        </InputGroup.Text>
        <Form.Control
          placeholder="People"
          aria-label="people"
          aria-describedby="people"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="bill">
          <AiOutlineDollar />
        </InputGroup.Text>
        <Form.Control
          placeholder="Bill Amount"
          aria-label="Bill Amount"
          aria-describedby="bill"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="tip">
          <AiOutlineDollar />
        </InputGroup.Text>
        <Form.Control
          placeholder="Tip Amount"
          aria-label="Tip Amount"
          aria-describedby="Tip"
        />
      </InputGroup>
    </>
  );
}

export default App;
