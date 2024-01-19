import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "bootstrap/dist/css/bootstrap.min.css";

export default function ProductCard(props) {
  return (
    <Card
      // bg="warning"
      border="warning"
      style={{ width: "16rem", borderWidth: "2px" }}
      className="m-2 p-2"
      // className="bg-dark text-warning text-center"
    >
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.info}</Card.Text>
        <Button variant="warning">Детально</Button>
      </Card.Body>
    </Card>
  );
}
