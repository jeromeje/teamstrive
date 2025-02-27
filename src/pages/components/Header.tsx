import React from "react";
import { Button, Form } from "react-bootstrap";
import { Search, User, Menu } from "lucide-react";

const Header = ({
  darkMode,
  toggleTheme,
  handleSearchChange,
  searchQuery,
  handleUserClick,
  toggleSidebar,
}) => (
  <header
    className={`flex justify-between items-center mb-8 p-4 ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'} transition-all`}
  >
    <div className="flex items-center space-x-4 w-full md:w-auto">
      {/* Menu Toggle Button for mobile */}
      <Button
        variant="outline-secondary"
        onClick={toggleSidebar}
        className={`p-2 ${darkMode ? 'text-white' : 'text-neutral-800'} d-md-none`}
      >
        <Menu className={`h-5 w-5 ${darkMode ? 'text-white' : 'text-neutral-800'}`} />
      </Button>

      {/* Search Bar (hidden on small screens) */}
      <Form.Control
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="w-64 d-none d-md-block"
      />
      <Button variant="outline-primary" className="flex items-center space-x-2 d-none d-md-block">
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
  </header>
);

export default Header;
