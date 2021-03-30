import React from "react";
import PropTypes from "prop-types";
import TextInput from "./TextInput";
import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <div className="card h-100 p-2">
      <h4 className="card-title text-center">To do</h4>
      <TextInput />
      <ul className="list-group rounded-0 mt-2">
        <TodoItem />
      </ul>
    </div>
  );
};

TodoList.defaultProps = {};

TodoList.propTypes = {};

export default TodoList;
