import React from "react";
import PropTypes from "prop-types";

import { Card, ListGroup } from "react-bootstrap";

const Events = () => {
  return (
    <Card className="card p-2 h-100">
      <h5 className="card-title">Events</h5>
      <ListGroup>
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

Events.defaultProps = {};

Events.propTypes = {};

export default Events;
