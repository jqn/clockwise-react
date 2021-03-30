import React from 'react';
import PropTypes from 'prop-types';



const TextInput = () => {
  return (
    <form>
      <div
        placeholder="New Todo"
        aria-label="todo"
        aria-describedby="todo"
      />
    </form>
  );
};

TextInput.defaultProps = {};

TextInput.propTypes = {};

export default TextInput;
