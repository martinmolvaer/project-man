import React, { useState } from "react";
import ClientData from "../data/ClientData.json";
import { Table, Row, Form } from "react-bootstrap";

const Clients = () => {
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
    setClients(() => [newClient, ...clients]);
  };

  React.useEffect(() => {
    console.log(clients);
  }, [clients]);

  return (
    <div>
      <h3>Add new client</h3>

      <span>Client: </span>
      <input onChange={handleChange} name="name"></input>
      <span>Contact person: </span>
      <input onChange={handleChange} name="contact_person"></input>
      <span>Email: </span>
      <input onChange={handleChange} name="email"></input>
      <button onClick={addClient}>Add client</button>

      <Row className="mx-1">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Client</th>
              <th>Contact</th>
              <th>Email</th>
            </tr>
          </thead>
          {clients.map((client) => {
            return (
              <tbody>
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
    </div>
  );
};

export default Clients;
