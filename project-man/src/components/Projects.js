import React, { useState, useContext } from "react";

import { Row, Container, Form, Modal, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import { ProjectContext } from "../context/ProjectContext";

const Projects = () => {
  const { projects, addProject } = useContext(ProjectContext);
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

  const addNewProject = () => {
    setShow(false);
    addProject({ ...newProject, id: Math.floor(Math.random() * 100) });
  };

  return (
    <div>
      <div>
        <h3 style={{ margin: "1rem", textAlign: "center" }}>Projects</h3>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
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
                placeholder="Project name"
              ></Form.Control>
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
          <Button variant="primary" onClick={addNewProject}>
            Add project
          </Button>
        </Modal.Footer>
      </Modal>

      <Container style={{ maxWidth: "1280px" }}>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          {projects.map((project) => {
            return <ProjectCard project={project} />;
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
