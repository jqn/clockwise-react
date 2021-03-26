import React from "react";
import PropTypes from "prop-types";
import { ListGroup } from "react-bootstrap";

const TodoItem = ({ todo, onChange, onDelete }) => {
  return (
    <ListGroup>
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
  );
};

TodoItem.defaultProps = {};

TodoItem.propTypes = {};

export default TodoItem;
