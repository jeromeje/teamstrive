
// import { useState } from "react";
// import Sidebar from "./components/Sidebar";
// import Header from "./components/Header";
// import { users as initialUsers } from "./data";
// import { Plus, X } from "lucide-react";

// const Dashboard = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   const toggleTheme = () => setDarkMode(!darkMode);
//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
//   const handleLogout = () => localStorage.removeItem("isAuthenticated");

//   const [users, setUsers] = useState(initialUsers);
//   const [showModal, setShowModal] = useState(false);
//   const [newUser, setNewUser] = useState({
//     id: "",
//     name: "",
//     experience: "",
//     techstack: "",
//     status: "",
//     projects: "",
//     phone: "",
//   });

//   const handleChange = (e) => {
//     setNewUser({ ...newUser, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = () => {
//     if (newUser.id && newUser.name) {
//       setUsers([
//         ...users,
//         { 
//           ...newUser, 
//           techstack: newUser.techstack.split(","),
//           projects: newUser.projects.split(",")
//         }
//       ]);
//       setShowModal(false);
//       setNewUser({ id: "", name: "", experience: "", techstack: "", status: "", projects: "", phone: "" });
//     }
//   };

//   return (
//     <div className={`flex ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-50'}`}>
//       {sidebarOpen && <Sidebar darkMode={darkMode} handleLogout={handleLogout} />}
//       <div className={`flex-1 transition-all ${sidebarOpen ? 'ml-64' : ''}`}>
//         <Header darkMode={darkMode} toggleSidebar={toggleSidebar} toggleTheme={toggleTheme} />
//         <main className="p-6">
//           <div className="container mt-4">
//             <div className="d-flex justify-content-between align-items-center mb-4">
//               <h3>User Information</h3>
//               <button className="btn btn-primary d-flex align-items-center" onClick={() => setShowModal(true)}>
//                 <Plus size={18} className="me-2" /> Add User
//               </button>
//             </div>

//             <table className="table table-striped mt-3">
//               <thead>
//                 <tr>
//                   <th>User ID</th>
//                   <th>Name</th>
//                   <th>Experience</th>
//                   <th>Tech Stack</th>
//                   <th>Status</th>
//                   <th>Projects</th>
//                   <th>Phone</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {users.map((user) => (
//                   <tr key={user.id}>
//                     <td>{user.id}</td>
//                     <td>{user.name}</td>
//                     <td>{user.experience}</td>
//                     <td>{user.techstack.join(", ")}</td>
//                     <td>{user.status || "Available"}</td>
//                     <td>{user.projects.length > 0 ? user.projects.join(", ") : "None"}</td>
//                     <td>{user.phone}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>

//             {/* User Information Modal */}
//             {showModal && (
//               <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//                 <div className="modal-content bg-white p-4 rounded shadow-lg w-4/5 max-w-md">
//                   <div className="modal-header flex justify-between items-center mb-4">
//                     <h5 className="text-lg font-semibold">Create New User</h5>
//                     <X size={18} onClick={() => setShowModal(false)} style={{ cursor: "pointer" }} />
//                   </div>
//                   <div className="modal-body">
//                     <input
//                       type="text"
//                       name="id"
//                       placeholder="User ID"
//                       className="form-control mb-2 w-full border p-2 rounded"
//                       value={newUser.id}
//                       onChange={handleChange}
//                     />
//                     <input
//                       type="text"
//                       name="name"
//                       placeholder="Name"
//                       className="form-control mb-2 w-full border p-2 rounded"
//                       value={newUser.name}
//                       onChange={handleChange}
//                     />
//                     <input
//                       type="text"
//                       name="experience"
//                       placeholder="Experience"
//                       className="form-control mb-2 w-full border p-2 rounded"
//                       value={newUser.experience}
//                       onChange={handleChange}
//                     />
//                     <input
//                       type="text"
//                       name="techstack"
//                       placeholder="Tech Stack (comma-separated)"
//                       className="form-control mb-2 w-full border p-2 rounded"
//                       value={newUser.techstack}
//                       onChange={handleChange}
//                     />
//                     <input
//                       type="text"
//                       name="projects"
//                       placeholder="Projects (comma-separated)"
//                       className="form-control mb-2 w-full border p-2 rounded"
//                       value={newUser.projects}
//                       onChange={handleChange}
//                     />
//                     <input
//                       type="text"
//                       name="phone"
//                       placeholder="Phone"
//                       className="form-control mb-2 w-full border p-2 rounded"
//                       value={newUser.phone}
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <div className="modal-footer text-right">
//                     <button className="btn btn-secondary me-2" onClick={() => setShowModal(false)}>Cancel</button>
//                     <button className="btn btn-primary px-4 py-2" onClick={handleSubmit}>Create User</button>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;





