// src/components/Header.tsx

import React from "react";
import { Button, Form } from "react-bootstrap";
import { Search, Menu, User, LogOut } from "lucide-react";

const Header = ({
  darkMode,
  toggleSidebar,
  handleSearchChange,
  searchQuery,
  toggleTheme,
  handleUserClick,
  showUserCard,
  handleLogout,
}: {
  darkMode: boolean;
  toggleSidebar: () => void;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchQuery: string;
  toggleTheme: () => void;
  handleUserClick: () => void;
  showUserCard: boolean;
  handleLogout: () => void;
}) => {
  return (
    <header
      className={`flex justify-between items-center mb-8 ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'} transition-all`}
    >
      <div className="flex items-center space-x-4">
        {/* Menu Toggle Button */}
        <Button
          variant="outline-secondary"
          onClick={toggleSidebar}
          className={`p-2 ${darkMode ? 'text-white' : 'text-neutral-800'}`}
        >
          <Menu className={`h-5 w-5 ${darkMode ? 'text-white' : 'text-neutral-800'}`} />
        </Button>

        {/* Search Bar */}
        <Form.Control
          type="text"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-64"
        />
        <Button variant="outline-primary" className="flex items-center space-x-2">
          <Search className={`h-4 w-4 ${darkMode ? 'text-white' : 'text-neutral-800'}`} />
          <span className={darkMode ? 'text-white' : 'text-neutral-800'}>Search</span>
        </Button>
      </div>

      <div className="flex items-center space-x-4">
        {/* Theme Toggle Button */}
        <Button
          variant="outline-secondary"
          onClick={toggleTheme}
          className={`p-2 ${darkMode ? 'text-white' : 'text-neutral-800'}`}
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </Button>

        {/* User Details Icon */}
        <Button
          variant="outline-secondary"
          onClick={handleUserClick}
          className={`flex items-center space-x-2 ${darkMode ? 'text-white' : 'text-neutral-800'}`}
        >
          <User className={`h-5 w-5 ${darkMode ? 'text-white' : 'text-neutral-800'}`} />
          <span className={darkMode ? 'text-white' : 'text-neutral-800'}>User</span>
        </Button>
      </div>

      {/* User Details Card (Conditional rendering) */}
      {showUserCard && (
        <div className={`absolute top-20 right-6 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-lg rounded-lg p-4 w-72 z-50`}>
          <div className="text-center">
            <div className="mb-4">
              <User className={`h-12 w-12 mx-auto ${darkMode ? 'text-white' : 'text-neutral-800'}`} />
            </div>
            <h3 className={`font-semibold text-lg ${darkMode ? 'text-white' : 'text-neutral-800'}`}>User Name</h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-4`}>user@example.com</p>
            <Button variant="outline-danger" onClick={handleLogout} className="w-full">
              <LogOut className={`h-4 w-4 mr-2 ${darkMode ? 'text-white' : 'text-neutral-800'}`} />
              <span className={darkMode ? 'text-white' : 'text-neutral-800'}>Logout</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
