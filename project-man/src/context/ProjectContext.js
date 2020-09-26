import React, { useEffect, useContext, useState } from "react";
import ProjectData from "../data/ProjectData.json";
import EmployeeData from "../data/EmployeeData.json";
import ClientData from "../data/ClientData.json";
export const ProjectContext = React.createContext();

const ProjectContextProvider = ({ children }) => {
  const [projects, setProjects] = useState(ProjectData);
  const [clients, setClients] = useState(EmployeeData);
  const [employees, setEmployees] = useState(ClientData);

  const addProject = (newProject) => {
    setProjects((previousProject) => [newProject, ...previousProject]);
  };
  const addClient = (newClient) => {
    setClients((previousClient) => [newClient, ...previousClient]);
  };
  const addEmployee = (newEmployee) => {
    setEmployees((previousEmployee) => [newEmployee, ...previousEmployee]);
  };

  return (
    <ProjectContext.Provider
      value={{
        projects,
        addProject,
        clients,
        addClient,
        employees,
        addEmployee,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;
