import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
} from "reactstrap";
import PropTypes from "prop-types";

const Sidebar = () => {
  return (
    <Navbar
      color={
        this.props.location.pathname.indexOf("full-screen-maps") !== -1
          ? "dark"
          : this.state.color
      }
      expand="lg"
      className={
        this.props.location.pathname.indexOf("full-screen-maps") !== -1
          ? "navbar-absolute fixed-top"
          : "navbar-absolute fixed-top " +
            (this.state.color === "transparent" ? "navbar-transparent " : "")
      }
    ></Navbar>
  );
};

Sidebar.defaultProps = {};

Sidebar.propTypes = {};

export default Sidebar;
