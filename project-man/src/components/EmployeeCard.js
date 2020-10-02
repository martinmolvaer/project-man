import React from "react";

const EmployeeCard = ({ employee }) => {
  console.log(employee);
  return (
    <div>
      <li style={{ listStyleType: "square" }}>{employee.first_name}</li>
    </div>
  );
};

export default EmployeeCard;
