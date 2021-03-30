import React from "react";
import PropTypes from "prop-types";

import { TodoList } from "../components/TodoList";
import Counter from "../components/Counter";
import TimeZones from "../components/TimeZones";
import Events from "../components/Events";

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div fluid className="my-3">
        <div className="row">
          <div md className="m-2">
            <Events />
          </div>
          <div md className="m-2">
            <Counter />
          </div>
        </div>
        <div>
          <div md className="m-2">
            <TimeZones />
          </div>
          <div md className="m-2">
            <TodoList />
          </div>
        </div>
      </div>
    </div>
  );
};

Dashboard.defaultProps = {};

Dashboard.propTypes = {};

export default Dashboard;
