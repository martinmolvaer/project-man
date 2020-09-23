import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <Container>
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/projects" component={Projects}></Route>
          </Switch>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
