
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
// import User from "./components/DashboardContent";

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleTheme = () => setDarkMode(!darkMode);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const handleLogout = () => localStorage.removeItem("isAuthenticated");

  return (
    <div className={`flex ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-50'}`}>
      {sidebarOpen && <Sidebar darkMode={darkMode} handleLogout={handleLogout} />}
      <div className={`flex-1 transition-all ${sidebarOpen ? 'ml-64' : ''}`}>
        <Header darkMode={darkMode} toggleSidebar={toggleSidebar} toggleTheme={toggleTheme} />
        <main className="p-6">
                <h1> Settings page</h1>

            {/* provide the setting content here  */}


        </main>
      </div>
    </div>
  );
};

export default Dashboard;

