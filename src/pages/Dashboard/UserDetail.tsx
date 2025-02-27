
// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { Button, ListGroup, Form } from "react-bootstrap";
// // import { LayoutDashboard, Plus, UserCog, Settings, LogOut, Search, User, Menu } from "lucide-react";
// // import Sidebar from "../components/Sidebar";
// // import Header from "../components/Header";
// // import KanbanColumn from "../components/KambanColumn";

// // const ProductPage = () => {
// //   const [userDetails, setUserDetails] = useState({
// //     name: '',
// //     email: '',
// //     image: '',
// //     projects: '',
// //   });

// //   const [isEditing, setIsEditing] = useState(false);
// //   const [file, setFile] = useState(null);

// //   useEffect(() => {
// //     // Load the existing user details if any (e.g., from localStorage or an API)
// //     const savedDetails = JSON.parse(localStorage.getItem('userDetails'));
// //     if (savedDetails) {
// //       setUserDetails(savedDetails);
// //     }
// //   }, []);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setUserDetails((prevState) => ({
// //       ...prevState,
// //       [name]: value,
// //     }));
// //   };

// //   const handleImageChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       setFile(file);
// //     }
// //   };

// //   const handleSave = () => {
// //     // Optionally save the user details to an API or localStorage
// //     localStorage.setItem('userDetails', JSON.stringify(userDetails));
// //     setIsEditing(false);
// //   };

// //   const handleEdit = () => {
// //     setIsEditing(true);
// //   };

// //   const handleCancel = () => {
// //     setIsEditing(false);
// //   };

// //   return (
// //     <div>
// //       {/* <Header /> Include the Header Component */}
// //       {/* <Header      />
// //       <Sidebar /> */}
// //       <div className="container mx-auto p-6 mt-6">
// //         <h1 className="text-2xl font-bold mb-4">{isEditing ? 'Edit Your Details' : 'Your Profile'}</h1>

// //         <div className="flex items-center space-x-4 mb-4">
// //           {userDetails.image ? (
// //             <img
// //               src={URL.createObjectURL(file) || userDetails.image}
// //               alt="User"
// //               className="w-24 h-24 rounded-full object-cover"
// //             />
// //           ) : (
// //             <div className="w-24 h-24 rounded-full bg-gray-300"></div>
// //           )}
// //           {isEditing && (
// //             <div>
// //               <input
// //                 type="file"
// //                 onChange={handleImageChange}
// //                 className="hidden"
// //                 id="fileInput"
// //               />
// //               <label htmlFor="fileInput" className="cursor-pointer text-blue-500">
// //                 Change Image
// //               </label>
// //             </div>
// //           )}
// //         </div>

// //         <div className="space-y-4">
// //           <div>
// //             <label className="block text-sm font-medium">Name</label>
// //             <input
// //               type="text"
// //               name="name"
// //               value={userDetails.name}
// //               onChange={handleChange}
// //               className="mt-1 p-2 border rounded w-full"
// //               disabled={!isEditing}
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-sm font-medium">Email</label>
// //             <input
// //               type="email"
// //               name="email"
// //               value={userDetails.email}
// //               onChange={handleChange}
// //               className="mt-1 p-2 border rounded w-full"
// //               disabled={!isEditing}
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-sm font-medium">Previous Project Involvements</label>
// //             <textarea
// //               name="projects"
// //               value={userDetails.projects}
// //               onChange={handleChange}
// //               className="mt-1 p-2 border rounded w-full"
// //               disabled={!isEditing}
// //               rows="4"
// //             />
// //           </div>
// //         </div>

// //         <div className="flex items-center space-x-4 mt-6">
// //           {isEditing ? (
// //             <>
// //               <button
// //                 onClick={handleSave}
// //                 className="px-4 py-2 bg-blue-500 text-white rounded"
// //               >
// //                 Save
// //               </button>
// //               <button
// //                 onClick={handleCancel}
// //                 className="px-4 py-2 bg-gray-400 text-white rounded"
// //               >
// //                 Cancel
// //               </button>
// //             </>
// //           ) : (
// //             <button
// //               onClick={handleEdit}
// //               className="px-4 py-2 bg-yellow-500 text-white rounded"
// //             >
// //               Edit Profile
// //             </button>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductPage;

// import React, { useState, useEffect } from "react";
// import Sidebar from "../components/Sidebar";
// import Header from "../components/Header";

// const ProductPage = () => {
//   const [userDetails, setUserDetails] = useState({
//     name: "",
//     email: "",
//     image: "",
//     projects: "",
//   });

//   const [isEditing, setIsEditing] = useState(false);
//   const [file, setFile] = useState(null);
//   const [sidebarOpen, setSidebarOpen] = useState(true); // Sidebar toggle state

//   useEffect(() => {
//     const savedDetails = JSON.parse(localStorage.getItem("userDetails"));
//     if (savedDetails) {
//       setUserDetails(savedDetails);
//     }
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFile(file);
//     }
//   };

//   const handleSave = () => {
//     localStorage.setItem("userDetails", JSON.stringify(userDetails));
//     setIsEditing(false);
//   };

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleCancel = () => {
//     setIsEditing(false);
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <Sidebar sidebarOpen={sidebarOpen} />

//       {/* Main Content Area */}
//       <div className={`flex flex-col w-full transition-all ${sidebarOpen ? "ml-64" : "ml-0"}`}>
//         {/* Header */}
//         <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

//         {/* Main Content */}
//         <div className="p-6 flex-grow bg-gray-100 min-h-screen">
//           <h1 className="text-2xl font-bold mb-4">
//             {isEditing ? "Edit Your Details" : "Your Profile"}
//           </h1>

//           <div className="flex flex-col md:flex-row items-center space-x-4 mb-4">
//             {userDetails.image ? (
//               <img
//                 src={file ? URL.createObjectURL(file) : userDetails.image}
//                 alt="User"
//                 className="w-24 h-24 rounded-full object-cover"
//               />
//             ) : (
//               <div className="w-24 h-24 rounded-full bg-gray-300"></div>
//             )}

//             {isEditing && (
//               <div>
//                 <input type="file" onChange={handleImageChange} className="hidden" id="fileInput" />
//                 <label htmlFor="fileInput" className="cursor-pointer text-blue-500">
//                   Change Image
//                 </label>
//               </div>
//             )}
//           </div>

//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={userDetails.name}
//                 onChange={handleChange}
//                 className="mt-1 p-2 border rounded w-full"
//                 disabled={!isEditing}
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={userDetails.email}
//                 onChange={handleChange}
//                 className="mt-1 p-2 border rounded w-full"
//                 disabled={!isEditing}
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium">Previous Project Involvements</label>
//               <textarea
//                 name="projects"
//                 value={userDetails.projects}
//                 onChange={handleChange}
//                 className="mt-1 p-2 border rounded w-full"
//                 disabled={!isEditing}
//                 rows="4"
//               />
//             </div>
//           </div>

//           <div className="flex items-center space-x-4 mt-6">
//             {isEditing ? (
//               <>
//                 <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded">
//                   Save
//                 </button>
//                 <button onClick={handleCancel} className="px-4 py-2 bg-gray-400 text-white rounded">
//                   Cancel
//                 </button>
//               </>
//             ) : (
//               <button onClick={handleEdit} className="px-4 py-2 bg-yellow-500 text-white rounded">
//                 Edit Profile
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;
