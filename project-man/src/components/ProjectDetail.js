import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";
import { ProjectContext } from "../context/ProjectContext";
import { ArrowLeft } from "react-feather";
import { Link } from "react-router-dom";

const ProjectDetail = () => {
  const { projects } = useContext(ProjectContext);
  let { id } = useParams();

  const project = projects.filter((detail) => detail.id === Number(id))[0];

  console.log(project);

  return (
    <Row>
      <Col style={{ display: "flex", justifyContent: "center" }}>
        <Card style={{ width: "600px", marginTop: "5rem" }}>
          <Card.Title style={{ marginLeft: "1,5rem", marginTop: "1rem" }}>
            <Link to="/projects">
              <ArrowLeft style={{ marginLeft: "1rem", marginRight: "1rem" }} />
            </Link>{" "}
            {project.name}{" "}
          </Card.Title>
          <Card.Body>
            <Card.Text>{project.description}</Card.Text>
          </Card.Body>
          <Card.Footer>{project.status}</Card.Footer>
        </Card>
      </Col>
    </Row>
  );
};

export default ProjectDetail;
