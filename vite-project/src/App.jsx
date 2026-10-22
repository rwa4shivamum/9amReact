import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

function App() {
  const [show, setShow] = useState(false);

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} className="text-center">
          <h1>Welcome to React-Bootstrap</h1>
          <p>
            Click the button below to toggle a native React-Bootstrap alert.
          </p>

          <Button
            variant="primary"
            onClick={() => setShow(!show)}
            className="mb-3"
          >
            {show ? "Hide Alert" : "Show Alert"}
          </Button>

          {show && (
            <Alert variant="success" onClose={() => setShow(false)} dismissible>
              <Alert.Heading>Success!</Alert.Heading>
              <p>This alert is powered by React state instead of jQuery.</p>
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
