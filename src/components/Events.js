import React from "react";
import PropTypes from "prop-types";

const Events = () => {
  return (
    <div className="card p-2 h-100">
      <h5 className="card-title">Events</h5>
      <ul className="list-grop">
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
      </ul>
    </div>
  );
};

Events.defaultProps = {};

Events.propTypes = {};

export default Events;
