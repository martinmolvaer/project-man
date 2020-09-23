import React, { useState } from "react";
import ProjectData from "../data/ProjectData.json";
import { Card, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Projects = ({ project }) => {
  const [projects, setProjects] = useState(ProjectData);
  const [newProject, setNewProject] = useState({
    name: "",
    status: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const addProject = () => {
    setProjects(() => [newProject, ...projects]);
  };

  return (
    <div>
      <Container style={{ maxWidth: "1280px" }}>
        <h3>Add new Project</h3>

        <span>Project: </span>
        <input onChange={handleChange} name="name"></input>
        <span>Status: </span>
        <input onChange={handleChange} name="status"></input>
        <span>Description: </span>
        <input onChange={handleChange} name="description"></input>
        <button onClick={addProject}>Add Project</button>
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
                  <Card.Header>
                    <Card.Title>{project.name}</Card.Title>
                  </Card.Header>

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
