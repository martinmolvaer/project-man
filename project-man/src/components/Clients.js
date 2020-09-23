import React, { useState } from "react";
import ClientData from "../data/ClientData.json";
import { Table, Row, Form } from "react-bootstrap";

const Clients = () => {
  const [clients, setClients] = useState(ClientData);
  const [newClient, setNewClient] = useState({
    id: "",
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

      <p>Client: </p>
      <input onChange={handleChange} name="name"></input>
      <p>Contact person: </p>
      <input onChange={handleChange} name="contact_person"></input>
      <p>Email: </p>
      <input onChange={handleChange} name="email"></input>
      <button onClick={addClient}>Add client</button>
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
    </div>
  );
};

export default Clients;
