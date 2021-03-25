import React from "react";
import PropTypes from "prop-types";
import { ListGroup } from "react-bootstrap";

const TodoItem = ({ todo, onChange, onDelete }) => {
  return <ListGroup.Item className="rounded-0">Hello world</ListGroup.Item>;
};

TodoItem.defaultProps = {};

TodoItem.propTypes = {};

export default TodoItem;
