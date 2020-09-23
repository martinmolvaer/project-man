import React from "react";
import "./App.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Clients from "./components/Clients";
import Employees from "./components/Employees";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container style={{ maxWidth: "1280px" }}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/employees">
            <Employees />
          </Route>
          <Route exact path="/clients">
            <Clients />
          </Route>
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
