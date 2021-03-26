import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Card } from 'react-bootstrap';

import { TodoList } from '../components/TodoList';
import Counter from '../components/Counter';

const Dashboard = () => {
  return (
    <div className="content">
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
            empty
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
