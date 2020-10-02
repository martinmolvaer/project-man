import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Card, Button, Form, Modal } from "react-bootstrap";
import { ProjectContext } from "../context/ProjectContext";
import { ArrowLeft } from "react-feather";
import { Link } from "react-router-dom";
import EmployeeCard from "./EmployeeCard";

const ProjectDetail = () => {
  const { projects, addEmployeeToProject } = useContext(ProjectContext);
  const { employees } = useContext(ProjectContext);
  const [newEmployeeId, setNewEmployeeId] = useState("");
  let { id } = useParams();

  const handleChange = (e) => {
    const { value } = e.target;
    setNewEmployeeId(value);
  };

  const addNewEmployee = () => {
    if (!newEmployeeId) return;
    setShow(false);
    addEmployeeToProject(Number(id), Number(newEmployeeId));
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const project = projects.filter((detail) => detail.id === Number(id))[0];

  return (
    <Row>
      <Col style={{ display: "flex", justifyContent: "center" }}>
        <Card style={{ width: "600px", marginTop: "5rem" }}>
          <Card.Title style={{ marginLeft: "1,5rem", marginTop: "1rem" }}>
            <Link to="/projects">
              <ArrowLeft style={{ marginLeft: "1rem", marginRight: "1rem" }} />
            </Link>{" "}
            Project Name: {project.name}{" "}
          </Card.Title>
          <Card.Body>
            <Card.Title>Description:</Card.Title>
            <Card.Text>{project.description}</Card.Text>
            <br></br>

            <Card.Title>Employees:</Card.Title>
            {project.employeeId.length > 0 &&
              project.employeeId.map((employee, i) => {
                const projectEmployee = employees.filter(
                  (detail) => detail.id === employee
                )[0];
                return (
                  <EmployeeCard
                    key={i}
                    employee={projectEmployee}
                    project={project}
                  />
                );
              })}
            <br></br>
            <Button
              style={{ border: "2px solid black" }}
              variant="light"
              onClick={handleShow}
            >
              Add employee to project
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add employee</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group controlId="formBasicText">
                    <Form.Control
                      as="select"
                      onChange={handleChange}
                      name="first_name"
                      type="text"
                      placeholder="First name"
                    >
                      <option selected disabled>
                        Velg en ansatt
                      </option>{" "}
                      {employees.map((employee, i) => {
                        return (
                          <option key={i} value={employee.id}>
                            {employee.first_name}
                          </option>
                        );
                      })}
                    </Form.Control>
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
          </Card.Body>
          <Card.Footer>
            Status: {project.status} <br></br>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  );
};

export default ProjectDetail;
