import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Card, Button, Form, Modal } from "react-bootstrap";
import { ProjectContext } from "../context/ProjectContext";
import { ArrowLeft } from "react-feather";
import { Link } from "react-router-dom";

const ProjectDetail = () => {
  const { projects } = useContext(ProjectContext);
  const { employees, addEmployee } = useContext(ProjectContext);

  const [newProjectEmployee, setNewProjectEmployee] = useState({
    first_name: "",
    last_name: "",
    id: "",
  });

  const [show, setShow] = useState(false);

  let { id } = useParams();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const project = projects.filter((detail) => detail.id === Number(id))[0];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProjectEmployee({ ...newProjectEmployee, [name]: value });
  };

  const addEmployeeToProject = () => {
    setShow(false);
    addEmployee({ ...newProjectEmployee });
  };

  return (
    <Row>
      <Col style={{ display: "flex", justifyContent: "center" }}>
        <Card style={{ width: "600px", marginTop: "5rem", height: "300px" }}>
          <Card.Title style={{ marginLeft: "1,5rem", marginTop: "1rem" }}>
            <Link to="/projects">
              <ArrowLeft style={{ marginLeft: "1rem", marginRight: "1rem" }} />
            </Link>{" "}
            Project Name: {project.name}{" "}
          </Card.Title>
          <Card.Body>
            <Card.Text>
              Description: <br></br>
              {project.description}
            </Card.Text>
            <Card.Text>
              Employees:
              {project.employeeId.map((employee) => {
                const projectEmployee = employees.filter(
                  (detail) => detail.id === employee
                )[0];
                return <li>{projectEmployee.first_name} {projectEmployee.last_name}</li>;
              })}
            </Card.Text>
            <Button onClick={handleShow}>Add employee to project</Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add employee to project</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group controlId="formBasicText">
                    <Form.Control
                      onChange={handleChange}
                      as="select"
                      multiple
                      name="name"
                      type="text"
                      placeholder="Employee name"
                    >
                      {employees.map((employee) => {
                        return (
                          <option>
                            {employee.first_name} {employee.last_name}
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
                <Button variant="primary" onClick={addEmployeeToProject}>
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
