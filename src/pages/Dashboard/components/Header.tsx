

// // Header.js
// import { Menu, Search, User, Moon, Sun } from "lucide-react";

// const Header = ({ darkMode, toggleSidebar, toggleTheme }) => {
//   return (
//     <header className={`flex justify-between items-center p-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-md`}>
//       <button onClick={toggleSidebar} className="p-2">
//         <Menu className={`h-6 w-6 ${darkMode ? 'text-white' : 'text-gray-800'}`} />
//       </button>
//       <div className="flex items-center space-x-4">
//         <input type="text" placeholder="Search..." className="border p-2 rounded" />
//         <button className="p-2">
//           <Search className={`h-5 w-5 ${darkMode ? 'text-white' : 'text-gray-800'}`} />
//         </button>
//         <button onClick={toggleTheme} className="p-2 flex items-center space-x-2">
//           {darkMode ? (
//             <>
//               <Sun className={`h-5 w-5 ${darkMode ? 'text-white' : 'text-gray-800'}`} />
          
//             </>
//           ) : (
//             <>
//               <Moon className={`h-5 w-5 ${darkMode ? 'text-white' : 'text-gray-800'}`} />
              
//             </>
//           )}
//         </button>
//         <button className="p-2">
//           <User className={`h-5 w-5 ${darkMode ? 'text-white' : 'text-gray-800'}`} />
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;

import { Menu, Search, User, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Header = ({ darkMode, toggleSidebar, toggleTheme }) => {
  const [showUserCard, setShowUserCard] = useState(false);
  const navigate = useNavigate();

  const toggleUserCard = () => {
    setShowUserCard(!showUserCard);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <header className={`relative flex justify-between items-center p-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-md`}>
      <button onClick={toggleSidebar} className="p-2">
        <Menu className={`h-6 w-6 ${darkMode ? 'text-white' : 'text-gray-800'}`} />
      </button>
      <div className="flex items-center space-x-4">
        <input type="text" placeholder="Search..." className="border p-2 rounded" />
        <button className="p-2">
          <Search className={`h-5 w-5 ${darkMode ? 'text-white' : 'text-gray-800'}`} />
        </button>
        <button onClick={toggleTheme} className="p-2 flex items-center space-x-2">
          {darkMode ? (
            <Sun className={`h-5 w-5 ${darkMode ? 'text-white' : 'text-gray-800'}`} />
          ) : (
            <Moon className={`h-5 w-5 ${darkMode ? 'text-white' : 'text-gray-800'}`} />
          )}
        </button>
        <button onClick={toggleUserCard} className="p-2 relative">
          <User className={`h-5 w-5 ${darkMode ? 'text-white' : 'text-gray-800'}`} />
          {showUserCard && (
            <div className={`absolute right-0 mt-2 w-48 border rounded shadow-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
              <div className="p-4">
                <h5 className="font-semibold">User Name</h5>
                <button onClick={handleLogout} className="mt-2 w-full btn btn-danger">
                  Logout
                </button>
              </div>
            </div>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
