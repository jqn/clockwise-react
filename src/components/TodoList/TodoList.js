import React from "react";
import PropTypes from "prop-types";
import TextInput from "./TextInput";
import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <div className="card h-100 p-2">
      <h5 className="card-title">To do</h5>
      <TextInput />
      <ul className="rounded-0 mt-2">
        <TodoItem />
      </ul>
    </div>
  );
};

TodoList.defaultProps = {};

TodoList.propTypes = {};

export default TodoList;
