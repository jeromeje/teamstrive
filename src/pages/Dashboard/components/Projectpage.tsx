import React, { useState } from "react";
import { X } from "lucide-react";
import ProjectTable from "./ProjectTable";
import { projects as initialProjects } from "../data"; // Your initial data

const ProjectPage = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  // When the user clicks "Edit" in the table row:
  const handleEdit = (project) => {
    // Pre-populate the modal with the project's details.
    // Convert members array to a comma-separated string for editing.
    setCurrentProject({ 
      ...project, 
      members: project.members.join(", ") 
    });
    setShowEditModal(true);
  };

  // Handle changes in the edit modal fields.
  const handleEditChange = (e) => {
    setCurrentProject({
      ...currentProject,
      [e.target.name]: e.target.value,
    });
  };

  // When the user saves the edited project.
  const handleEditSubmit = () => {
    if (currentProject && currentProject.id && currentProject.name) {
      const updatedProjects = projects.map((proj) =>
        proj.id === currentProject.id
          ? {
              ...currentProject,
              // Split the members back into an array.
              members: currentProject.members.split(",").map((m) => m.trim()),
            }
          : proj
      );
      setProjects(updatedProjects);
      setShowEditModal(false);
      setCurrentProject(null);
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Project Information</h3>
      <ProjectTable projects={projects} onEdit={handleEdit} />

      {/* Edit Project Modal */}
      {showEditModal && currentProject && (
        <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="modal-content bg-white p-4 rounded shadow-lg w-4/5 max-w-md">
            <div className="modal-header flex justify-between items-center mb-4">
              <h5 className="text-lg font-semibold">Edit Project</h5>
              <X
                size={18}
                onClick={() => setShowEditModal(false)}
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="modal-body">
              <input
                type="text"
                name="id"
                value={currentProject.id}
                disabled
                className="form-control mb-2 w-full border p-2 rounded"
              />
              <input
                type="text"
                name="name"
                placeholder="Project Name"
                value={currentProject.name}
                onChange={handleEditChange}
                className="form-control mb-2 w-full border p-2 rounded"
              />
              <input
                type="text"
                name="members"
                placeholder="Members (comma-separated)"
                value={currentProject.members}
                onChange={handleEditChange}
                className="form-control mb-2 w-full border p-2 rounded"
              />
              <input
                type="date"
                name="deadline"
                value={currentProject.deadline}
                onChange={handleEditChange}
                className="form-control mb-2 w-full border p-2 rounded"
              />
            </div>
            <div className="modal-footer text-right">
              <button
                className="btn btn-secondary me-2"
                onClick={() => setShowEditModal(false)}
              >
                Cancel
              </button>
              <button
                className="btn btn-primary px-4 py-2"
                onClick={handleEditSubmit}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
