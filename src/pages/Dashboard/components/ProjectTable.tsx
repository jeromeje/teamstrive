// const ProjectTable = ({ projects }) => {
//     return (
//       <table className="table table-striped mt-3">
//         <thead>
//           <tr>
//             <th>Project ID</th>
//             <th>Name</th>
//             <th>Members</th>
//             <th>Deadline</th>
//           </tr>
//         </thead>
//         <tbody>
//           {projects.map((project) => (
//             <tr key={project.id}>
//               <td>{project.id}</td>
//               <td>{project.name}</td>
//               <td>{project.members.join(", ")}</td>
//               <td>{project.deadline}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   };
  
//   export default ProjectTable;
  


import React from "react";

const ProjectTable = ({ projects, onEdit }) => {
  return (
    <table className="table table-striped mt-3">
      <thead>
        <tr>
          <th>Project ID</th>
          <th>Name</th>
          <th>Members</th>
          <th>Deadline</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project) => (
          <tr key={project.id}>
            <td>{project.id}</td>
            <td>{project.name}</td>
            <td>{project.members.join(", ")}</td>
            <td>{project.deadline}</td>
            <td>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => onEdit(project)}
              >
                Edit
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProjectTable;
