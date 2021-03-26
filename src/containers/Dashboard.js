import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Card } from "react-bootstrap";

import { TodoList } from "../components/TodoList";
import Counter from "../components/Counter";
import TimeZones from "../components/TimeZones";
import Events from "../components/Events";

const Dashboard = () => {
  return (
    <div className="content">
      <Container fluid className="my-3">
        <Row>
          <Col md className="m-2">
            <Events />
          </Col>
          <Col md className="m-2">
            <Counter />
          </Col>
        </Row>
        <Row>
          <Col md className="m-2">
            <TimeZones />
          </Col>
          <Col md className="m-2">
            <TodoList />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Dashboard.defaultProps = {};

Dashboard.propTypes = {};

export default Dashboard;