import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { users as initialUsers } from "./data";
import { Plus, X } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleTheme = () => setDarkMode(!darkMode);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  // State for Users and Modal
  const [users, setUsers] = useState(initialUsers);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newUser, setNewUser] = useState({
    id: "",
    name: "",
    experience: "",
    techstack: "",
    status: "",
    projects: "",
    phone: "",
  });

  // State for Editing Users
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Handle changes for add/edit form
  const handleChange = (e, userSetter) => {
    userSetter(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Submit Add User Form
  const handleAddSubmit = () => {
    if (newUser.id && newUser.name) {
      setUsers([
        ...users,
        { 
          ...newUser, 
          techstack: newUser.techstack.split(","),
          projects: newUser.projects.split(",")
        }
      ]);
      setShowAddModal(false);
      setNewUser({ id: "", name: "", experience: "", techstack: "", status: "", projects: "", phone: "" });
    }
  };

  // Open Edit Modal and pre-populate fields
  const handleEdit = (user) => {
    setCurrentUser({ ...user, techstack: user.techstack.join(","), projects: user.projects.join(",") });
    setShowEditModal(true);
  };

  // Submit Edit User Form
  const handleEditSubmit = () => {
    if (currentUser && currentUser.id && currentUser.name) {
      setUsers(users.map(user => 
        user.id === currentUser.id 
          ? { 
              ...currentUser, 
              techstack: currentUser.techstack.split(","),
              projects: currentUser.projects.split(",")
            }
          : user
      ));
      setShowEditModal(false);
      setCurrentUser(null);
    }
  };

  return (
    <div className={`flex ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-50'}`}>
      {sidebarOpen && <Sidebar darkMode={darkMode} handleLogout={handleLogout} />}
      <div className={`flex-1 transition-all ${sidebarOpen ? 'ml-64' : ''}`}>
        <Header darkMode={darkMode} toggleSidebar={toggleSidebar} toggleTheme={toggleTheme} />
        <main className="p-6">
          <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3>User Information</h3>
              <button className="btn btn-primary d-flex align-items-center" onClick={() => setShowAddModal(true)}>
                <Plus size={18} className="me-2" /> Add User
              </button>
            </div>

            <table className="table table-striped mt-3">
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Name</th>
                  <th>Experience</th>
                  <th>Tech Stack</th>
                  <th>Status</th>
                  <th>Projects</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.experience}</td>
                    <td>{user.techstack.join(", ")}</td>
                    <td>{user.status || "Available"}</td>
                    <td>{user.projects.length > 0 ? user.projects.join(", ") : "None"}</td>
                    <td>{user.phone}</td>
                    <td>
                      <button 
                        className="btn btn-sm btn-secondary" 
                        onClick={() => handleEdit(user)}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Add User Modal */}
            {showAddModal && (
              <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="modal-content bg-white p-4 rounded shadow-lg w-4/5 max-w-md">
                  <div className="modal-header flex justify-between items-center mb-4">
                    <h5 className="text-lg font-semibold">Create New User</h5>
                    <X size={18} onClick={() => setShowAddModal(false)} style={{ cursor: "pointer" }} />
                  </div>
                  <div className="modal-body">
                    <input
                      type="text"
                      name="id"
                      placeholder="User ID"
                      className="form-control mb-2 w-full border p-2 rounded"
                      value={newUser.id}
                      onChange={(e) => handleChange(e, setNewUser)}
                    />
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="form-control mb-2 w-full border p-2 rounded"
                      value={newUser.name}
                      onChange={(e) => handleChange(e, setNewUser)}
                    />
                    <input
                      type="text"
                      name="experience"
                      placeholder="Experience"
                      className="form-control mb-2 w-full border p-2 rounded"
                      value={newUser.experience}
                      onChange={(e) => handleChange(e, setNewUser)}
                    />
                    <input
                      type="text"
                      name="techstack"
                      placeholder="Tech Stack (comma-separated)"
                      className="form-control mb-2 w-full border p-2 rounded"
                      value={newUser.techstack}
                      onChange={(e) => handleChange(e, setNewUser)}
                    />
                    <input
                      type="text"
                      name="projects"
                      placeholder="Projects (comma-separated)"
                      className="form-control mb-2 w-full border p-2 rounded"
                      value={newUser.projects}
                      onChange={(e) => handleChange(e, setNewUser)}
                    />
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone"
                      className="form-control mb-2 w-full border p-2 rounded"
                      value={newUser.phone}
                      onChange={(e) => handleChange(e, setNewUser)}
                    />
                  </div>
                  <div className="modal-footer text-right">
                    <button className="btn btn-secondary me-2" onClick={() => setShowAddModal(false)}>Cancel</button>
                    <button className="btn btn-primary px-4 py-2" onClick={handleAddSubmit}>Create User</button>
                  </div>
                </div>
              </div>
            )}

            {/* Edit User Modal */}
            {showEditModal && currentUser && (
              <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="modal-content bg-white p-4 rounded shadow-lg w-4/5 max-w-md">
                  <div className="modal-header flex justify-between items-center mb-4">
                    <h5 className="text-lg font-semibold">Edit User</h5>
                    <X size={18} onClick={() => setShowEditModal(false)} style={{ cursor: "pointer" }} />
                  </div>
                  <div className="modal-body">
                    <input
                      type="text"
                      name="id"
                      placeholder="User ID"
                      className="form-control mb-2 w-full border p-2 rounded"
                      value={currentUser.id}
                      onChange={(e) => handleChange(e, setCurrentUser)}
                    />
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="form-control mb-2 w-full border p-2 rounded"
                      value={currentUser.name}
                      onChange={(e) => handleChange(e, setCurrentUser)}
                    />
                    <input
                      type="text"
                      name="experience"
                      placeholder="Experience"
                      className="form-control mb-2 w-full border p-2 rounded"
                      value={currentUser.experience}
                      onChange={(e) => handleChange(e, setCurrentUser)}
                    />
                    <input
                      type="text"
                      name="techstack"
                      placeholder="Tech Stack (comma-separated)"
                      className="form-control mb-2 w-full border p-2 rounded"
                      value={currentUser.techstack}
                      onChange={(e) => handleChange(e, setCurrentUser)}
                    />
                    <input
                      type="text"
                      name="projects"
                      placeholder="Projects (comma-separated)"
                      className="form-control mb-2 w-full border p-2 rounded"
                      value={currentUser.projects}
                      onChange={(e) => handleChange(e, setCurrentUser)}
                    />
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone"
                      className="form-control mb-2 w-full border p-2 rounded"
                      value={currentUser.phone}
                      onChange={(e) => handleChange(e, setCurrentUser)}
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
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

