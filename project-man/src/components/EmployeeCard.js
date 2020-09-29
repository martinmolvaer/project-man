import React, { useContext } from "react";

import { ProjectContext } from "../context/ProjectContext";

const EmployeeCard = ({ employee, project }) => {
  const { projects } = useContext(ProjectContext);
  console.log(employee);
  return (
    <div>
      {/* <li style={{ listStyleType: "square" }}>{employee.first_name}</li> */}
    </div>
  );
};

export default EmployeeCard;
