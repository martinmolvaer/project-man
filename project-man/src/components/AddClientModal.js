import React, { useState, useEffet } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import ClientData from "../data/ClientData.json";

const AddClientModal = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [clients, setClients] = useState(ClientData);
  const [newClient, setNewClient] = useState({
    name: "",
    contact_person: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewClient({ ...newClient, [name]: value });
  };

  const addClient = () => {
    setShow(false);
    setClients(() => [newClient, ...clients]);
  };

  React.useEffect(() => {
    console.log(clients);
  }, [clients]);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

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
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addClient}>
            Add client
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddClientModal;
