import React, { useState, useContext } from "react";

import { Table, Row, Form, Button, Modal } from "react-bootstrap";
import { ProjectContext } from "../context/ProjectContext";

const Clients = () => {
  const { clients, addClient } = useContext(ProjectContext);
  const [newClient, setNewClient] = useState({
    id: "",
    name: "",
    contact_person: "",
    email: "",
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewClient({ ...newClient, [name]: value });
  };

  const addNewClient = () => {
    setShow(false);
    addClient({ ...newClient });
    setNewClient({
      id: "",
      name: "",
      contact_person: "",
      email: "",
    });
    console.log(clients);
  };

  return (
    <div>
      <div>
        <h3 style={{ margin: "1rem", textAlign: "center" }}>Clients</h3>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          style={{ border: "2px solid black" }}
          variant="light"
          onClick={handleShow}
        >
          Add new client
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add client</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicText">
              <Form.Control
                onChange={handleChange}
                name="name"
                type="text"
                placeholder="Client"
              />
            </Form.Group>

            <Form.Group controlId="formBasicText">
              <Form.Control
                onChange={handleChange}
                name="contact_person"
                type="text"
                placeholder="Contact person"
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Control
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={addNewClient}>
            Add client
          </Button>
        </Modal.Footer>
      </Modal>

      <Row className="mx-1 mt-3">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Client</th>
              <th>Contact</th>
              <th>Email</th>
            </tr>
          </thead>
          {clients.map((client, i) => {
            return (
              <tbody key={i}>
                <tr>
                  <td>{client.name}</td>
                  <td>{client.contact_person}</td>
                  <td>{client.email}</td>
                </tr>
              </tbody>
            );
          })}
        </Table>
      </Row>
      <p># of clients: {clients.length}</p>
    </div>
  );
};

export default Clients;
