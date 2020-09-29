import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProjectCard = ({ project, employee }) => {

  return (
    <Link
      style={{ color: "black", textDecoration: "none" }}
      to={`projects/${project.id}`}
      key={project.id}
    >
      <Card
        className="cardeffect"
        style={{
          width: "18rem",
          height: "15rem",
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
        <Card.Footer>
          {project.status}
          <br></br>
        </Card.Footer>
      </Card>
    </Link>
  );
};

export default ProjectCard;
