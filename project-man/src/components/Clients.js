import React, { useState } from "react";
import ClientData from "../data/ClientData.json";
import { Table, Row } from "react-bootstrap";

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
    setClients(client => [newClient, ...client ]) 
    console.log(ClientData)
  };

  const getClients = () => {
    return clients.map((client, i) => {
      return (
        <li key={i}>
          Client: <b>{client.name}</b>, Contact person:{" "}
          <b>{client.contact_person}</b>
          Email: <b>{client.email}</b>
        </li>
      );
    });
  };

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
      <br></br>
      <ul>{getClients()}</ul>
      <br></br>
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
