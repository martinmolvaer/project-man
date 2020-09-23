import React from "react";

import ProjectData from "../data/ProjectData.json";
import { Card, Row, Container } from "react-bootstrap";

const Projects = () => {
  return (
    <div>
      <Container style={{ maxWidth: "1280px" }}>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          {ProjectData.map((project) => {
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
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
