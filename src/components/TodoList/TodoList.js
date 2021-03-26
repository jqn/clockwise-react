import React from 'react';
import PropTypes from 'prop-types';
import { Card, ListGroup } from 'react-bootstrap';
import TextInput from './TextInput';
import TodoItem from './TodoItem';

const TodoList = () => {
  return (
    <Card className="p-2">
      <TextInput />
      <ListGroup className="rounded-0 mt-2">
        <TodoItem />
      </ListGroup>
    </Card>
  );
};

TodoList.defaultProps = {};

TodoList.propTypes = {};

export default TodoList;
