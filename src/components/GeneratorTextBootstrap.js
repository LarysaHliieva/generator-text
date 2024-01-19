import React from "react";
import data from "../data";
import { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export default function GeneratorText() {
  const [size, setSize] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(size);
    //   setText(data.slice(0, 3));
    setText(data.slice(0, size));
  };

  const handleChange = (event) => {
    const value = event.target.value;
    if (value < 0) {
      setSize(0);
    } else if (value > 8) {
      setSize(8);
    } else {
      setSize(value);
    }

    // if (value < 0) {
    //   setSize(0);
    // } else if (value > data.length) {
    //   setSize(data.length);
    // } else {
    //   setSize(value);
    // }
  };

  return (
    <Container>
      <Row className="text-center">
        <h3>Генератор тексту</h3>
      </Row>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mt-3 mb-3 ">
          <Col sm="1">
            <Form.Label column sm="2">
              Параграфи
            </Form.Label>
          </Col>
          <Col xs="12" sm="3">
            <Form.Control type="number" value={size} onChange={handleChange} />
          </Col>
          <Col>
            <Button variant="warning" type="submit">
              Згенерувати
            </Button>
          </Col>
        </Form.Group>
      </Form>

      <div>
        {text.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </Container>
  );
}
