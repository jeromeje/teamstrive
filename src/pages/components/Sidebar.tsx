// import React from "react";
// import { ListGroup } from "react-bootstrap";
// import { LayoutDashboard, UserCog, Settings, LogOut, Menu } from "lucide-react";
// import { Button } from "react-bootstrap";

// const links = [
//   {
//     label: "Dashboard",
//     href: "/dashboard",
//     icon: <LayoutDashboard className="h-5 w-5 flex-shrink-0" />,
//   },
//   {
//     label: "Profile",
//     href: "/UserDetails",
//     icon: <UserCog className="h-5 w-5 flex-shrink-0" />,
//   },
//   {
//     label: "Settings",
//     href: "/settings",
//     icon: <Settings className="h-5 w-5 flex-shrink-0" />,
//   },
// ];

// const Sidebar = ({ sidebarOpen, darkMode, handleLogout }) => (
//   sidebarOpen && (
//     <div className={`w-64 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} h-full fixed top-0 left-0 transition-all`}>
//       <div className="p-4">
//         <div className="font-semibold text-xl mb-8">Project Hub</div>
//         <ListGroup variant="flush">
//           {links.map((link, idx) => (
//             <ListGroup.Item
//               key={idx}
//               action
//               href={link.href}
//               className={`flex items-center space-x-2 ${darkMode ? 'text-white hover:bg-gray-700' : 'text-neutral-800 hover:bg-gray-200'}`}
//             >
//               {link.icon}
//               <span className={darkMode ? 'text-white' : 'text-neutral-800'}>
//                 {link.label}
//               </span>
//             </ListGroup.Item>
//           ))}
//           <ListGroup.Item
//             action
//             onClick={handleLogout}
//             className={`flex items-center space-x-2 ${darkMode ? 'text-white hover:bg-gray-700' : 'text-neutral-800 hover:bg-gray-200'}`}
//           >
//             <LogOut className={`h-5 w-5 ${darkMode ? 'text-white' : 'text-neutral-800'}`} />
//             <span className={darkMode ? 'text-white' : 'text-neutral-800'}>Logout</span>
//           </ListGroup.Item>
//         </ListGroup>
//       </div>
//     </div>
//   )
// );

// export default Sidebar;


import React from "react";
import { ListGroup } from "react-bootstrap";
import { LayoutDashboard, UserCog, Settings, LogOut } from "lucide-react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const links = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard className="h-5 w-5 flex-shrink-0" />,
  },
  {
    label: "Profile",
    href: "/UserDetails",
    icon: <UserCog className="h-5 w-5 flex-shrink-0" />,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: <Settings className="h-5 w-5 flex-shrink-0" />,
  },
];

const Sidebar = ({ sidebarOpen, darkMode, handleLogout }) => (
  sidebarOpen && (
    <div className={`w-64 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} h-full fixed top-0 left-0 transition-all`}>
      <div className="p-4">
        <div className="font-semibold text-xl mb-8">Project Hub</div>
        <ListGroup variant="flush">
          {links.map((link, idx) => (
            <ListGroup.Item
              key={idx}
              action
              as={Link}  // Use Link for navigation
              to={link.href} // Specify the route
              className={`flex items-center space-x-2 ${darkMode ? 'text-white hover:bg-gray-700' : 'text-neutral-800 hover:bg-gray-200'}`}
            >
              {link.icon}
              <span className={darkMode ? 'text-white' : 'text-neutral-800'}>
                {link.label}
              </span>
            </ListGroup.Item>
          ))}
          <ListGroup.Item
            action
            onClick={handleLogout}
            className={`flex items-center space-x-2 ${darkMode ? 'text-white hover:bg-gray-700' : 'text-neutral-800 hover:bg-gray-200'}`}
          >
            <LogOut className={`h-5 w-5 ${darkMode ? 'text-white' : 'text-neutral-800'}`} />
            <span className={darkMode ? 'text-white' : 'text-neutral-800'}>Logout</span>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  )
);

export default Sidebar;
