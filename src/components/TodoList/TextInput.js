import React from 'react';
import PropTypes from 'prop-types';
import {  FormControl } from 'react-bootstrap';



const TextInput = () => {
  return (
    <div >
      <FormControl
        placeholder="New Todo"
        aria-label="todo"
        aria-describedby="todo"
      />
    </div>
  );
};

TextInput.defaultProps = {};

TextInput.propTypes = {};

export default TextInput;
