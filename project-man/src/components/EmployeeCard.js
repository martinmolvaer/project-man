import React from "react";

const EmployeeCard = ({ employee }) => {

  return (
    <div>
      <li style={{ listStyleType: "square" }}>{employee.first_name}</li>
    </div>
  );
};

export default EmployeeCard;
