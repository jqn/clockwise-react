import React from "react";
import PropTypes from "prop-types";

import NavigationBar from "../components/NavigationBar";
import Sidebar from "../components/Sidebar";
import { Container, Row, Col, Card } from "react-bootstrap";

import { TodoList } from "../components/TodoList";
import Counter from "../components/Counter";

const AdminLayout = () => {
  return (
    <div className="d-flex" id="wrapper">
      <Sidebar />
      <div id="page-content-wrapper">
        <NavigationBar />
        <Container fluid className="my-3">
          <Row>
            <Col className="m-2">
              <Card>1</Card>
            </Col>
            <Col className="m-2">
              <Counter />
            </Col>
          </Row>
          <Row>
            <Col md className="m-2">
              <TodoList />
            </Col>
            <Col md className="m-2">
              empty
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

AdminLayout.defaultProps = {};

AdminLayout.propTypes = {};

export default AdminLayout;
