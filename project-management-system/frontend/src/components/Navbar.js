// Navbar.js
import React from 'react';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
    return (
        <nav className={`p-4 flex justify-between items-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} transition-colors`}>
            <h1 className={`text-xl ${isDarkMode ? 'text-white' : 'text-black'}`}>Project Manager</h1>
            <button
                onClick={toggleDarkMode}
                className={`px-4 py-2 rounded ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black'} transition-colors`}
            >
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </nav>
    );
};

export default Navbar;
