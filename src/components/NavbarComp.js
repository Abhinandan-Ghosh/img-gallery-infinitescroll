import React from "react";
import { Navbar } from "react-bootstrap";

const NavbarComp = () => {
  return (
    <Navbar bg="light">
      <Navbar.Brand href="/">IG</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-center">
        <Navbar.Text>
          <h3>Image Gallery</h3>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComp;
