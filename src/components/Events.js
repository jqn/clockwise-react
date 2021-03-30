import React from "react";
import PropTypes from "prop-types";

const Events = () => {
  return (
    <div className="card p-2 h-100">
      <h4 className="card-title text-center">Events</h4>
      <ul className="list-group rounded-0">
        <li className="list-group-item" aria-current="true">
          An active item
        </li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </div>
  );
};

Events.defaultProps = {};

Events.propTypes = {};

export default Events;
