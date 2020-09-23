import React from "react";
import EmployeeData from "../data/EmployeeData.json";
import Image from "react";
import { Card, Row, Container, Col } from "react-bootstrap";

const Employees = () => {
  return (
    <Container style={{ maxWidth: "1280px" }}>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        {EmployeeData.map((employee) => {
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
                <Card.Title>
                  {employee.first_name} {employee.last_name}
                  <img style={{ cardImage: "right" }} src={employee.avatar} />
                </Card.Title>

                <Card.Text>Email: {employee.email}</Card.Text>
                <Card.Subtitle>{employee.position}</Card.Subtitle>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
    </Container>
  );
};

export default Employees;
