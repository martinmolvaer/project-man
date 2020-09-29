import React, { useContext } from "react";

import { ProjectContext } from "../context/ProjectContext";

const EmployeeCard = ({ employee, project }) => {
  const { projects } = useContext(ProjectContext);

  return (
    <div>
      {project.employeeId === employee.id && (
        <li style={{ listStyleType: "square" }}>
          {employee.first_name + " " + employee.last_name}
        </li>
      )}
    </div>
  );
};

export default EmployeeCard;
