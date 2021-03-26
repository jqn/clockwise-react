import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup, FormControl } from 'react-bootstrap';

const inputStyle = {
  // margin: "40px",
  // border: "5px solid pink",
};

const TextInput = () => {
  return (
    <InputGroup style={inputStyle}>
      <FormControl
        placeholder="New Todo"
        aria-label="todo"
        aria-describedby="todo"
      />
    </InputGroup>
  );
};

TextInput.defaultProps = {};

TextInput.propTypes = {};

export default TextInput;
