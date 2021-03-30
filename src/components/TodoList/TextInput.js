import React from 'react';
import PropTypes from 'prop-types';



const TextInput = () => {
  return (
    <div className="form-group">
      <input
        className="form-control"
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
