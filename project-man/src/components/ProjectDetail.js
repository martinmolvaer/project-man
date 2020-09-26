import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";

import { ProjectContext } from "../context/ProjectContext";

const ProjectDetail = () => {
  const { projects } = useContext(ProjectContext);
  let { id } = useParams();

  const project = projects.filter((detail) => detail.id === Number(id))[0];

  console.log(project);
  return (
    <div>
      {project.name} {project.status}
    </div>
  );
};

export default ProjectDetail;
