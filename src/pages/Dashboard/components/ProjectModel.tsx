// import { useState } from "react";
// import { X } from "lucide-react";

// const ProjectModal = ({ showModal, setShowModal, addProject, availableUsers }) => {
//   const [newProject, setNewProject] = useState({ id: "", name: "", members: [], deadline: "" });

//   const handleChange = (e) => {
//     setNewProject({ ...newProject, [e.target.name]: e.target.value });
//   };

//   const handleSelectUser = (userId) => {
//     setNewProject({ ...newProject, members: [...newProject.members, userId] });
//   };

//   const handleSubmit = () => {
//     if (newProject.id && newProject.name) {
//       addProject(newProject); // Add new project
//       setShowModal(false); // Close modal
//       setNewProject({ id: "", name: "", members: [], deadline: "" }); // Reset form
//     }
//   };

//   if (!showModal) return null; // Don't render if the modal is hidden

//   return (
//     <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//       <div className="modal-content bg-white p-4 rounded shadow-lg w-full max-w-md mx-4">
//         <div className="modal-header flex justify-between items-center mb-4">
//           <h5 className="text-lg font-semibold">Create New Project</h5>
//           <X size={18} onClick={() => setShowModal(false)} style={{ cursor: "pointer" }} />
//         </div>
//         <div className="modal-body">
//           <input
//             type="text"
//             name="id"
//             placeholder="Project ID"
//             className="form-control mb-2 w-full border p-2 rounded"
//             value={newProject.id}
//             onChange={handleChange}
//           />
//           <input
//             type="text"
//             name="name"
//             placeholder="Project Name"
//             className="form-control mb-2 w-full border p-2 rounded"
//             value={newProject.name}
//             onChange={handleChange}
//           />
//           <select onChange={(e) => handleSelectUser(e.target.value)} className="form-control mb-2 w-full border p-2 rounded">
//             <option>Select Members</option>
//             {availableUsers.map((user) => (
//               <option key={user.id} value={user.id}>{user.name}</option>
//             ))}
//           </select>
//           <input
//             type="date"
//             name="deadline"
//             className="form-control mb-2 w-full border p-2 rounded"
//             value={newProject.deadline}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="modal-footer text-right">
//           <button className="btn btn-primary px-4 py-2" onClick={handleSubmit}>
//             Create Project
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectModal;


import { useState } from "react";
import { X } from "lucide-react";

const ProjectModal = ({ showModal, setShowModal, addProject, availableUsers }) => {
  const [newProject, setNewProject] = useState({ id: "", name: "", members: [], deadline: "" });

  const handleChange = (e) => {
    setNewProject({ ...newProject, [e.target.name]: e.target.value });
  };

  const handleSelectUser = (userId) => {
    setNewProject({ ...newProject, members: [...newProject.members, userId] });
  };

  const handleSubmit = () => {
    if (newProject.id && newProject.name) {
      addProject(newProject);
      setShowModal(false);
      setNewProject({ id: "", name: "", members: [], deadline: "" });
    }
  };

  if (!showModal) return null;

  return (
    <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="modal-content bg-white p-4 rounded shadow-lg w-full max-w-md mx-4">
        <div className="modal-header flex justify-between items-center mb-4">
          <h5 className="text-lg font-semibold">Create New Project</h5>
          <X size={18} onClick={() => setShowModal(false)} style={{ cursor: "pointer" }} />
        </div>
        <div className="modal-body">
          <input
            type="text"
            name="id"
            placeholder="Project ID"
            className="form-control mb-2 w-full border p-2 rounded"
            value={newProject.id}
            onChange={handleChange}
          />
          <input
            type="text"
            name="name"
            placeholder="Project Name"
            className="form-control mb-2 w-full border p-2 rounded"
            value={newProject.name}
            onChange={handleChange}
          />
          <select
            onChange={(e) => handleSelectUser(e.target.value)}
            className="form-control mb-2 w-full border p-2 rounded"
          >
            <option>Select Members</option>
            {availableUsers.map((user) => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))}
          </select>
          <input
            type="date"
            name="deadline"
            className="form-control mb-2 w-full border p-2 rounded"
            value={newProject.deadline}
            onChange={handleChange}
          />
        </div>
        <div className="modal-footer text-right">
          <button className="btn btn-primary px-4 py-2" onClick={handleSubmit}>
            Create Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
