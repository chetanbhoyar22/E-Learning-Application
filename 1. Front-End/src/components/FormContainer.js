import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../App.css';

const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row className='container'>
        <Col lg={12}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
