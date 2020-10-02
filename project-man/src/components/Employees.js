import React, { useState, useContext } from "react";

import { ProjectContext } from "../context/ProjectContext";

import { Card, Row, Container, Modal, Form, Button, Badge } from "react-bootstrap";

const Employees = () => {
  const { employees, addEmployee } = useContext(ProjectContext);
  const [newEmployee, setNewEmployee] = useState({
    first_name: "",
    last_name: "",
    email: "",
    position: "",
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  const addNewEmployee = () => {
    setShow(false);
    addEmployee({ ...newEmployee, id: Math.floor(Math.random() * 100) });
  };

  return (
    <div>
      <div>
        <h3 style={{ margin: "1rem", textAlign: "center" }}>
          Employees
          <Badge variant="secondary" style={{ marginLeft: "0.5rem" }}>
            {employees.length}
          </Badge>
        </h3>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          style={{ border: "2px solid black" }}
          variant="light"
          onClick={handleShow}
        >
          Add new employee
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicText">
              <Form.Control
                onChange={handleChange}
                name="first_name"
                type="text"
                placeholder="First name"
              />
            </Form.Group>

            <Form.Group controlId="formBasicText">
              <Form.Control
                onChange={handleChange}
                name="last_name"
                type="text"
                placeholder="Last name"
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Control
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group controlId="formBasicText">
              <Form.Control
                onChange={handleChange}
                name="position"
                type="text"
                placeholder="Position"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={addNewEmployee}>
            Add employee
          </Button>
        </Modal.Footer>
      </Modal>

      <Container style={{ maxWidth: "1280px" }}>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          {employees.map((employee, i) => {
            return (
              <Card key={i}
                className="card"
                style={{
                  width: "18rem",
                  marginRight: "1rem",
                  marginBottom: "1rem",
                  marginTop: "1rem",
                }}
              >
                <Card.Body>
                  <Card.Title>
                    {employee.first_name} {employee.last_name}
                    <img alt="" src={employee.avatar} />
                  </Card.Title>

                  <Card.Text>Email: {employee.email}</Card.Text>
                  <Card.Subtitle>{employee.position}</Card.Subtitle>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Employees;
