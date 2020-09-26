import React, { useState } from "react";
import ProjectData from "../data/ProjectData.json";
import { Card, Row, Container, Form, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState(ProjectData);
  const [newProject, setNewProject] = useState({
    name: "",
    status: "",
    description: "",
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const addProject = () => {
    setShow(false);
    setProjects(() => [newProject, ...projects]);
  };

  return (
    <div>
      <div >
      <h3 style={{margin: "1rem", textAlign: "center"}}>Projects</h3>
      </div>

      <div style={{display: "flex", justifyContent: "center"}}>
      <Button
        style={{ border: "2px solid black" }}
        variant="light"
        onClick={handleShow}
      >
        Add new project
      </Button>
</div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicText">
              <Form.Control
              
                onChange={handleChange}
                name="name"
                type="text"
                placeholder="Project name">
              
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="ControlSelect2">
              <Form.Control
              as="select" 
                onChange={handleChange}
                name="status"
                type="text"
                placeholder="Status"
              >
                <option>Not started</option>
              <option>In progress</option>
              <option>Done</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Control
                onChange={handleChange}
                name="description"
                type="text"
                placeholder="Enter description"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addProject}>
            Add project
          </Button>
        </Modal.Footer>
      </Modal>

      <Container style={{ maxWidth: "1280px" }}>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          {projects.map((project) => {
            return (
              <Card
                style={{
                  width: "18rem",
                  marginRight: "1rem",
                  marginBottom: "1rem",
                  marginTop: "1rem",
                }}
              >
                <Card.Body>
                  
                    <Card.Title>{project.name}</Card.Title>
                  

                  <Card.Text>{project.description}</Card.Text>
                  <Card.Subtitle>{project.position}</Card.Subtitle>
                </Card.Body>
                <Card.Footer>{project.status}</Card.Footer>
              </Card>
            );
          })}
          ;
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
