import React from "react";
import { Form, Card } from "react-bootstrap";

export default function TimeZone() {
  return (
    <Card className="card h-100 p-2">
      <h5 className="card-title">Time Zones</h5>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Control placeholder="8:46 AM" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Control as="select">
          <option>Local time</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Control placeholder="1:46 AM" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Control as="select">
          <option>Denver</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>
    </Card>
  );
}
