
// import { useState } from "react";
// import { Plus } from "lucide-react";
// import { users as allUsers, projects as initialProjects } from "../data";
// import ProjectTable from "./ProjectTable";
// import ProjectModal from "./ProjectModel"; // Make sure this is corrected to ProjectModal

// const Project = () => {
//   const [projects, setProjects] = useState(initialProjects); // Store project array state
//   const [showModal, setShowModal] = useState(false);         // Handle modal visibility
//   const [darkMode, setDarkMode] = useState(false);           // Dark mode state
//   const [sidebarVisible, setSidebarVisible] = useState(true); // Sidebar visibility state

//   // Toggle Sidebar
//   const toggleSidebar = () => setSidebarVisible(!sidebarVisible);

//   // Toggle Theme between Light and Dark
//   const toggleTheme = () => setDarkMode(!darkMode);

//   // Filter available users
//   const availableUsers = allUsers.filter(user => !user.status);

//   // Function to add new project
//   const addProject = (newProject) => {
//     setProjects([...projects, newProject]);  // Add new project to the project array
//   };

//   // Handle Logout (dummy function for now)
//   const handleLogout = () => {
//     console.log("Logout");
//   };

//   return (
//     <div className={`flex ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
//        <div className="container mt-4">
//           <div className="d-flex justify-content-between align-items-center mb-4">
//             <h3>Project Information</h3>
//             <button className="btn btn-primary d-flex align-items-center" onClick={() => setShowModal(true)}>
//               <Plus size={18} className="me-2" /> Add Project
//             </button>
//           </div>

//           {/* Project Table */}
//           <ProjectTable projects={projects} />

//           {/* Modal for Adding New Project */}
//           <ProjectModal
//             showModal={showModal}
//             setShowModal={setShowModal}
//             addProject={addProject}
//             availableUsers={availableUsers}
//           />
//         </div>
      
//     </div>
//   );
// };

// export default Project;
 

import { useState } from "react";
import { Plus, X } from "lucide-react";
import { users as allUsers, projects as initialProjects } from "../data";
import ProjectTable from "./ProjectTable";
import ProjectModal from "./ProjectModel";

const Project = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [showModal, setShowModal] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(true);

  // Toggle functions
  const toggleSidebar = () => setSidebarVisible(!sidebarVisible);
  const toggleTheme = () => setDarkMode(!darkMode);

  // Filter available users for project creation
  const availableUsers = allUsers.filter(user => !user.status);

  // Add new project handler
  const addProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  // --- Edit Modal State and Handlers ---
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const handleEdit = (project) => {
    // Prepopulate the edit form: convert members array to a comma‑separated string
    setCurrentProject({ ...project, members: project.members.join(", ") });
    setShowEditModal(true);
  };

  const handleEditChange = (e) => {
    setCurrentProject({ ...currentProject, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = () => {
    if (currentProject && currentProject.id && currentProject.name) {
      const updatedProjects = projects.map((proj) =>
        proj.id === currentProject.id
          ? { ...currentProject, members: currentProject.members.split(",").map(m => m.trim()) }
          : proj
      );
      setProjects(updatedProjects);
      setShowEditModal(false);
      setCurrentProject(null);
    }
  };

  return (
    <div className={`flex ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      {/* Sidebar and Header would go here if needed */}
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3>Project Information</h3>
          <button className="btn btn-primary d-flex align-items-center" onClick={() => setShowModal(true)}>
            <Plus size={18} className="me-2" /> Add Project
          </button>
        </div>

        <ProjectTable projects={projects} onEdit={handleEdit} />

        {/* Add Project Modal */}
        <ProjectModal
          showModal={showModal}
          setShowModal={setShowModal}
          addProject={addProject}
          availableUsers={availableUsers}
        />

        {/* Edit Project Modal */}
        {showEditModal && currentProject && (
          <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="modal-content bg-white p-4 rounded shadow-lg w-full max-w-md mx-4">
              <div className="modal-header flex justify-between items-center mb-4">
                <h5 className="text-lg font-semibold">Edit Project</h5>
                <X size={18} onClick={() => setShowEditModal(false)} style={{ cursor: "pointer" }} />
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  name="id"
                  placeholder="Project ID"
                  className="form-control mb-2 w-full border p-2 rounded"
                  value={currentProject.id}
                  disabled
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Project Name"
                  className="form-control mb-2 w-full border p-2 rounded"
                  value={currentProject.name}
                  onChange={handleEditChange}
                />
                <input
                  type="text"
                  name="members"
                  placeholder="Members (comma-separated)"
                  className="form-control mb-2 w-full border p-2 rounded"
                  value={currentProject.members}
                  onChange={handleEditChange}
                />
                <input
                  type="date"
                  name="deadline"
                  className="form-control mb-2 w-full border p-2 rounded"
                  value={currentProject.deadline}
                  onChange={handleEditChange}
                />
              </div>
              <div className="modal-footer text-right">
                <button className="btn btn-secondary me-2" onClick={() => setShowEditModal(false)}>Cancel</button>
                <button className="btn btn-primary px-4 py-2" onClick={handleEditSubmit}>Save Changes</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
 