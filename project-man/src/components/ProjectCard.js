import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <Link
      style={{ color: "black", textDecoration: "none" }}
      to={`projects/${project.id}`}
      key={project.id}
    >
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
    </Link>
  );
};

export default ProjectCard;
