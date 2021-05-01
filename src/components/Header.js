import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Jumbotron
      style={{
        backgroundImage: `url(
            "https://images.unsplash.com/photo-1509612355076-745a6bea8158?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          )`,
        backgroundSize: "cover",
        height: "50vh",
      }}
      fluid
    >
      <Container className="text-center">
        <h4>An Image Gallery with Infine Scroll Pagination</h4>
      </Container>
    </Jumbotron>
  );
};

export default Header;
