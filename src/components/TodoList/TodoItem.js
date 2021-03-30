import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({ todo, onChange, onDelete }) => {
  return (
    <ul>
      <li>Cras justo odio</li>
      <li>Dapibus ac facilisis in</li>
      <li>Morbi leo risus</li>
      <li>Porta ac consectetur ac</li>
      <li>Vestibulum at eros</li>
    </ul>
  );
};

TodoItem.defaultProps = {};

TodoItem.propTypes = {};

export default TodoItem;
