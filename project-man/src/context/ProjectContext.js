import React, { useEffect, useContext, useState } from "react";
import ProjectData from "../data/ProjectData.json";
import EmployeeData from "../data/EmployeeData.json";
import ClientData from "../data/ClientData.json";
export const ProjectContext = React.createContext(
  ProjectData,
  EmployeeData,
  ClientData
);

const ProjectContextProvider = ({ children }) => {
  const [projects, setProjects] = useState(ProjectData);
  const [clients, setClients] = useState(ClientData);
  const [employees, setEmployees] = useState(EmployeeData);

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
