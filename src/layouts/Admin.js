import React from 'react';
import PropTypes from 'prop-types';

import { Route, Switch } from 'react-router-dom';

import NavigationBar from '../components/NavigationBar';
import Sidebar from '../components/Sidebar';
import routes from '../routes';

const AdminLayout = () => {
  return (
    <div className="d-flex" id="wrapper">
      <Sidebar />
      <div id="page-content-wrapper">
        <NavigationBar />
        <Switch>
          {routes.map((prop, key) => {
            return (
              <Route
                path={prop.layout + prop.path}
                component={prop.component}
                key={key}
              />
            );
          })}
        </Switch>
      </div>
    </div>
  );
};

AdminLayout.defaultProps = {};

AdminLayout.propTypes = {};

export default AdminLayout;
