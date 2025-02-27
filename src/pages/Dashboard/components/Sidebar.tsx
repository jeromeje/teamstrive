import { Link } from "react-router-dom";
import { LayoutDashboard, UserCog, Settings, LogOut } from "lucide-react";

const Sidebar = ({ darkMode, handleLogout }) => {
    
  return (
    <div className={`w-64 h-full fixed top-0 left-0 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} transition-all`}>
      <div className="p-4 font-semibold text-xl">Project Hub</div>
      <nav className="space-y-4">
        <Link to="/dashboard" className="flex items-center p-3 hover:bg-gray-200">
          <LayoutDashboard className="h-5 w-5 mr-2" /> Dashboard
        </Link>
        <Link to="/profile" className="flex items-center p-3 hover:bg-gray-200">
          <UserCog className="h-5 w-5 mr-2" /> Profile
        </Link>
        <Link to="/settings" className="flex items-center p-3 hover:bg-gray-200">
          <Settings className="h-5 w-5 mr-2" /> Settings
        </Link>
        <button onClick={handleLogout} className="flex items-center p-3 hover:bg-gray-200 w-full text-left">
          <LogOut className="h-5 w-5 mr-2" /> Logout
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;

// import { Link } from "react-router-dom";
// import { LayoutDashboard, UserCog, Settings, LogOut } from "lucide-react";

// const Sidebar = ({ darkMode, handleLogout }) => {
//   return (
//     <div className={`w-64 h-full fixed top-0 left-0 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} transition-all`}>
//       <div className="p-4 font-semibold text-xl">Project Hub</div>
//       <nav className="space-y-4">
//         <Link to="/dashboard" className="flex items-center p-3 hover:bg-gray-200">
//           <LayoutDashboard className="h-5 w-5 mr-2" /> Dashboard
//         </Link>
//         <Link to="/profile" className="flex items-center p-3 hover:bg-gray-200">
//           <UserCog className="h-5 w-5 mr-2" /> Profile
//         </Link>
//         <Link to="/settings" className="flex items-center p-3 hover:bg-gray-200">
//           <Settings className="h-5 w-5 mr-2" /> Settings
//         </Link>
//         <button onClick={handleLogout} className="flex items-center p-3 hover:bg-gray-200 w-full text-left">
//           <LogOut className="h-5 w-5 mr-2" /> Logout
//         </button>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;
