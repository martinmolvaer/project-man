import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Card, Button, Form, Modal } from "react-bootstrap";
import { ProjectContext } from "../context/ProjectContext";
import { ArrowLeft } from "react-feather";
import { Link } from "react-router-dom";
import Employees from "./Employees";

const ProjectDetail = () => {
  const { projects } = useContext(ProjectContext);

  const [show, setShow] = useState(false);

  let { id } = useParams();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const project = projects.filter((detail) => detail.id === Number(id))[0];

  console.log(project);

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
            <Card.Text>Employees: </Card.Text>
            <Button onClick={handleShow}>Add employee to project</Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add project</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group controlId="formBasicText">
                    <Form.Control
                      name="name"
                      type="text"
                      placeholder="Employee name"
                    ></Form.Control>
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary">Add employee</Button>
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
