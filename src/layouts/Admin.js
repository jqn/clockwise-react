import React from "react";
import PropTypes from "prop-types";

import NavigationBar from "../components/NavigationBar";
import Sidebar from "../components/Sidebar";

const AdminLayout = () => {
  return (
    <div className="d-flex" id="wrapper">
      <Sidebar />
      <div id="page-content-wrapper">
        <NavigationBar />
        <div class="container-fluid">
          <h1 class="mt-4">Simple Sidebar</h1>
          <p>
            The starting state of the menu will appear collapsed on smaller
            screens, and will appear non-collapsed on larger screens. When
            toggled using the button below, the menu will change.
          </p>
          <p>
            Make sure to keep all page content within the{" "}
            <code>#page-content-wrapper</code>. The top navbar is optional, and
            just for demonstration. Just create an element with the{" "}
            <code>#menu-toggle</code> ID which will toggle the menu when
            clicked.
          </p>
        </div>
      </div>
    </div>
  );
};

AdminLayout.defaultProps = {};

AdminLayout.propTypes = {};

export default AdminLayout;
