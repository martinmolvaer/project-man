import React from "react";
import ClientData from "../data/ClientData.json";
import { Table, Row } from "react-bootstrap";

const Clients = () => {
  return (
    <div>
      <Row className="mx-1">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Client</th>
              <th>Contact</th>
              <th>Email</th>
            </tr>
          </thead>
          {ClientData.map((client) => {
            return (
              <tbody>
                <tr>
                  <td>{client.client}</td>
                  <td>{client.contact_person}</td>
                  <td>{client.email}</td>
                </tr>
              </tbody>
            );
          })}
        </Table>
      </Row>
    </div>
  );
};

export default Clients;
